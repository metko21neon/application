import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

import { BondInterface } from '../../interfaces/bond.interface';

const COLUMN_LIST = ['status', 'creation_date', 'quantity', 'amount', 'percantage', 'return_date', 'return_amount', 'income_amount'];

@Component({
  selector: 'app-bonds-table',
  templateUrl: './bonds-table.component.html',
  styleUrls: ['./bonds-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BondsTableComponent {

  @Input() set bonds(bonds: BondInterface[]) {
    this.dataSource = new MatTableDataSource(bonds);
  }

  dataSource!: MatTableDataSource<BondInterface>;
  displayedColumns: string[] = COLUMN_LIST;
}
