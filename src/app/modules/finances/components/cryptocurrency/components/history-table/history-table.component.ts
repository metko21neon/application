import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ImCurrencyPipe } from '../../../../../../modules/finances/pipes/im-currency.pipe';
import { CURRENCY_ENUM } from '../../../../enums/currency.enum';

const COLUMN_LIST = ['action', 'date', 'amount', 'description', 'balance'];

@Component({
  selector: 'app-history-table',
  templateUrl: './history-table.component.html',
  styleUrls: ['./history-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    ImCurrencyPipe,
    MatTableModule,
    CommonModule
  ]
})
export class HistoryTableComponent {

  @Input() set history(history: any[]) {
    this.dataSource = new MatTableDataSource(history);
  }

  dataSource!: MatTableDataSource<any>;
  displayedColumns: string[] = COLUMN_LIST;
  CURRENCY_ENUM = CURRENCY_ENUM;
}
