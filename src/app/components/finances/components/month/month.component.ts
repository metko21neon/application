import { Component, Input, OnInit } from '@angular/core';

import { StateInterface } from '../../interfaces/state.interface';
import { DebtInterface } from '../../finances.component';

const SINGLE_TAX_PERCENTAGE = 0.05;
const SAVINGS_PERCENTAGE = 0.1;

@Component({
  selector: 'app-month',
  templateUrl: './month.component.html',
  styleUrls: ['./month.component.scss']
})
export class MonthComponent implements OnInit {

  @Input() state!: StateInterface[];

  displayedColumns = ['period', 'incomes', 'taxes', 'savings', 'newDebts', 'payedDebts', 'lifeCosts', 'investing'];
  dataSource: any[] = [];
  total: any;

  constructor() { }

  ngOnInit(): void {
    this.setDataSource();
    this.setTotal();
  }

  private getQuarter(date: Date): number {
    return Math.floor(date.getMonth() / 3 + 1);
  }

  private calculateTotalAmount(list: DebtInterface[]): number {
    return list.reduce((acc: number, { amount }: { amount: number }) => (acc + amount), 0);
  }

  private setDataSource(): void {
    this.dataSource = this.state.map((item: any) => {
      // item.income.total = this.calculateTotalAmount(item.income.list);

      // item.taxes.singleTax = SINGLE_TAX_PERCENTAGE * item.income.total;
      // item.taxes.total = item.taxes.singleSocialContribution + item.taxes.singleTax;
      // item.taxes.rest = item.income.total - item.taxes.total;

      // item.savings.rest = item.taxes.total - Math.round(item.savings.percentage * item.savings.total / 100) * 100;
      // item.savings.total = Math.round(SAVINGS_PERCENTAGE * item.savings.total / 100) * 100;

      // item.debt.total = this.calculateTotalAmount(item.debt.list);
      // item.debt.rest = item.savings.rest + this.calculateTotalAmount(item.debt.list);
      console.log('getQuarter:', this.getQuarter(new Date(item.period.string)));


      item.income.total = this.calculateTotalAmount(item.income.list);

      item.taxes.singleTax = SINGLE_TAX_PERCENTAGE * item.income.total;
      item.taxes.total = item.taxes.singleSocialContribution + item.taxes.singleTax;
      item.taxes.rest = item.income.total - item.taxes.total;

      // const pureIncome = { total: item.income.total - item.taxes.total };

      item.savings.rest = item.taxes.rest - Math.round(item.savings.percentage * item.taxes.rest / 100) * 100;
      item.savings.total = Math.round(SAVINGS_PERCENTAGE * item.taxes.rest / 100) * 100;
      // const savings = {
      //   rest: pureIncome.total - Math.round(SAVINGS_PERCENTAGE * pureIncome.total / 100) * 100,
      //   total: Math.round(SAVINGS_PERCENTAGE * pureIncome.total / 100) * 100,
      // };

      item.debt.total = this.calculateTotalAmount(item.debt.list);
      item.debt.rest = item.savings.rest + this.calculateTotalAmount(item.debt.list);

      const payedDebts = {
        rest: item.debt.rest - this.calculateTotalAmount(item.debt.payed.list),
        total: this.calculateTotalAmount(item.debt.payed.list),
        list: item.debt.payed.list,
      };

      item.lifeCosts.total = this.calculateTotalAmount(item.lifeCosts.list);
      item.lifeCosts.rest = payedDebts.rest - this.calculateTotalAmount(item.lifeCosts.list);

      item.investing.total = item.lifeCosts.rest;
      item.investing.rest = item.lifeCosts.rest - this.calculateTotalAmount(item.investing.list);

      return {
        period: item.period.string,
        lifeCosts: item.lifeCosts,
        investing: item.investing,
        savings: item.savings,
        income: item.income,
        taxes: item.taxes,
        newDebts: item.debt,
        payedDebts,
      }
    });
  }

  private setTotal(): void {
    this.total = {
      payedDebts: this.calculateFullTotal('payedDebts'),
      lifeCosts: this.calculateFullTotal('lifeCosts'),
      investing: this.calculateFullTotal('investing'),
      savings: this.calculateFullTotal('savings'),
      income: this.calculateFullTotal('income'),
      taxes: this.calculateFullTotal('taxes'),
      newDebts: this.calculateFullTotal('newDebts'),
    };
  }

  private calculateFullTotal(property: string): void {
    return this.dataSource.reduce((acc: number, item: any) => (acc + item[property].total), 0);
  }
}
