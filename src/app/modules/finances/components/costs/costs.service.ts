import { Injectable } from '@angular/core';

import { FinancesService } from '../../finances.service';
import { COST_LIST } from './states/costs.state';

@Injectable({
  providedIn: 'root'
})
export class CostsService {

  dataSource: any[] = [];
  rest = 0;

  constructor(private financesService: FinancesService) { }

  setDataSource(): void {
    this.dataSource = this.financesService.fState
      .filter((item: any) => item.costs.total.uah)
      .map((item: any) => ({
        period: item.period,
        amount: item.costs.total.uah,
        costs: this.findCostsByPeriod(item.period)
      }));
  }

  calculateRest(): void {
    this.dataSource.map((item: any) => {
      const costsTotal = item.costs.reduce((acc: number, curr: any) => (acc + curr.amount), 0);
      item.rest = item.amount - costsTotal;
    });

    this.rest = this.dataSource.reduce((acc: number, item: any) => acc + item.rest, 0)
  }

  private findCostsByPeriod(period: string): any[] {
    return COST_LIST.find((item: any) => item.period === period)?.costs || [];
  }
}
