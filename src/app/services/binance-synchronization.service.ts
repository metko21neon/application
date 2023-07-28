import { MatDialog } from '@angular/material/dialog';
import { Injectable } from '@angular/core';

import { BehaviorSubject, Observable, concatMap, filter, from, map, switchMap, tap, toArray } from 'rxjs';

import { AppService } from '../app.service';

import moment from 'moment';

import * as COIN_LIST from "./../jsons/coins.json";

import { BinanceWithdrawalInterface } from '../components/binance/interfaces/binance-withdrawal.interface';
import { BinanceDepositInterface } from '../components/binance/interfaces/binance-deposit.interface';
import { Api } from '../api/api';
import { SelectWalletDialogComponent } from '../components/crypto/dialogs/select-wallet-dialog/select-wallet-dialog.component';
import { WITHDRAWAL_STATUS_ENUM } from '../enums/withdrawal-status.enum';
import { WalletNamePipe } from '../pipes/wallet-name.pipe';
import { BinanceOrderInterface } from '../components/binance/interfaces/binance-order.interface';
import { CoinHistoryActionEnum } from '../enums/coin-history-action.enum';
import { CoinsService } from './coins.service';

export interface BinanceResponseOrdersInterface {
  symbol: string;
  wallet?: any;
  orders: BinanceOrderInterface[];
}

export const BINANCE_WALLET_ADDRESS = '0x78a05f925c1424d02211f9df98ebb7ad8df4d557';
export const DATE_FORMAT = 'YYYY-MM-DD HH:mm:ss';

@Injectable()
export class BinanceSynchronizationService {

  constructor(
    private walletNamePipe: WalletNamePipe,
    private coinsService: CoinsService,
    private appService: AppService,
    private dialog: MatDialog,
    private api: Api) {
  }

  synchronize(): Observable<any> {
    // return this.getDepositsHistory().pipe(
    return this.getWithdrawalsHistory().pipe(
      // switchMap(() => this.getOrdersHistory()),
      // switchMap(() => this.getWithdrawalsHistory()),
      switchMap((data: any) => {
        console.log('getCoinList333:', data);
        return this.appService.getCoinList(this.coinsService.coins);
      }),
    );
  }

  private getOrdersHistoryBySymbol(coin: any): Observable<BinanceResponseOrdersInterface> {
    const wallet = this.findWalletByAddress(coin.wallets, coin.symbol, BINANCE_WALLET_ADDRESS);
    const transaction = wallet.transactions.findLast((transaction: any) => transaction.action === 'buy' || transaction.action === 'sell');
    const symbol = coin.symbol === 'MIOTA' ? 'IOTA' : coin.symbol;

    const options = {
      startTime: transaction ? moment(transaction?.date).valueOf() : ''
    };

    return this.api.getOrdersHistoryBySymbol(symbol + 'USDT', options).pipe(
      map((orders: BinanceOrderInterface[]) => ({ symbol: coin.symbol, wallet, orders }))
    );
  }

  private prepareOrderTransaction(order: BinanceOrderInterface): any {
    const buyOrder = { action: 'buy', date: order.date, price: +order.price, total: +order.quoteQty };
    const sellOrder = { action: 'sell', date: order.date, price: +order.price, filled: +order.qty };

    return order.isBuyer ? buyOrder : sellOrder;
  }

  private getOrdersHistory(): Observable<any> {
    return from([{ symbol: 'MDX' }]).pipe(
      filter((coin: any) => !['USDT', 'BUSD'].includes(coin.symbol)),
      concatMap((coin: any) => this.getOrdersHistoryBySymbol(coin)),
      tap((item: BinanceResponseOrdersInterface) => {
        item.orders.map((order: BinanceOrderInterface) => {
          order.date = moment(order.time).format(DATE_FORMAT);

          const amount = order.isBuyer ? +order.quoteQty : +order.qty;
          const transactionIndex = this.findTransactionIndex(item.wallet.transactions, order.date!, amount);
          const transaction = this.prepareOrderTransaction(order);

          if (transactionIndex === -1) {
            item.wallet.transactions.push(transaction);
          }
        });

        item.wallet.transactions.sort(this.SORT_BY_DATE);
      }),
      toArray()
    );
  }

  private openSelectWalletDialog(deposit: BinanceDepositInterface): Observable<any> {
    return this.dialog.open(SelectWalletDialogComponent, {
      disableClose: true,
      width: '600px',
      data: deposit
    }).afterClosed();
  }

  private findTransactionIndex(transactions: any[], date: string | number, amount: number): number {
    return transactions.findIndex((transaction: any) => {
      const isEqualDate = new Date(transaction.date).getTime() === new Date(date).getTime();
      const property = this.getTransactionProprtyByAction(transaction.action);
      return isEqualDate && transaction[property] === amount;
    });
  }

  private getTransactionProprtyByAction(action: string): string {
    switch (action) {
      case CoinHistoryActionEnum.SELL:
        return 'filled';

      case CoinHistoryActionEnum.BUY:
        return 'total';

      default:
        return 'amount';
    }
  }

  private prepareDepositTransferTransaction(deposit: BinanceDepositInterface): any {
    const insertDate = moment(deposit['insertTime']).format(DATE_FORMAT);

    return {
      action: "transfer",
      address: deposit['address'],
      amount: +deposit.amount,
      date: insertDate,
      network: deposit['network'],
      fee: +deposit.fee,
    };
  }

  private prepareDepositReceiveTransaction(deposit: BinanceDepositInterface): any {
    const insertDate = moment(deposit['insertTime']).format(DATE_FORMAT);

    return {
      action: "receive",
      network: deposit.network,
      amount: +deposit.amount,
      date: insertDate,
      fee: +deposit.fee,
    };
  }

  private prepareWithdrawalReceiveTransaction(deposit: BinanceWithdrawalInterface): any {
    const insertDate = moment(deposit['applyTime']).format(DATE_FORMAT);

    return {
      action: "receive",
      network: deposit.network,
      amount: +deposit.amount,
      date: insertDate,
      fee: +deposit.transactionFee,
    };
  }

  private filterExistedDeposits(deposits: BinanceDepositInterface[]): BinanceDepositInterface[] {
    return deposits.filter((deposit: BinanceDepositInterface) => {
      const coin = this.coinsService.findCoinBySymbol(deposit.coin) as any;
      const toWallet = this.findWalletByAddress(coin.wallets, deposit.coin, deposit.address);
      const receiveTransactionIndex = this.findTransactionIndex(toWallet.transactions, deposit['insertTime'], +deposit.amount);

      return receiveTransactionIndex === -1;
    });
  }

  private getDepositsHistory(): Observable<any[]> {
    return this.api.getDepositsHistory().pipe(
      concatMap((list: BinanceDepositInterface[]) => this.filterExistedDeposits(list)),
      concatMap((deposit: BinanceDepositInterface) => this.openSelectWalletDialog(deposit)),
      tap((deposit: BinanceDepositInterface) => {
        const coin = this.coinsService.findCoinBySymbol(deposit.coin) as any;
        // TODO manage case when we donot have coin in the list

        const fromWallet = this.findWalletByAddress(coin.wallets, deposit.coin, deposit.from);
        const toWallet = this.findWalletByAddress(coin.wallets, deposit.coin, deposit.address);
        // TODO manage case when we donot have fromWallet in the wallet list
        // TODO manage case when we donot have toWallet in the wallet list

        const transferTransaction = this.prepareDepositTransferTransaction(deposit);
        const receiveTransaction = this.prepareDepositReceiveTransaction(deposit);

        const transferTransactionIndex = this.findTransactionIndex(fromWallet.transactions, deposit['insertTime'], +deposit.amount);
        const receiveTransactionIndex = this.findTransactionIndex(toWallet.transactions, deposit['insertTime'], +deposit.amount);

        if (transferTransactionIndex === -1) {
          fromWallet.transactions.push(transferTransaction);
          fromWallet.transactions.sort(this.SORT_BY_DATE);
        }

        if (receiveTransactionIndex === -1) {
          toWallet.transactions.push(receiveTransaction);
          toWallet.transactions.sort(this.SORT_BY_DATE);
        }
      }),
      toArray()
    );
  }

  private prepareWithdrawalTransferTransaction(withdrawal: BinanceWithdrawalInterface): any {
    return {
      action: "transfer",
      address: withdrawal['address'],
      amount: +withdrawal['amount'],
      date: withdrawal['applyTime'],
      fee: +withdrawal['transactionFee'],
      network: withdrawal['network'],
    }
  }

  private addCurrentUTC(time: string | number): string {
    return moment(time).add({ hours: 3 }).format(DATE_FORMAT);
  }

  private async filterExistedWithdrawals(withdrawals: BinanceWithdrawalInterface[]): Promise<BinanceWithdrawalInterface[]> {
    return await withdrawals.filter(async (withdrawal: BinanceWithdrawalInterface) => {
      const coin = await this.coinsService.findCoinBySymbol(withdrawal.coin);
      const toWallet = this.findWalletByAddress(coin.wallets, withdrawal.coin, withdrawal.address);
      const receiveTransactionIndex = this.findTransactionIndex(toWallet.transactions, withdrawal['applyTime'], +withdrawal.amount);

      return withdrawal.coin === 'UAH' ? false : receiveTransactionIndex === -1;
    });
  }

  private getWithdrawalsHistory(): Observable<any> {
    const options = { status: WITHDRAWAL_STATUS_ENUM.COMPLETED };

    return this.api.getWithdrawalsHistory(options).pipe(
      concatMap(async (withdrawals: BinanceWithdrawalInterface[]) => {
        return await this.filterExistedWithdrawals(withdrawals) as any;
      }),
      // tap(async (withdrawal: BinanceWithdrawalInterface) => {
      //   withdrawal['applyTime'] = this.addCurrentUTC(withdrawal['applyTime']);
      //   withdrawal.from = '0x78a05f925c1424d02211f9df98ebb7ad8df4d557';

      //   const coin = await this.coinsService.findCoinBySymbol(withdrawal.coin);
      //   // TODO manage case when we donot have coin in the list
      //   console.log('withdrawal:', withdrawal.coin, coin);

      //   const fromWallet = this.findWalletByAddress(coin.wallets, withdrawal.coin, withdrawal.from);
      //   const toWallet = this.findWalletByAddress(coin.wallets, withdrawal.coin, withdrawal.address);
      //   // TODO manage case when we donot have fromWallet in the wallet list
      //   // TODO manage case when we donot have toWallet in the wallet list

      //   const transferTransaction = this.prepareWithdrawalTransferTransaction(withdrawal);
      //   const receiveTransaction = this.prepareWithdrawalReceiveTransaction(withdrawal);

      //   const transferTransactionIndex = this.findTransactionIndex(fromWallet.transactions, withdrawal['applyTime'], +withdrawal.amount);
      //   const receiveTransactionIndex = this.findTransactionIndex(toWallet.transactions, withdrawal['applyTime'], +withdrawal.amount);

      //   if (transferTransactionIndex === -1) {
      //     fromWallet.transactions.push(transferTransaction);
      //     fromWallet.transactions.sort(this.SORT_BY_DATE);
      //   }

      //   if (receiveTransactionIndex === -1) {
      //     toWallet.transactions.push(receiveTransaction);
      //     toWallet.transactions.sort(this.SORT_BY_DATE);
      //   }
      // }),
      toArray()
    );
  }

  private SORT_BY_DATE(a: any, b: any): number {
    const aDate = new Date(a.date).getTime();
    const bDate = new Date(b.date).getTime();

    if (aDate < bDate) return -1;
    if (aDate > bDate) return 1;

    return 0;
  }

  private prepareTransaction(order: any): any {
    let formatted: any = {
      date: order['Date(UTC)'],
      price: +order['AvgTrading Price'],
    };

    switch (order.Type) {
      case 'BUY':
        formatted.action = 'buy';
        formatted.total = +order['Total'];
        break;
      case 'SELL':
        formatted.action = 'sell';
        formatted.filled = +order['Filled'];
        break;

      default:
        break;
    }

    return formatted;
  }

  private findWalletByAddress(wallets: any[], symbol: string, address: string): any {
    const walletIndex = wallets.findIndex((wallet: any) => wallet.address === address)!;
    return walletIndex === -1 ? this.prepareWallet(symbol, address) : wallets[walletIndex];
  }

  private prepareWallet(symbol: string, address: string): any {
    const coinIndex = this.coinsService.coins.findIndex((item: any) => item.symbol === symbol);

    this.coinsService.coins[coinIndex].wallets.push({
      name: this.walletNamePipe.transform(address),
      transactions: [],
      address,
    });

    return this.findWalletByAddress(this.coinsService.coins[coinIndex].wallets, symbol, address)
  }
}
