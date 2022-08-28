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
    this.setDataSource(data);
  };

  @ViewChild(MatSort) sort!: MatSort;

  displayedColumns: string[] = ['createTime', 'usdPrice', 'amount', 'usdAmount'];
  dataSource!: MatTableDataSource<DepositInterface | WithdrawalInterface>;

  totalInUAH = 0;
  totalInUSD = 0;

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
  }

  private setDataSource(data: DepositInterface[] | WithdrawalInterface[]): void {
    this.dataSource = new MatTableDataSource(data);

    this.totalInUAH = this.dataSource?.filteredData?.reduce(
      (acc: number, transaction: DepositInterface) => acc + +transaction.indicatedAmount, 0);

    this.totalInUSD = this.dataSource?.filteredData?.reduce(
      (acc: number, transaction: DepositInterface) => acc + (+transaction.indicatedAmount / + transaction.usdPrice!), 0);
  }
}
