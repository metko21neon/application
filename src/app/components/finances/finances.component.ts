import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { StateInterface } from './interfaces/state.interface';
import { STATE } from '../../states/finances.state';

export interface DebtInterface {
  source: string;
  amount: number;
  payed?: boolean;
  description?: string;
}

export interface IncomeInterface {
  source: string;
  amount: number;
}

@Component({
  selector: 'app-finances',
  templateUrl: './finances.component.html',
  styleUrls: ['./finances.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class FinancesComponent implements OnInit {

  state: StateInterface[] = STATE;
  savings = 97_000;
  total_debts = 0;

  constructor() { }

  ngOnInit(): void {
    this.calculateTotalDebts();
  }

  calculateMonthTotalIncome(list: IncomeInterface[]): number {
    return list.reduce((acc: number, debt: IncomeInterface) => (acc + debt.amount), 0);
  }

  calculateMonthTotalDebt(list: DebtInterface[]): number {
    return list.reduce((acc: number, debt: DebtInterface) => (acc + debt.amount), 0);
  }

  private calculateTotalDebts(): void {
    this.total_debts = this.state.reduce((acc: number, item: StateInterface) => {
      const debt = this.calculateMonthTotalDebt(item.debt.list);
      return acc + debt;
    }, 0);
  }
}
