import { Injectable } from '@angular/core';

import { Observable, concatMap, filter, from, map, switchMap, tap, toArray } from 'rxjs';

import { WalletNamePipe } from '../../../modules/cryptocurrency/enums/wallet-name.pipe';
import { CoinHistoryActionEnum } from '../../../enums/coin-history-action.enum';
import { BinanceOrderInterface } from '../interfaces/binance-order.interface';
import { BinanceWithdrawalsService } from './binance-withdrawals.service';
import { BinanceDepositsService } from './binance-deposits.service';
import { CCCoinsService } from '../../../services/cccoins.service';
import { CoinsService } from '../../../services/coins.service';
import { DATE_FORMAT } from '../../../app.component';
import { Api } from '../../../api/api';

import moment from 'moment';

export interface BinanceResponseOrdersInterface {
  symbol: string;
  wallet?: any;
  orders: BinanceOrderInterface[];
}

export const BINANCE_WALLET_ADDRESS = '0x78a05f925c1424d02211f9df98ebb7ad8df4d557';

@Injectable()
export class BinanceSynchronizationService {

  constructor(
    private binanceWithdrawalsService: BinanceWithdrawalsService,
    private binanceDepositsService: BinanceDepositsService,
    private walletNamePipe: WalletNamePipe,
    private cccoinsService: CCCoinsService,
    private coinsService: CoinsService,
    private api: Api
  ) { }

  synchronize(): Observable<any> {
    return this.getOrdersHistory().pipe(
      switchMap(() => this.coinsService.getCoinList(this.cccoinsService.coins))
    );
  }

  synchronizeWithdrawalsHistory(): Observable<any> {
    return this.binanceWithdrawalsService.getWithdrawalsHistory().pipe(
      switchMap(() => this.coinsService.getCoinList(this.cccoinsService.coins))
    );
  }

  synchronizeDepositsHistory(): Observable<any> {
    return this.binanceDepositsService.getDepositsHistory().pipe(
      switchMap(() => this.coinsService.getCoinList(this.cccoinsService.coins))
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
      map((orders: BinanceOrderInterface[]) => ({ symbol: coin.symbol, wallet, orders: Array.isArray(orders) ? orders : [] }))
    );
  }

  private prepareOrderTransaction(order: BinanceOrderInterface): any {
    const buyOrder = { action: 'buy', date: order.date, price: +order.price, total: +order.quoteQty };
    const sellOrder = { action: 'sell', date: order.date, price: +order.price, filled: +order.qty };

    return order.isBuyer ? buyOrder : sellOrder;
  }

  private getOrdersHistory(): Observable<any> {
    return from(this.cccoinsService.coins.slice(0, 20)).pipe(
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

  private SORT_BY_DATE(a: any, b: any): number {
    const aDate = new Date(a.date).getTime();
    const bDate = new Date(b.date).getTime();

    if (aDate < bDate) return -1;
    if (aDate > bDate) return 1;

    return 0;
  }

  private findWalletByAddress(wallets: any[], symbol: string, address: string): any {
    const walletIndex = wallets.findIndex((wallet: any) => wallet.address === address)!;
    return walletIndex === -1 ? this.prepareWallet(symbol, address) : wallets[walletIndex];
  }

  private prepareWallet(symbol: string, address: string): any {
    const coinIndex = this.cccoinsService.coins.findIndex((item: any) => item.symbol === symbol);

    this.cccoinsService.coins[coinIndex].wallets.push({
      name: this.walletNamePipe.transform(address),
      transactions: [],
      address,
    });

    return this.findWalletByAddress(this.cccoinsService.coins[coinIndex].wallets, symbol, address)
  }
}
