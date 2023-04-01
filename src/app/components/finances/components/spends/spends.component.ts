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
    savings: 0
  };

  constructor() { }

  ngOnInit(): void {
    this.dataSource = this.state.map((item: any) => {
      let categories: any[] = [];

      if (!item.taxes.payed) {
        item.taxes.singleTax = item.taxes.singleTaxPercentage * item.income.total;
        item.taxes.total = item.taxes.singleSocialContribution + item.taxes.singleTax;

        categories.push({
          total: item.taxes.total,
          name: 'Taxes'
        });

        this.total.taxes = this.total.taxes + item.taxes.total;
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
