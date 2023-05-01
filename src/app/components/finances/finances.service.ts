import { Injectable } from '@angular/core';
import { StateInterface } from './interfaces/state.interface';
import { FINANCES_STATE } from 'src/app/components/finances/states/finances.state';
import { TAX_ENUM } from './enums/tax.enum';
import { BehaviorSubject, Observable } from 'rxjs';
const SAVINGS_PERCENTAGE = 0.1;

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

  private setDataSource(): void {
    this.state = this.state.map((item: any) => {
      item.income.total = this.calculateTotalAmount(item.income.list);

      this.calculateTaxes(item.income.total, item.taxes);
      item.taxes.total = this.calculateTotalAmount(item.taxes.list);
      item.taxes.rest = item.income.total - item.taxes.total;

      item.savings.total = Math.round(SAVINGS_PERCENTAGE * item.taxes.rest / 100) * 100;
      item.savings.rest = item.taxes.rest - Math.round(item.savings.percentage * item.taxes.rest / 100) * 100;

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

      return item;
    });

    this.stateSubject.next(this.state);
  }

  private calculateTaxes(total: number, taxes: any): void {
    taxes.list.map((item: any) => {
      if (item.type === TAX_ENUM.SINGLE_TAX) {
        item.amount = Math.ceil(item.percentage * total);
      }
    });
  }
}
