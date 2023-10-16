import { Component, Input, OnInit } from '@angular/core';
import { StateInterface } from '../../interfaces/state.interface';

import * as CASH_DEPOSITS from "../../../cryptocurrency/pages/cash-transactions/jsons/cash-deposits.json";

import moment from 'moment';
import { DATE_FORMAT } from 'src/app/app.component';
import { ACTION_LIST } from './states/actions.state';
import { CURRENCY_ENUM } from '../../enums/currency.enum';

@Component({
  selector: 'app-cryptocurrency',
  templateUrl: './cryptocurrency.component.html',
  styleUrls: ['./cryptocurrency.component.scss']
})
export class CryptocurrencyComponent implements OnInit {

  @Input() state!: StateInterface[];

  dataSource: any[] = [];
  balance = {
    uah: 0,
    usd: 0
  };

  ngOnInit(): void {
    this.setDepositHistory();
  }

  private prepareDepositList(): any[] {
    return (CASH_DEPOSITS as any).default
      .filter((item: any) => moment(item.createTime).isAfter(moment('2023-01-01')))
      .map((item: any) => ({
        date: moment(item.createTime).format(DATE_FORMAT),
        exchangeRate: +item.usdPrice,
        currency: item.fiatCurrency,
        amount: +item.amount,
        fee: +item.totalFee,
        action: 'DEPOSIT',
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
        action: 'RECEIVE',
        amount
      }];

      return acc;
    }, []);
  }

  private setDepositHistory(): void {
    const cashDeposits = this.prepareDepositList();
    const incomeList = this.prepareIncomeList();
    console.log('incomeList:', incomeList);
    console.log('cashDeposits:', cashDeposits);

    this.dataSource = [
      ...ACTION_LIST,
      ...cashDeposits,
      ...incomeList,
    ]
      .sort((a, b) => this.sortByDate(a, b, 'asc'))
      .map((item: any) => {
        switch (item.action) {
          case 'RECEIVE':
            this.balance.uah += item.amount;
            break;

          case 'DEPOSIT':
            if (item.currency === CURRENCY_ENUM.UAH) {
              this.balance.uah -= item.amount + item.fee;
              this.balance.usd += item.amount / item.exchangeRate;
            }

            if (item.currency === CURRENCY_ENUM.USD) {
              this.balance.uah -= (item.amount + item.fee) * item.exchangeRate;
              this.balance.usd += item.amount;
            }
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


    console.log('dataSource:', this.dataSource);
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
