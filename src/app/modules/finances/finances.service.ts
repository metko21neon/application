import { Injectable } from '@angular/core';
import { FinanceIncomeInterface, StateInterface } from './interfaces/state.interface';
import { FINANCES_STATE } from 'src/app/modules/finances/states/finances.state';
import { TAX_ENUM } from './enums/tax.enum';
import { BehaviorSubject, Observable } from 'rxjs';
import { CURRENCY_ENUM } from './enums/currency.enum';

export const EXCHANGE_RATES = [
  {
    currency: CURRENCY_ENUM.USD,
    rate: 37.25
  },
  {
    currency: CURRENCY_ENUM.EUR,
    rate: 41.1
  },
];

@Injectable({
  providedIn: 'root'
})
export class FinancesService {

  state$!: Observable<StateInterface[]>;

  private state: StateInterface[] = FINANCES_STATE;
  private stateSubject = new BehaviorSubject<StateInterface[]>(this.state);

  constructor() {
    this.state$ = this.stateSubject.asObservable();

    this.setDataSource();
  }

  calculateTotalAmount(list: any[]): number {
    return list.reduce((acc: number, { amount }: { amount: number }) => (acc + amount), 0);
  }

  private manageIncome(list: FinanceIncomeInterface[]): any[] {
    return list.map((item: FinanceIncomeInterface) => {
      if (item?.currency === CURRENCY_ENUM.USD) {
        item.amount = item.amount * item.exchangeRate!;
      }

      return item;
    });
  }

  private setDataSource(): void {
    this.state = this.state.map((item: any) => {
      item.income.list = this.manageIncome(item.income.list);
      item.income.total = this.calculateTotalAmount(item.income.list);

      this.calculateTaxes(item.income.total, item.taxes);
      item.taxes.total = this.calculateTotalAmount(item.taxes.list);
      item.taxes.rest = item.income.total - item.taxes.total;

      item.savings.total = Math.round(item.savings.percentage * item.taxes.rest / 100) * 100;
      item.savings.rest = item.taxes.rest - Math.round(item.savings.percentage * item.taxes.rest / 100) * 100;

      item.costs.total = Math.round(item.costs.percentage * item.taxes.rest / 100) * 100;
      item.costs.rest = item.savings.rest - Math.round(item.costs.percentage * item.taxes.rest / 100) * 100;

      item.debt.total = this.calculateTotalAmount(item.debt.list);
      item.debt.rest = item.costs.rest + this.calculateTotalAmount(item.debt.list);

      const payedDebts = {
        rest: item.debt.rest - this.calculateTotalAmount(item.debt.payed.list),
        total: this.calculateTotalAmount(item.debt.payed.list),
        list: item.debt.payed.list,
      };

      item.investing.total = this.calculateTotalAmount(item.investing.list);
      item.investing.rest = payedDebts.rest - this.calculateTotalAmount(item.investing.list);

      item.lifeCosts.total = item.investing.rest;

      return item;
    });

    this.stateSubject.next(this.state);
  }

  private calculateTaxes(total: number, taxes: any): void {
    taxes.list.map((item: any) => {
      if (item.type === TAX_ENUM.SINGLE_TAX) {
        item.amount = item.percentage * total;
      }
    });
  }
}
