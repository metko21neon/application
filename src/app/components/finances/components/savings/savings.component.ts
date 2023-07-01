import { Component, Input, OnInit } from '@angular/core';

import { StateInterface } from '../../interfaces/state.interface';
import { SAVINGS_STATE } from '../../states/savings.state';

const STATE = [
  {
    label: 'USD',
    amount: 1_000,
    exchangeRate: 37.453,
    description: 'Parents'
  },
  {
    label: 'EURO',
    amount: 500,
    exchangeRate: 38.8,
    description: 'Parents'
  },
  {
    label: 'EURO',
    amount: 40,
    exchangeRate: 38.8,
    description: 'Wallet'
  },
  {
    label: 'EURO',
    amount: 150,
    exchangeRate: 40,
    description: 'Wallet'
  },
  {
    label: 'USD',
    amount: 835,
    exchangeRate: 37.453,
    description: 'Wallet'
  },
  {
    label: 'USD',
    amount: 5,
    exchangeRate: 37.453,
    description: 'Privatbank'
  },
  {
    label: 'UAH',
    amount: 3000,
    exchangeRate: 1,
    description: 'Monobank jar'
  },
];

@Component({
  selector: 'app-savings',
  templateUrl: './savings.component.html',
  styleUrls: ['./savings.component.scss']
})
export class SavingsComponent implements OnInit {

  @Input() state!: StateInterface[];

  displayedCurrencyColumns: string[] = ['description', 'currency', 'amount', 'exchangeRate', 'amountUAH']
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
