import { Component, OnInit } from '@angular/core';

import { debounceTime, Subscription, switchMap } from 'rxjs';

import { WithdrawalInterface } from './interfaces/withdrawal.interface';
import { CashTransactionsService } from './cash-transactions.service';
import { DepositInterface } from './interfaces/deposit.interface';

@Component({
  selector: 'im-cash-transactions',
  templateUrl: './cash-transactions.component.html',
  styleUrls: ['./cash-transactions.component.scss']
})
export class CashTransactionsHistoryComponent implements OnInit {

  withdrawalUSDTotal = 0;
  withdrawalTotal = 0;

  depositUSDTotal = 0;
  depositTotal = 0;

  withdrawalHistory: WithdrawalInterface[] = [];
  depositHistory: DepositInterface[] = [];

  private subscription: Subscription = new Subscription();

  constructor(private cashTransactionsService: CashTransactionsService) { }

  ngOnInit(): void {
    this.getWithdrawalHistory();
    this.getDepositHistory();
  }

  synchronize(): void {
    const stream$ = this.cashTransactionsService.synchronize().subscribe();

    this.subscription.add(stream$);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  private getDepositHistory(): void {
    const stream$ = this.cashTransactionsService.getDepositHistory().pipe(
      switchMap(() => this.cashTransactionsService.deposits$),
      debounceTime(200)
    ).subscribe((depositHistory: DepositInterface[]) => {
      this.depositHistory = depositHistory.map((deposit: DepositInterface) => {
        return { ...deposit, usdAmount: (+deposit.indicatedAmount / +deposit.usdPrice) };
      });

      this.depositTotal = this.depositHistory?.reduce(
        (acc: number, transaction: DepositInterface) => acc + +transaction.indicatedAmount, 0);

      this.depositUSDTotal = this.depositHistory?.reduce(
        (acc: number, transaction: DepositInterface) => acc + (+transaction.indicatedAmount / + transaction.usdPrice!), 0);
    });

    this.subscription.add(stream$);
  }

  private getWithdrawalHistory(): void {
    const stream$ = this.cashTransactionsService.getWithdrawalHistory().pipe(
      switchMap(() => this.cashTransactionsService.withdrawals$),
      debounceTime(200)
    ).subscribe((withdrawalHistory: WithdrawalInterface[]) => {
      this.withdrawalHistory = withdrawalHistory.map((withdraw: WithdrawalInterface) => {
        return { ...withdraw, usdAmount: (+withdraw.indicatedAmount / +withdraw.usdPrice) };
      });

      this.withdrawalTotal = this.withdrawalHistory?.reduce(
        (acc: number, transaction: WithdrawalInterface) => acc + +transaction.indicatedAmount, 0);

      this.withdrawalUSDTotal = this.withdrawalHistory?.reduce(
        (acc: number, transaction: WithdrawalInterface) => acc + (+transaction.indicatedAmount / + transaction.usdPrice!), 0);
    });

    this.subscription.add(stream$);
  }
}
