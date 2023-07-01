import { Component, Input, OnInit } from '@angular/core';
import { StateInterface } from '../../interfaces/state.interface';

@Component({
  selector: 'app-costs',
  templateUrl: './costs.component.html',
  styleUrls: ['./costs.component.scss']
})
export class CostsComponent implements OnInit {

  @Input() state!: StateInterface[];

  displayedColumns = ['period', 'amount', 'spend', 'rest', 'debt'];
  dataSource: any[] = [];

  constructor() { }

  ngOnInit(): void {
    this.dataSource = this.state;
  }

}
