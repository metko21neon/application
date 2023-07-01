import { Component, Input, OnInit } from '@angular/core';

import { StateInterface } from '../../interfaces/state.interface';
import { DebtInterface } from '../../finances.component';

@Component({
  selector: 'app-spends',
  templateUrl: './spends.component.html',
  styleUrls: ['./spends.component.scss']
})
export class SpendsComponent implements OnInit {

  @Input() state!: StateInterface[];

  dataSource: any[] = [];
  total: any = {
    investing: 0,
    taxes: 0,
    savings: 0,
    costs: 0,
  };

  constructor() { }

  ngOnInit(): void {
    this.dataSource = this.state.map((item: any) => {
      let categories: any[] = [];

      const taxesTotal = this.calculateTotalAmount(this.filterUnpaidBills(item.taxes.list));

      if (taxesTotal) {
        this.total.taxes = this.total.taxes + taxesTotal;

        categories.push({
          list: this.filterUnpaidBills(item.taxes.list),
          total: taxesTotal,
          name: 'Taxes'
        });
      }

      const debtsTotal = this.calculateTotalAmount(this.filterUnpaidBills(item.debt.payed.list));

      if (debtsTotal) {
        categories.push({
          list: this.filterUnpaidBills(item.debt.payed.list),
          name: 'Payed debts',
          total: debtsTotal,
        });
      }

      const investingTotal = this.calculateTotalAmount(this.filterUnpaidBills(item.investing.list));

      if (investingTotal) {
        this.total.investing = this.total.investing + investingTotal;

        categories.push({
          list: this.filterUnpaidBills(item.investing.list),
          name: 'Investing',
          total: investingTotal,
        });
      }

      const savingsTotal = this.calculateTotalAmount(this.filterUnpaidBills(item.savings.list));

      if (savingsTotal) {
        this.total.savings = this.total.savings + savingsTotal;

        categories.push({
          list: this.filterUnpaidBills(item.savings.list),
          name: 'Savings',
          total: savingsTotal,
        });
      }

      const costsTotal = this.calculateTotalAmount(this.filterUnpaidBills(item.costs.list));

      if (costsTotal) {
        this.total.costs = this.total.costs + costsTotal;

        categories.push({
          list: this.filterUnpaidBills(item.costs.list),
          name: 'Costs',
          total: costsTotal,
        });
      }

      return {
        period: item.period.string,
        categories
      }
    });
  }

  private calculateTotalAmount(list: DebtInterface[]): number {
    return list.reduce((acc: number, { amount }: { amount: number }) => (acc + amount), 0);
  }

  private filterUnpaidBills(list: any[]): any[] {
    return list.filter(({ payed }: { payed: boolean }) => payed === false);
  }
}
