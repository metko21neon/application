import { AfterViewInit, Component, Input, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';

import { WithdrawalInterface } from '../../interfaces/withdrawal.interface';
import { DepositInterface } from '../../interfaces/deposit.interface';

@Component({
  selector: 'im-cash-transactions-table',
  templateUrl: './cash-transactions-table.component.html',
  styleUrls: ['./cash-transactions-table.component.scss']
})
export class CashTransactionsTableComponent implements AfterViewInit {

  @Input() set data(data: DepositInterface[] | WithdrawalInterface[]) {
    this.dataSource = new MatTableDataSource(data);
  };

  @Input() totalInUAH = 0;
  @Input() totalInUSD = 0;

  @ViewChild(MatSort) sort!: MatSort;

  displayedColumns: string[] = ['createTime', 'usdPrice', 'amount', 'usdAmount'];
  dataSource!: MatTableDataSource<DepositInterface | WithdrawalInterface>;

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
  }
}
