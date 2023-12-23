import { Component, Input, OnInit } from '@angular/core';

import { StateInterface } from '../../interfaces/state.interface';
import { COST_LIST } from './states/costs.state';

@Component({
  selector: 'app-costs',
  templateUrl: './costs.component.html',
  styleUrls: ['./costs.component.scss']
})
export class CostsComponent implements OnInit {

  @Input() state!: StateInterface[];

  displayedColumns = ['period', 'amount', 'costs'];
  dataSource: any[] = [];

  constructor() { }

  ngOnInit(): void {
    this.dataSource = this.state
      .filter((item: any) => item.costs.total.uah)
      .map((item: any) => ({
        period: item.period,
        amount: item.costs.total.uah,
        costs: this.findCostsByPeriod(item.period)
      }));

    this.calculateRest();
  }

  private calculateRest(): void {
    this.dataSource.map((item: any) => {
      const costsTotal = item.costs.reduce((acc: number, curr: any) => (acc + curr.amount), 0);
      item.rest = item.amount - costsTotal;
    })
  }

  private findCostsByPeriod(period: string): any[] {
    return COST_LIST.find((item: any) => item.period === period)?.costs || [];
  }
}