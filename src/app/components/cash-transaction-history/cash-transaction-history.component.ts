import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { MatTableDataSource } from '@angular/material/table';
import { NgxIndexedDBService } from 'ngx-indexed-db';
import { Subscription, switchMap } from 'rxjs';
import { AddTransactionComponent } from './add-transaction/add-transaction.component';

export interface CashTransactionHistoryInterface {
  withdraw: number;
  deposit: {
    UAH: number;
    USD: number;
  };
  month: string;
  year: number;
}

const TRANSACTION_HISTORY: CashTransactionHistoryInterface[] = [
  {
    year: 2020,
    month: 'November',
    deposit: {
      UAH: 3200,
      USD: 112.5,
    },
    withdraw: 332.65,
  },
  {
    year: 2021,
    month: 'January',
    deposit: {
      UAH: 5500,
      USD: 196,
    },
    withdraw: 3155,
  },
  {
    year: 2021,
    month: 'February',
    deposit: {
      UAH: 15000,
      USD: 540,
    },
    withdraw: 0
  },
  {
    year: 2021,
    month: 'March',
    deposit: {
      UAH: 9000,
      USD: 324.7,
    },
    withdraw: 0
  },
  {
    year: 2021,
    month: 'April',
    deposit: {
      UAH: 25800,
      USD: 923,
    },
    withdraw: 0
  },
  {
    year: 2021,
    month: 'May',
    deposit: {
      UAH: 112900,
      USD: 4088
    },
    withdraw: 0
  },
  {
    year: 2021,
    month: 'June',
    deposit: {
      UAH: 0,
      USD: 0
    },
    withdraw: 4678.6
  },
  {
    year: 2021,
    month: 'July',
    deposit: {
      UAH: 28000,
      USD: 1022.5
    },
    withdraw: 3207.7
  },
  {
    year: 2021,
    month: 'October',
    deposit: {
      UAH: 0,
      USD: 0
    },
    withdraw: 1000
  },
  {
    year: 2021,
    month: 'November',
    deposit: {
      UAH: 0,
      USD: 0
    },
    withdraw: 1320
  },
  {
    year: 2022,
    month: 'January',
    deposit: {
      UAH: 20000,
      USD: 706.26
    },
    withdraw: 0
  },
  {
    year: 2022,
    month: 'February',
    deposit: {
      UAH: 0,
      USD: 0
    },
    withdraw: 8875
  },
]

@Component({
  selector: 'app-cash-transaction-history',
  templateUrl: './cash-transaction-history.component.html',
  styleUrls: ['./cash-transaction-history.component.scss']
})
export class CashTransactionHistoryComponent implements OnInit {

  displayedColumns: string[] = ['month', 'despositUAH', 'despositUSD', 'withdraw'];
  dataSource!: MatTableDataSource<CashTransactionHistoryInterface>;

  private subscription: Subscription = new Subscription();

  constructor(
    private dbService: NgxIndexedDBService,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.getCashTransactionHistory();
  }

  openCloseTransactionMonthDialog(): void {
    this.dialog.open(AddTransactionComponent).afterClosed().pipe(
      switchMap((data: CashTransactionHistoryInterface) => this.dbService.add('cash-transactions', data))
    ).subscribe((result: CashTransactionHistoryInterface) => {
      this.dataSource = new MatTableDataSource([...TRANSACTION_HISTORY, result]);
    });
  }

  getDepositTotalCost(currency: string): number {
    return this.dataSource?.filteredData?.reduce((acc: number, transaction: CashTransactionHistoryInterface) => acc + (transaction.deposit as any)[currency], 0);
  }

  getWithdrawTotalCost(): number {
    return this.dataSource?.filteredData?.reduce((acc: number, transaction: CashTransactionHistoryInterface) => acc + transaction.withdraw, 0);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  private getCashTransactionHistory(): void {
    const stream$ = this.dbService.getAll('cash-transactions').subscribe((transactionHistory: any[]) => {
      this.dataSource = new MatTableDataSource(transactionHistory);
    });

    this.subscription.add(stream$);
  }
}
