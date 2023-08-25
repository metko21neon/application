import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Injectable } from '@angular/core';

import { BehaviorSubject, Observable } from 'rxjs';

import { FillCoinDataDialogComponent } from '../components/crypto/dialogs/fill-coin-data-dialog/fill-coin-data-dialog.component';
import { CoinHistoryActionEnum } from '../enums/coin-history-action.enum';

import * as COIN_LIST from "./../jsons/coins.json";

@Injectable({
  providedIn: 'root'
})
export class CoinsService {

  coins$!: Observable<any[]>;

  private coinsState: any[] = JSON.parse(JSON.stringify((COIN_LIST as any).default));
  private coinsSubject = new BehaviorSubject<any[]>(this.coinsState);

  constructor(private dialog: MatDialog) {
    this.coins$ = this.coinsSubject.asObservable();
  }

  get coins(): any[] {
    return this.coinsSubject.getValue();
  }

  findCoinBySymbol(symbol: string): any {
    const coinIndex = this.coinsState.findIndex((item: any) => item.symbol === symbol);
    if (coinIndex === -1) {
      console.log('ADD coin:', symbol);
    }
    return this.coinsState[coinIndex];
    // return coinIndex === -1 ? this.prepareCoin(symbol) : this.coinsState[coinIndex];
  }

  findTransactionIndex(transactions: any[], date: string | number, amount: number): number {
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

  private prepareCoin(symbol: string): any {
    const config: MatDialogConfig = {
      disableClose: true,
      data: symbol,
    };

    this.dialog.open(FillCoinDataDialogComponent, config).afterClosed();
    this.coinsState.push();

    return this.findCoinBySymbol(symbol);
  }
}
