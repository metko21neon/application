import { MatDialog } from '@angular/material/dialog';
import { Injectable } from '@angular/core';

import { Observable, concatMap, tap, toArray } from 'rxjs';

import { SelectWalletDialogComponent } from '../../../modules/cryptocurrency/pages/coin-list/dialogs/select-wallet-dialog/select-wallet-dialog.component';
import { WalletNamePipe } from '../../../modules/cryptocurrency/enums/wallet-name.pipe';
import { BinanceDepositInterface } from '../interfaces/binance-deposit.interface';
import { BinanceDepositModel } from '../models/binance-deposit.model';
import { CCCoinsService } from '../../../services/cccoins.service';
import { BinanceApi } from '../api/binance.api';

@Injectable()
export class BinanceDepositsService {

  constructor(
    private walletNamePipe: WalletNamePipe,
    private coinsService: CCCoinsService,
    private dialog: MatDialog,
    private api: BinanceApi
  ) { }

  getDepositsHistory(): Observable<any[]> {
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

        const transferTransaction = new BinanceDepositModel('transfer', deposit);
        const receiveTransaction = new BinanceDepositModel('receive', deposit);

        const transferTransactionIndex = this.coinsService.findTransactionIndex(fromWallet.transactions, deposit['insertTime'], +deposit.amount);
        const receiveTransactionIndex = this.coinsService.findTransactionIndex(toWallet.transactions, deposit['insertTime'], +deposit.amount);

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

  private openSelectWalletDialog(deposit: BinanceDepositInterface): Observable<any> {
    return this.dialog.open(SelectWalletDialogComponent, {
      disableClose: true,
      width: '600px',
      data: deposit
    }).afterClosed();
  }

  private filterExistedDeposits(deposits: BinanceDepositInterface[]): BinanceDepositInterface[] {
    return deposits.filter((deposit: BinanceDepositInterface) => {
      const coin = this.coinsService.findCoinBySymbol(deposit.coin) as any;
      const toWallet = this.findWalletByAddress(coin.wallets, deposit.coin, deposit.address);
      const receiveTransactionIndex = this.coinsService.findTransactionIndex(toWallet.transactions, deposit['insertTime'], +deposit.amount);

      return receiveTransactionIndex === -1;
    });
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
