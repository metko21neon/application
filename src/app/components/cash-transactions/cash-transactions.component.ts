import { Component, OnInit } from '@angular/core';

import { Subscription } from 'rxjs';

import { CashTransactionsInterface } from './interfaces/cash-transactions.interface';
import { CashTransactionsService } from './cash-transactions.service';

@Component({
  selector: 'im-cash-transactions',
  templateUrl: './cash-transactions.component.html',
  styleUrls: ['./cash-transactions.component.scss']
})
export class CashTransactionsHistoryComponent implements OnInit {

  cashTransactions!: CashTransactionsInterface;
  updatedDate = '17.12.2022 23:59';

  private subscription: Subscription = new Subscription();

  constructor(private cashTransactionsService: CashTransactionsService) { }

  ngOnInit(): void {
    this.getCashTransactionsSubscription();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  private getCashTransactionsSubscription(): void {
    const stream$ = this.cashTransactionsService.cashTransactions$.subscribe((cashTransactions: CashTransactionsInterface) => {
      this.cashTransactions = cashTransactions;
    });

    this.subscription.add(stream$);
  }
}
