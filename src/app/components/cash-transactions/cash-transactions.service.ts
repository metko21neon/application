import { Injectable } from '@angular/core';

import { BehaviorSubject, Observable, of, switchMap, tap } from 'rxjs';
import { combineLatest } from 'rxjs';

import { CashTransactionsInterface } from './interfaces/cash-transactions.interface';
import { CASH_TRANSACTIONS_STATE } from './states/cash-transactions.state';
import { WithdrawalInterface } from './interfaces/withdrawal.interface';
import { DepositInterface } from './interfaces/deposit.interface';
import { WITHDRAWAL } from '../../states/withdrawal.state';
import { DEPOSIT } from '../../states/deposit.state';

export type TransactionsType = DepositInterface | WithdrawalInterface;

@Injectable({
  providedIn: 'root'
})
export class CashTransactionsService {

  cashTransactions$!: Observable<CashTransactionsInterface>;

  private cashTransactionsState: CashTransactionsInterface = CASH_TRANSACTIONS_STATE;
  private cashTransactionsSubject = new BehaviorSubject<CashTransactionsInterface>(this.cashTransactionsState);

  constructor() {
    this.cashTransactions$ = this.cashTransactionsSubject.asObservable();
  }

  getCashTransactions(): Observable<CashTransactionsInterface> {
    return combineLatest([of(WITHDRAWAL), of(DEPOSIT)]).pipe(
      // return this.firebaseService.getWithdrawalHistory().pipe(
      // return this.firebaseService.getDepositHistory().pipe(
      tap(([withdrawals, deposits]: [WithdrawalInterface[], DepositInterface[]]) => {
        withdrawals = this.sortDataByTime(withdrawals, 'desc');
        deposits = this.sortDataByTime(deposits, 'desc');

        withdrawals = this.setUSDPriceProperty(withdrawals);
        deposits = this.setUSDPriceProperty(deposits);

        this.cashTransactionsState.statistic.withdrawalUAHTotal = this.calculateTotalInUAH(withdrawals);
        this.cashTransactionsState.statistic.withdrawalUSDTotal = this.calculateTotalInUSD(withdrawals);

        this.cashTransactionsState.statistic.depositUAHTotal = this.calculateTotalInUAH(deposits);
        this.cashTransactionsState.statistic.depositUSDTotal = this.calculateTotalInUSD(deposits);

        this.cashTransactionsState.withdrawals = withdrawals;
        this.cashTransactionsState.deposits = deposits;

        this.cashTransactionsSubject.next(this.cashTransactionsState);
      }),
      switchMap(() => this.cashTransactions$)
    );
  }

  private calculateTotalInUAH(list: TransactionsType[] = []): number {
    return list.reduce((acc: number, transaction: TransactionsType) => acc + +transaction.indicatedAmount, 0);
  }

  private calculateTotalInUSD(list: TransactionsType[] = []): number {
    return list.reduce((acc: number, transaction: TransactionsType) => acc + +transaction.usdAmount!, 0);
  }

  private setUSDPriceProperty(list: TransactionsType[]): TransactionsType[] {
    return list.map((item: TransactionsType) => ({ ...item, usdAmount: +item.indicatedAmount / +item.usdPrice }));
  }

  private sortDataByTime(data: TransactionsType[], direction: string = 'asc'): TransactionsType[] {
    return data.sort((a: TransactionsType, b: TransactionsType) => {
      if (direction === 'asc') {
        return a.createTime - b.createTime
      }

      if (direction === 'desc') {
        return b.createTime - a.createTime
      }

      return 0;
    });
  }
}
