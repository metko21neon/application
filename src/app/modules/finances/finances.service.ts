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

  private income: any;

  constructor() {
    this.state$ = this.stateSubject.asObservable();

    this.setDataSource();
  }

  get fState(): StateInterface[] {
    return this.stateSubject.getValue();
  }

  calculateTotalAmount(list: any[], property: string = ''): number {
    if (property) {
      return list.reduce((acc: number, item: any) => {
        let amount = 0;

        if (this.income?.currency === CURRENCY_ENUM.USD) {
          amount = property !== CURRENCY_ENUM.USD
            ? item.amount * this.income.exchangeRate
            : item.amount;
        }

        if (this.income?.currency === CURRENCY_ENUM.UAH) {
          amount = property !== CURRENCY_ENUM.UAH
            ? item.amount / this.income.exchangeRate
            : item.amount;
        }

        return acc + amount;
      }, 0);
    }

    return list.reduce((acc: number, { amount }: { amount: number }) => (acc + amount), 0)
  }

  private manageIncome(list: FinanceIncomeInterface[]): any[] {
    return list.map((item: FinanceIncomeInterface) => {
      if (item?.currency === CURRENCY_ENUM.USD) {
        item.amount = item.amount * item.exchangeRate!;
      }

      if (item.source === 'Crosssoft') {
        this.income = item;
      }

      return item;
    });
  }

  private setDataSource(): void {
    this.state = this.state.map((item: any) => {
      item.income.list = this.manageIncome(item.income.list);
      item.income.total = {
        uah: this.calculateTotalAmount(item.income.list, CURRENCY_ENUM.UAH),
        usd: this.calculateTotalAmount(item.income.list, CURRENCY_ENUM.USD),
      };

      item.taxes = {
        total: { uah: 0, usd: 0 }
      };

      item.savings = {
        total: { uah: 0, usd: 0 }
      };

      item.costs = {
        total: { uah: 0, usd: 0 }
      };

      item.debt = {
        total: { uah: 0, usd: 0 }
      };

      item.payedDebts = {
        total: { uah: 0, usd: 0 }
      };

      item.investing = {
        total: { uah: 0, usd: 0 }
      };

      item.lifeCosts = {
        total: { uah: 0, usd: 0 }
      };

      item.income.list.map((incomeItem: any) => {
        // Taxes
        if (incomeItem.taxes) {
          this.calculateTaxes(incomeItem.amount, incomeItem.taxes);
          incomeItem.taxes.total = {
            uah: this.calculateTotalAmount(incomeItem.taxes.list, CURRENCY_ENUM.UAH),
            usd: this.calculateTotalAmount(incomeItem.taxes.list, CURRENCY_ENUM.USD),
          };

          item.taxes.total.uah += incomeItem.taxes.total.uah;
          item.taxes.total.usd += incomeItem.taxes.total.usd;
        }

        // Savings
        if (incomeItem.savings) {
          const pureIncome = incomeItem.amount - item.taxes.total.uah;
          const roundedValue = Math.round(incomeItem.savings.percentage * pureIncome / 100) * 100;

          incomeItem.savings.total = {
            uah: roundedValue,
            usd: roundedValue / this.income.exchangeRate
          };

          item.savings.total.uah += incomeItem.savings.total.uah;
          item.savings.total.usd += incomeItem.savings.total.usd;
        }

        // Costs
        if (incomeItem.costs) {
          const pureIncome = incomeItem.amount - item.taxes.total.uah;
          const roundedValue = Math.round(incomeItem.costs.percentage * pureIncome / 100) * 100;

          incomeItem.costs.total = {
            uah: roundedValue,
            usd: roundedValue / this.income.exchangeRate
          };

          item.costs.total.uah += incomeItem.costs.total.uah;
          item.costs.total.usd += incomeItem.costs.total.usd;
        }

        // Debt
        if (incomeItem.debt) {
          incomeItem.debt.total = {
            uah: this.calculateTotalAmount(incomeItem.debt.list, CURRENCY_ENUM.UAH),
            usd: this.calculateTotalAmount(incomeItem.debt.list, CURRENCY_ENUM.USD),
          };

          item.debt.total.uah += incomeItem.debt.total.uah;
          item.debt.total.usd += incomeItem.debt.total.usd;
        }

        // payedDebts
        if (incomeItem.debt?.payed) {
          incomeItem.debt.payed.total = {
            uah: this.calculateTotalAmount(incomeItem.debt.payed.list, CURRENCY_ENUM.UAH),
            usd: this.calculateTotalAmount(incomeItem.debt.payed.list, CURRENCY_ENUM.USD),
          };

          item.payedDebts.total.uah += incomeItem.debt.payed.total.uah;
          item.payedDebts.total.usd += incomeItem.debt.payed.total.usd;
        }

        // Investing
        if (incomeItem.investing) {
          incomeItem.investing.total = {
            uah: this.calculateTotalAmount(incomeItem.investing.list, CURRENCY_ENUM.UAH),
            usd: this.calculateTotalAmount(incomeItem.investing.list, CURRENCY_ENUM.USD),
          };

          item.investing.total.uah += incomeItem.investing.total.uah;
          item.investing.total.usd += incomeItem.investing.total.usd;
        }
      });

      item.taxes.rest = item.income.total.uah - item.taxes.total.uah;
      item.savings.rest = item.taxes.rest - item.savings.total.uah;
      item.costs.rest = item.savings.rest - item.costs.total.uah;
      item.debt.rest = item.costs.rest + item.debt.total.uah;
      item.payedDebts.rest = item.debt.rest - item.payedDebts.total.uah;
      item.investing.rest = item.payedDebts.rest - item.investing.total.uah;

      // lifeCosts
      item.lifeCosts.total.uah = item.investing.rest;
      item.lifeCosts.total.usd = item.investing.rest / this.income.exchangeRate;

      return item;
    });

    console.log('state:', this.state);
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
