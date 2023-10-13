import { Component, Input, OnInit } from '@angular/core';

import { StateInterface } from '../../interfaces/state.interface';
import { ACTION_TYPE_ENUM } from '../../enums/action-type.enum';
import { SAVINGS_STATE } from '../../states/savings.state';
import { EXCHANGES_STATE } from './states/exchanges.state';
import { CURRENCY_ENUM } from '../../enums/currency.enum';
import { BORROWS_STATE } from './states/borrows.state';

import { animate, state, style, transition, trigger } from '@angular/animations';
import { SPENDS_STATE } from './states/spends.state';

const STATE = [
  {
    label: 'USD',
    amount: 400,
    exchangeRate: 37.453,
    description: 'Parents'
  },
  {
    label: 'EURO',
    amount: 300,
    exchangeRate: 38.8,
    description: 'Parents'
  },
  {
    label: 'EURO',
    amount: 150,
    exchangeRate: 40,
    description: 'Wallet'
  },
  {
    label: 'UAH',
    amount: 4_980,
    exchangeRate: 1,
    description: 'Monobank jar'
  },
];

@Component({
  selector: 'app-savings',
  templateUrl: './savings.component.html',
  styleUrls: ['./savings.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*', minHeight: '30px' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class SavingsComponent implements OnInit {

  @Input() state!: StateInterface[];

  expandedElement: any | null;

  displayedCurrencyColumns: string[] = ['description', 'amount', 'exchangeRate', 'amountUAH'];
  displayedColumns: string[] = ['action', 'period', 'amount', 'balance'];
  dataSource: any[] = [];
  savings = {
    notPayed: 0,
    total: 0,
    payed: 0,
    capitalTotal: 0
  };

  total = {
    uah: 0,
  };
  borrows = {
    uah: 0,
    usd: 0,
    eur: 0
  };

  capital = STATE;

  ngOnInit(): void {
    this.setSavingsHistory();
    this.calculateTotal();
  }

  private setSavingsHistory(): void {
    const receivedTransactions = this.prepareReceivedTransactions();

    const list = [
      ...receivedTransactions,
      ...EXCHANGES_STATE,
      ...SAVINGS_STATE,
      ...BORROWS_STATE,
      ...SPENDS_STATE,
    ].sort((a, b) => this.sortByDate(a.period, b.period, 'asc'));

    const balance = {
      total: 0,
      uah: 0,
      usd: 0,
      eur: 0,
    };

    list.map((item: any) => {
      switch (item.action) {
        case ACTION_TYPE_ENUM.RECEIVE:
          this.total.uah += item.amount;
          balance.total += item.amount;
          balance.uah += item.amount;
          break;

        case ACTION_TYPE_ENUM.BORROW:
          if (item.currency === CURRENCY_ENUM.UAH) {
            this.borrows.uah += item.amount;
            balance.total -= item.amount;
            balance.uah -= item.amount;
          } else {
            if (item.currency === CURRENCY_ENUM.USD) {
              this.borrows.uah += item.amount * item.rate;
              this.borrows.usd += item.amount;

              balance.total -= item.amount * item.rate;
              balance.usd -= item.amount;
            }
            if (item.currency === CURRENCY_ENUM.EUR) {
              this.borrows.uah += item.amount * item.rate;
              this.borrows.eur += item.amount;

              balance.total -= item.amount * item.rate;
              balance.eur -= item.amount;
            }
          }
          break;

        case ACTION_TYPE_ENUM.SPEND:
          if (item.currency === CURRENCY_ENUM.UAH) {
            balance.total -= item.amount;
            balance.uah -= item.amount;
          } else {
            if (item.currency === CURRENCY_ENUM.USD) {
              balance.total -= item.amount * item.rate;
              balance.uah -= item.amount;
            }
            if (item.currency === CURRENCY_ENUM.EUR) {
              balance.total -= item.amount * item.rate;
              balance.eur -= item.amount;
            }
          }
          break;

        case ACTION_TYPE_ENUM.EXCHANGE:
          if (item.from === CURRENCY_ENUM.UAH || item.to === CURRENCY_ENUM.UAH) {
            balance.uah = item.from === CURRENCY_ENUM.UAH
              ? balance.uah - item.amount
              : balance.uah + item.amount * item.rate;
          }

          if (item.from === CURRENCY_ENUM.USD || item.to === CURRENCY_ENUM.USD) {
            balance.usd = item.from === CURRENCY_ENUM.USD
              ? balance.usd - item.amount
              : balance.usd + item.amount / item.rate;
          }

          if (item.from === CURRENCY_ENUM.EUR || item.to === CURRENCY_ENUM.EUR) {
            balance.eur = item.from === CURRENCY_ENUM.EUR
              ? balance.eur - item.amount
              : balance.eur + item.amount / item.rate;
          }
          break;

        default:
          break;
      }

      item.balance = { ...balance };
    });

    this.dataSource = list.sort((a, b) => this.sortByDate(a.period, b.period, 'desc'));
  }

  private prepareReceivedTransactions(): any[] {
    return this.state.map((item: StateInterface) => ({
      action: ACTION_TYPE_ENUM.RECEIVE,
      period: item.period,
      amount: item.savings?.list
        .filter((item: any) => item.payed)
        .reduce((acc: number, item: any) => acc + item.amount, 0)
    }));
  }

  private calculateTotal(): void {
    this.savings.capitalTotal = this.capital.reduce((acc: number, savings: any) => {
      return acc + savings.amount * savings.exchangeRate;
    }, 0);
  }

  private sortByDate(a: any, b: any, direction: string): number {
    const aDate = new Date(a).getTime();
    const bDate = new Date(b).getTime();

    if (direction === 'asc') return aDate - bDate;
    if (direction === 'desc') return bDate - aDate;
    return 0;
  }
}
