import { Injectable } from '@angular/core';

import { BehaviorSubject, delay, Observable, of, reduce, tap } from 'rxjs';
import { combineLatest, concatMap, from } from 'rxjs';

import { WithdrawalInterface } from './interfaces/withdrawal.interface';
import { TimeRangeInterface } from '../../interfaces/time-range.interface';
import { DepositInterface } from './interfaces/deposit.interface';
import { getDateRange } from '../../utilities/date-range.utility';
import { FirebaseService } from '../../services/firebase.service';
import { Api } from '../../api/api';

import { WITHDRAWAL } from '../../states/withdrawal.state';
import { DEPOSIT } from '../../states/deposit.state';

@Injectable({
  providedIn: 'root'
})
export class CashTransactionsService {

  withdrawals$!: Observable<WithdrawalInterface[]>;
  deposits$!: Observable<DepositInterface[]>;

  private withdrawalsState: WithdrawalInterface[] = [];
  private withdrawalsSubject = new BehaviorSubject<WithdrawalInterface[]>(this.withdrawalsState);

  private depositsState: DepositInterface[] = [];
  private depositsSubject = new BehaviorSubject<DepositInterface[]>(this.depositsState);

  constructor(
    private firebaseService: FirebaseService,
    private api: Api) {
    this.withdrawals$ = this.withdrawalsSubject.asObservable();
    this.deposits$ = this.depositsSubject.asObservable();
  }

  synchronize(): Observable<[WithdrawalInterface[], DepositInterface[]]> {
    return combineLatest([
      this.synchronizeWithdrawalHistory(),
      this.synchronizeDepositHistory()
    ]);
  }

  getWithdrawalHistory(): Observable<WithdrawalInterface[]> {
    return of(WITHDRAWAL).pipe(
      // return this.firebaseService.getWithdrawalHistory().pipe(
      tap((withdrawals: WithdrawalInterface[]) => {
        this.setWithdrawalsState(withdrawals);
      })
    );
  }

  getDepositHistory(): Observable<WithdrawalInterface[]> {
    return of(DEPOSIT).pipe(
      // return this.firebaseService.getDepositHistory().pipe(
      tap((deposits: DepositInterface[]) => this.setDepositsState(deposits))
    );
  }

  private sortDataByTime(data: DepositInterface[], direction: string = 'asc'): void {
    data.sort((a: DepositInterface, b: DepositInterface) => {
      if (direction === 'asc') {
        return a.createTime - b.createTime
      }

      if (direction === 'desc') {
        return b.createTime - a.createTime
      }

      return 0;
    });
  }

  private setWithdrawalsState(withdrawals: WithdrawalInterface[]): void {
    this.sortDataByTime(withdrawals, 'desc');

    console.log('setWithdrawalsState:', withdrawals);
    this.withdrawalsState = withdrawals;
    this.withdrawalsSubject.next(this.withdrawalsState);
  }

  private setDepositsState(deposits: DepositInterface[]): void {
    this.sortDataByTime(deposits, 'desc');
    console.log('setDepositsState:', deposits);
    this.depositsState = deposits;
    this.depositsSubject.next(this.depositsState);
  }

  private synchronizeWithdrawalHistory(): Observable<WithdrawalInterface[]> {
    const range = getDateRange(this.withdrawalsState[0]?.updateTime);

    return of([]);
    return from(range).pipe(
      concatMap((range: TimeRangeInterface) => this.api.getWithdrawalByRange(range)),
      reduce((acc: WithdrawalInterface[], curr) => [...acc, ...curr?.data], []),
      tap((withdrawals: WithdrawalInterface[]) => {
        const filteredWithdrawals = withdrawals.filter((item: WithdrawalInterface) => {
          // if (item.status === 'Successful') {
          //   this.firebaseService.addWithdrawalToHistory(item);
          // }

          return item.status === 'Successful';
        });

        this.setWithdrawalsState([...this.withdrawalsState, ...filteredWithdrawals]);
      })
    );
  }

  private synchronizeDepositHistory(): Observable<DepositInterface[]> {
    const range = getDateRange(this.depositsState[0]?.updateTime);

    return of([]);
    return from(range).pipe(
      concatMap((range: TimeRangeInterface) => this.api.getDepositByRange(range)),
      reduce((acc: DepositInterface[], curr) => [...acc, ...curr?.data || []], []),
      tap((deposits: DepositInterface[]) => {
        const filteredDeposits = deposits.filter((item: DepositInterface) => {
          // if (item.status === 'Successful') {
          //   this.firebaseService.addDepositToHistory(item);
          // }

          return item.status === 'Successful';
        });

        this.setDepositsState([...this.depositsState, ...filteredDeposits]);
      })
    );
  }
}
