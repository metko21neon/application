import { Component, Input, OnInit } from '@angular/core';

import { StateInterface } from '../../interfaces/state.interface';
import { SAVINGS_STATE } from '../../states/savings.state';

const STATE = [
  {
    label: 'EURO',
    amount: 540,
    exchangeRate: 38.8
  },
  {
    label: 'USD',
    amount: 1_840,
    exchangeRate: 37.453
  },
  {
    label: 'UAH',
    amount: 0,
    exchangeRate: 1
  },
];

@Component({
  selector: 'app-savings',
  templateUrl: './savings.component.html',
  styleUrls: ['./savings.component.scss']
})
export class SavingsComponent implements OnInit {

  @Input() state!: StateInterface[];

  displayedCurrencyColumns: string[] = ['currency', 'amount', 'exchangeRate', 'amountUAH']
  displayedColumns: string[] = ['period', 'amount']
  dataSource: any[] = [];
  savings = {
    notPayed: 0,
    total: 0,
    payed: 0,
    capitalTotal: 0
  };

  capital = STATE;

  ngOnInit(): void {
    const list = this.state.map((item: StateInterface) => ({ period: item.period.string, list: item.savings?.list }));
    this.dataSource = [...SAVINGS_STATE.list, ...list];

    this.calculateTotal();
  }

  private calculateTotal(): void {
    this.savings.notPayed = this.dataSource.reduce((acc: number, savings: any) => {
      return acc + savings.list
        .filter((item: any) => !item.payed)
        .reduce((acc: number, item: any) => acc + item.amount, 0);
    }, 0);

    this.savings.payed = this.dataSource.reduce((acc: number, savings: any) => {
      return acc + savings.list
        .filter((item: any) => item.payed)
        .reduce((acc: number, item: any) => acc + item.amount, 0);
    }, 0);

    this.savings.total = this.dataSource.reduce((acc: number, savings: any) => {
      return acc + savings.list.reduce((acc: number, item: any) => acc + item.amount, 0);
    }, 0);



    this.savings.capitalTotal = this.capital.reduce((acc: number, savings: any) => {
      return acc + savings.amount * savings.exchangeRate;
    }, 0);
  }
}
