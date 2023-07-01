import { Injectable } from '@angular/core';

import { DATE_FORMAT } from 'src/app/services/binance-synchronization.service';
import { ExchangeInterface } from './interfaces/exchange.interface';
import { REPLENISHMENT_STATE } from './states/replenishment.state';
import { StateInterface } from '../../interfaces/state.interface';
import { BondInterface } from './interfaces/bond.interface';
import { EXCHANGES_STATE } from './states/exchanges.state';
import { CURRENCY_ENUM } from '../../enums/currency.enum';
import { EXCHANGE_RATES } from '../../finances.service';
import { BONDS_STATE } from './states/bonds.state';

import moment from 'moment';

export interface BondStatisticsInterface {
  balance: number;
  active: number;
  potencialIncome: number;
  earnedIncome: number;
};

export interface BondsStatisticsInterface {
  [key: string]: BondStatisticsInterface;
};

const BOND_STATISTICS_MODEL: BondStatisticsInterface = {
  balance: 0,
  active: 0,
  potencialIncome: 0,
  earnedIncome: 0,
};

// 5445+8690+158000=172135
// 172135-163001.59=9133.41
const BALANCE_FROM_PREVIOUS_ORDERS = 172_135;
const START_FROM = '2020.05.31 23:59:00';

const CURRENCY_LIST = [CURRENCY_ENUM.UAH, CURRENCY_ENUM.USD];

@Injectable({
  providedIn: 'root'
})
export class BondsService {

  private _exchanges: ExchangeInterface[] = EXCHANGES_STATE;
  private _bonds: BondInterface[] = BONDS_STATE;
  private _state!: StateInterface[];

  private _statistics: BondsStatisticsInterface = {
    uah: BOND_STATISTICS_MODEL,
    usd: BOND_STATISTICS_MODEL,
  };

  balanceHistory: any[] = [];

  balance: any = {
    uah: 0,
    usd: 0,
    eur: 0,
  };

  total: any = {
    invested: 0,
    earned: 0,
    full: 0
  };

  set state(state: StateInterface[]) {
    this._state = state;
  }

  calculateBonds(): BondInterface[] {
    this._bonds = this._bonds
      .map((item: BondInterface) => {
        return {
          ...item,
          isActive: moment().isBefore(moment(item.return_date, DATE_FORMAT)),
          income_amount: item.quantity * item.bond_return - item.amount,
          return_amount: item.quantity * item.bond_return,
        };
      })
      .sort((a, b) => this.sortByDate(a, b, 'desc'));

    return this._bonds;
  }

  calculateStatistics(): BondsStatisticsInterface {
    for (const key of Object.keys(this._statistics)) {
      const currency = key.toUpperCase() as CURRENCY_ENUM;

      this._statistics[key] = {
        balance: this.balance[key],
        active: this.calculateTotal({ currency, active: true, property: 'amount' }),
        potencialIncome: this.calculateTotal({ currency, active: true, property: 'income_amount' }),
        earnedIncome: this.calculateTotal({ currency, active: false, property: 'income_amount' }),
      };
    }

    return this._statistics;
  }

  calculateFullTotal(): any {
    this.total = {
      invested: 0,
      earned: 0,
      full: 0
    };

    const rateUSD = EXCHANGE_RATES.find((rate: any) => rate.currency === CURRENCY_ENUM.USD)!;

    const investedUAH = this.balanceHistory
      .filter((item: any) => item.action === 'RECEIVE')
      .reduce((acc: number, item: any) => (acc + item.amount), 0);

    const fullUAH = Object.entries(this._statistics)
      .reduce((acc: number, [key, value]: [string, BondStatisticsInterface]) => {
        if (key.toUpperCase() === CURRENCY_ENUM.UAH) {
          return acc + value.balance + value.active;
        }

        const rate = EXCHANGE_RATES.find((rate: any) => rate.currency === key.toUpperCase())!;
        return acc + (value.balance + value.active) * rate.rate;
      }, 0);

    const earnedUAH = Object.entries(this._statistics)
      .reduce((acc: number, [key, value]: [string, BondStatisticsInterface]) => {
        if (key.toUpperCase() === CURRENCY_ENUM.UAH) {
          return acc + value.earnedIncome;
        }

        const rate = EXCHANGE_RATES.find((rate: any) => rate.currency === key.toUpperCase())!;
        return acc + value.earnedIncome * rate.rate;
      }, 0);

    this.total = {
      invested: {
        uah: investedUAH,
        usd: investedUAH / rateUSD.rate
      },
      earned: {
        uah: earnedUAH,
        usd: earnedUAH / rateUSD.rate,
      },
      full: {
        uah: fullUAH,
        usd: fullUAH / rateUSD.rate,
      }
    };

    return this.total;
  }

  private calculateExchange(item: any, currency: CURRENCY_ENUM): number {
    if (item.from === currency) {
      return -(currency === CURRENCY_ENUM.UAH ? item.amount : item.amount * item.rate);
    }

    if (item.to === currency) {
      return currency === CURRENCY_ENUM.UAH ? item.amount * item.rate : item.amount / item.rate;
    }

    return 0;
  }

  prepareBalanceHistory(): any {
    let receives: any[] = [];

    REPLENISHMENT_STATE.map((item: any) => {
      receives = [...receives, {
        action: 'RECEIVE',
        creation_date: item.period,
        amount: item.amount,
        currency: item.currency,
        balance: {
          uah: item.currency === CURRENCY_ENUM.UAH ? item.amount : 0,
          usd: item.currency === CURRENCY_ENUM.USD ? item.amount : 0,
          eur: item.currency === CURRENCY_ENUM.EUR ? item.amount : 0
        }
      }];
    });

    this._state
      .filter((item: StateInterface) => item.investing?.list.some((item: any) => item.source === 'Military bonds'))
      .map((item: StateInterface) => {
        item.investing?.list.map((item: any) => {
          if (item.source === 'Military bonds') {
            receives = [...receives, {
              action: 'RECEIVE',
              creation_date: item.creation_date,
              amount: item.amount,
              currency: item.currency,
              balance: {
                uah: item.currency === CURRENCY_ENUM.UAH ? item.amount : 0,
                usd: item.currency === CURRENCY_ENUM.USD ? item.amount : 0,
                eur: item.currency === CURRENCY_ENUM.EUR ? item.amount : 0
              }
            }];
          }
        });
      });

    let bonds: any[] = [];

    const boutghBonds = this._bonds.map((item: BondInterface) => {
      if (!item.isActive) {
        bonds.push({
          action: 'FINISHED',
          creation_date: item.return_date,
          additional_date: item.creation_date,
          amount: item.return_amount,
          currency: item.currency,
          balance: {
            uah: item.currency === CURRENCY_ENUM.UAH ? item.return_amount : 0,
            usd: item.currency === CURRENCY_ENUM.USD ? item.return_amount : 0,
            eur: item.currency === CURRENCY_ENUM.EUR ? item.return_amount : 0
          }
        })
      }

      return {
        action: 'BUY',
        creation_date: item.creation_date,
        amount: item.amount,
        currency: item.currency,
        balance: {
          uah: item.currency === CURRENCY_ENUM.UAH ? -item.amount : 0,
          usd: item.currency === CURRENCY_ENUM.USD ? -item.amount : 0,
          eur: item.currency === CURRENCY_ENUM.EUR ? -item.amount : 0
        }
      }
    });

    bonds = [...bonds, ...boutghBonds];

    const exchanges = this._exchanges.map((item: ExchangeInterface) => {
      return {
        action: 'EXCHANGE',
        creation_date: item.date,
        from: {
          amount: item.amount,
          currency: item.from,
        },
        to: {
          amount: item.to === CURRENCY_ENUM.UAH ? item.amount * item.rate : item.amount / item.rate,
          currency: item.to,
        },
        balance: {
          uah: this.calculateExchange(item, CURRENCY_ENUM.UAH),
          usd: this.calculateExchange(item, CURRENCY_ENUM.USD),
          eur: this.calculateExchange(item, CURRENCY_ENUM.EUR),
        }
      }
    });

    this.balanceHistory = [...receives, ...bonds, ...exchanges]
      .sort((a, b) => this.sortByDate(a, b, 'asc'))
      .map((item: any) => {
        this.balance.uah += item.balance.uah;
        this.balance.usd += item.balance.usd;
        this.balance.eur += item.balance.eur;

        return { ...item, balance: { ...this.balance } };
      })
      .sort((a, b) => this.sortByDate(a, b, 'desc'));

    return this.balanceHistory;
  }

  private calculateTotal({ currency, active, property }: { currency: CURRENCY_ENUM, active?: boolean, property: string }): number {
    return this._bonds
      .filter((item: BondInterface) => item.isActive === active && item.currency === currency)
      .reduce((acc: number, item: any) => (acc + item[property]), 0);
  }

  private sortByDate(a: any, b: any, direction: string): number {
    const aDate = new Date(a.creation_date).getTime();
    const bDate = new Date(b.creation_date).getTime();

    if (direction === 'asc') {
      if (aDate === bDate) {
        const aDateAdd = new Date(a.additional_date).getTime();
        const bDateAdd = new Date(b.additional_date).getTime();

        return aDateAdd - bDateAdd;
      }

      return aDate - bDate;
    }

    if (direction === 'desc') {
      if (aDate === bDate) {
        const aDateAdd = new Date(a.additional_date).getTime();
        const bDateAdd = new Date(b.additional_date).getTime();

        return bDateAdd - aDateAdd;
      }

      return bDate - aDate
    }

    return 0;
  }
}
