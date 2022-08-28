import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

const COLUMN_LIST: string[] = ['cpe', 'name', 'operator', 'version'];

const DATA = [
  {

  }
]

@Component({
  selector: 'im-capital',
  templateUrl: './capital.component.html',
  styleUrls: ['./capital.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class CapitalComponent implements OnInit {

  expandedElement: any | null = null;
  dataSource!: MatTableDataSource<any>;
  columnList: string[] = COLUMN_LIST;

  constructor() { }

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource(DATA);
  }
}
