import { IGNORED_WALLET_LIST, WalletAddressInterface } from '../../../modules/cryptocurrency/states/wallet.state';
import { BinanceWithdrawalInterface } from '../interfaces/binance-withdrawal.interface';
import { WITHDRAWAL_STATUS_ENUM } from '../../../enums/withdrawal-status.enum';
import { BinanceWithdrawalModel } from '../models/binance-withdrawal.model';
import { WalletNamePipe } from '../../../pipes/wallet-name.pipe';
import { CCCoinsService } from '../../../services/cccoins.service';
import { DATE_FORMAT } from '../../../app.component';
import { BinanceApi } from '../api/binance.api';

import { Observable, concatMap, tap, toArray } from 'rxjs';

import { Injectable } from '@angular/core';

import moment from 'moment';

@Injectable()
export class BinanceWithdrawalsService {

  constructor(
    private walletNamePipe: WalletNamePipe,
    private coinsService: CCCoinsService,
    private api: BinanceApi
  ) { }

  getWithdrawalsHistory(): Observable<any> {
    const options = { status: WITHDRAWAL_STATUS_ENUM.COMPLETED };

    return this.api.getWithdrawalsHistory(options).pipe(
      concatMap((withdrawals: BinanceWithdrawalInterface[]) => this.filterExistedWithdrawals(withdrawals)),
      tap((withdrawal: BinanceWithdrawalInterface) => {
        withdrawal['applyTime'] = this.addCurrentUTC(withdrawal['applyTime']);
        withdrawal.from = '0x78a05f925c1424d02211f9df98ebb7ad8df4d557';

        const coin = this.coinsService.findCoinBySymbol(withdrawal.coin);
        // TODO manage case when we donot have coin in the list

        const fromWallet = this.findWalletByAddress(coin.wallets, withdrawal.coin, withdrawal.from);
        const toWallet = this.findWalletByAddress(coin.wallets, withdrawal.coin, withdrawal.address);
        // TODO manage case when we donot have fromWallet in the wallet list
        // TODO manage case when we donot have toWallet in the wallet list

        const transferTransaction = new BinanceWithdrawalModel('transfer', withdrawal);
        const receiveTransaction = new BinanceWithdrawalModel('receive', withdrawal);

        const transferTransactionIndex = this.coinsService.findTransactionIndex(fromWallet.transactions, withdrawal['applyTime'], +withdrawal.amount);
        const receiveTransactionIndex = this.coinsService.findTransactionIndex(toWallet.transactions, withdrawal['applyTime'], +withdrawal.amount);

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

  private addCurrentUTC(time: string | number): string {
    return moment(time).add({ hours: 3 }).format(DATE_FORMAT);
  }

  private filterExistedWithdrawals(withdrawals: BinanceWithdrawalInterface[]): BinanceWithdrawalInterface[] {
    return withdrawals.filter((withdrawal: BinanceWithdrawalInterface) => {
      if (this.isIgnoredAddress(withdrawal.address)) return false;

      const coin = this.coinsService.findCoinBySymbol(withdrawal.coin);
      const toWallet = this.findWalletByAddress(coin.wallets, withdrawal.coin, withdrawal.address);
      const receiveTransactionIndex = this.coinsService.findTransactionIndex(toWallet.transactions, withdrawal['applyTime'], +withdrawal.amount);

      return withdrawal.coin === 'UAH' ? false : receiveTransactionIndex === -1;
    });
  }

  private isIgnoredAddress(address: string): boolean {
    return IGNORED_WALLET_LIST.some((wallet: WalletAddressInterface) => wallet.address === address);
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
    const coinIndex = this.coinsService.coins.findIndex((item: any) => item.symbol === symbol);

    this.coinsService.coins[coinIndex].wallets.push({
      name: this.walletNamePipe.transform(address),
      transactions: [],
      address,
    });

    return this.findWalletByAddress(this.coinsService.coins[coinIndex].wallets, symbol, address)
  }
}
