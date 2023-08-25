import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

import { BalanceInterface } from '../../interfaces/balance.interface';
import { CURRENCY_ENUM } from '../../../../enums/currency.enum';

const COLUMN_LIST = ['action', 'date', 'amount', 'balance'];

@Component({
  selector: 'app-balance-history-table',
  templateUrl: './balance-history-table.component.html',
  styleUrls: ['./balance-history-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BalanceHistoryTableComponent {

  @Input() set balanceHistory(history: BalanceInterface[]) {
    this.dataSource = new MatTableDataSource(history);
  }

  dataSource!: MatTableDataSource<BalanceInterface>;
  displayedColumns: string[] = COLUMN_LIST;
  CURRENCY_ENUM = CURRENCY_ENUM;
}
