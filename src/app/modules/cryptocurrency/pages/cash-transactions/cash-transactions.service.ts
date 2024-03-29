import { Injectable } from '@angular/core';

import { BehaviorSubject, Observable, of, tap } from 'rxjs';
import { combineLatest } from 'rxjs';

import { CashTransactionsInterface } from './interfaces/cash-transactions.interface';
import { CASH_TRANSACTIONS_STATE } from './states/cash-transactions.state';
import { WithdrawalInterface } from './interfaces/withdrawal.interface';
import { DepositInterface } from './interfaces/deposit.interface';

import * as CASH_WITHDRAWALS from "./jsons/cash-withdrawals.json";
import * as CASH_DEPOSITS from "./jsons/cash-deposits.json";

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

  get cashStatistic(): any {
    return this.cashTransactionsState.statistic;
  }

  getCashTransactions(): Observable<[WithdrawalInterface[], DepositInterface[]]> {
    return combineLatest([of((CASH_WITHDRAWALS as any).default), of((CASH_DEPOSITS as any).default)]).pipe(
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
      })
    );
  }

  private calculateTotalInUAH(list: TransactionsType[] = []): number {
    return list.reduce((acc: number, transaction: TransactionsType) => {
      if (transaction.fiatCurrency === 'USD') {
        return acc + (+transaction.indicatedAmount * +transaction.usdPrice);
      }

      return acc + +transaction.indicatedAmount;
    }, 0);
  }

  private calculateTotalInUSD(list: TransactionsType[] = []): number {
    return list.reduce((acc: number, transaction: TransactionsType) => acc + +transaction.usdAmount!, 0);
  }

  private setUSDPriceProperty(list: TransactionsType[]): TransactionsType[] {
    return list.map((item: TransactionsType) => {
      if (item.fiatCurrency === 'USD') {
        return { ...item, usdAmount: +item.indicatedAmount }
      }

      return { ...item, usdAmount: +item.indicatedAmount / +item.usdPrice }
    });
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
