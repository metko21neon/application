import { Component, Input, OnInit } from '@angular/core';
import { StateInterface } from '../../interfaces/state.interface';

import * as CASH_EXCHANGES from "../../../cryptocurrency/pages/cash-transactions/jsons/cash-deposits.json";

import moment from 'moment';
import { DATE_FORMAT } from 'src/app/app.component';
import { ACTION_LIST } from './states/actions.state';
import { CURRENCY_ENUM } from '../../enums/currency.enum';
import { CRPTO_ACTIONS_ENUM } from './enums/actions.enum';

@Component({
  selector: 'app-cryptocurrency',
  templateUrl: './cryptocurrency.component.html',
  styleUrls: ['./cryptocurrency.component.scss']
})
export class CryptocurrencyComponent implements OnInit {

  @Input() state!: StateInterface[];

  dataSource: any[] = [];
  statistics: any[] = [];
  balance = {
    uah: 0,
    usd: 0
  };

  total = {
    income: 0
  };

  ngOnInit(): void {
    this.setDepositHistory();
    this.calculateStatistics();

    this.total.income = this.dataSource
      .filter((item: any) => item.action === CRPTO_ACTIONS_ENUM.RECEIVE)
      .reduce((acc: number, item: any) => (acc + item.amount), 0);
  }

  private unique(arr: any[], f: any = (id: string) => id): any[] {
    const vArr = arr.map(f);
    return arr.filter((_: any, i: number) => vArr.indexOf(vArr[i]) === i);
  }

  private calculateStatistics(): void {
    const categories = this.unique(this.dataSource, (item: any) => item.category)
      .filter((item: any) => !!item.category)
      .map((item: any) => item.category);

    this.statistics = categories.map((category: string) => ({
      data: this.calculateTotalByCategory(category),
      category
    }));
  }

  private calculateTotalByCategory(category: string): any {
    return this.dataSource
      .filter((item: any) => item?.category === category && item.action === 'SPEND')
      .reduce((acc: any, item: any) => {
        if (item.currency === CURRENCY_ENUM.UAH) {
          acc.total += item.amount;
          acc.uah += item.amount;
        }

        if (item.currency === CURRENCY_ENUM.USD) {
          acc.total += item.amount * item.exchangeRate;
          acc.usd += item.amount;
        }

        return acc;
      }, { uah: 0, usd: 0, total: 0 });
  }

  private prepareDepositList(): any[] {
    return (CASH_EXCHANGES as any).default
      .filter((item: any) => moment(item.createTime).isAfter(moment('2023-01-01')))
      .map((item: any) => ({
        date: moment(item.createTime).format(DATE_FORMAT),
        exchangeRate: +item.usdPrice,
        currency: item.fiatCurrency,
        amount: +item.amount,
        fee: +item.totalFee,
        action: 'EXCHANGE',
      }));
  }

  private prepareIncomeList(): any[] {
    return this.state.reduce((acc: any[], item: any) => {
      const amount = item.income.list.reduce((acc: number, itemIncome: any) => {
        const item = itemIncome.investing.list.find((item: any) => item.source === 'Cryptocurrency');
        return item ? acc + item.amount : acc;
      }, 0);

      acc = [...acc, {
        date: item.period,
        action: CRPTO_ACTIONS_ENUM.RECEIVE,
        amount
      }];

      return acc;
    }, []);
  }

  private setDepositHistory(): void {
    const cashDeposits = this.prepareDepositList();
    const incomeList = this.prepareIncomeList();

    this.dataSource = [...ACTION_LIST, ...cashDeposits, ...incomeList]
      .sort((a, b) => this.sortByDate(a, b, 'asc'))
      .map((item: any) => {
        switch (item.action) {
          case 'BORROW':
            (this.balance as any)[item.currency.toLowerCase()] += item.amount;
            break;

          case 'EXCHANGE':
            if (item.currency === CURRENCY_ENUM.UAH) {
              this.balance.uah -= item.amount + item.fee;
              this.balance.usd += item.amount / item.exchangeRate;
            }

            if (item.currency === CURRENCY_ENUM.USD) {
              this.balance.uah -= (item.amount + item.fee) * item.exchangeRate;
              this.balance.usd += item.amount;
            }
            break;

          case CRPTO_ACTIONS_ENUM.RECEIVE:
            this.balance.uah += item.amount;
            break;

          case 'SPEND':
            (this.balance as any)[item.currency.toLowerCase()] -= item.amount;
            break;

          default:
            break;
        }

        item.balance = { ...this.balance };
        return item;
      })
      .sort((a, b) => this.sortByDate(a, b, 'desc'));
  }

  private sortByDate(a: any, b: any, direction: string): number {
    const aDate = new Date(a.date).getTime();
    const bDate = new Date(b.date).getTime();

    if (direction === 'asc') {
      return aDate - bDate;
    }

    if (direction === 'desc') {
      return bDate - aDate
    }

    return 0;
  }
}
