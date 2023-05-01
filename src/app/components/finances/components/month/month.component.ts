import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

import { StateInterface } from '../../interfaces/state.interface';
import { DebtInterface } from '../../finances.component';
import { FinancesService } from '../../finances.service';

@Component({
  selector: 'app-month',
  templateUrl: './month.component.html',
  styleUrls: ['./month.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class MonthComponent implements OnInit {

  @Input() state!: StateInterface[];

  displayedColumns = ['period', 'incomes', 'taxes', 'savings', 'newDebts', 'payedDebts', 'lifeCosts', 'investing'];
  dataSource: any[] = [];
  total: any;

  constructor(private financesService: FinancesService) { }

  ngOnInit(): void {
    this.setDataSource();
    this.setTotal();

    console.log('state:', this.state);
  }

  private setDataSource(): void {
    const list = this.state.map((item: any) => {
      const payedDebts = {
        rest: item.debt.rest - this.financesService.calculateTotalAmount(item.debt.payed.list),
        total: this.financesService.calculateTotalAmount(item.debt.payed.list),
        list: item.debt.payed.list,
      };

      return {
        ...item,
        period: item.period.string,
        newDebts: item.debt,
        payedDebts,
        type: 0,
      }
    });

    this.dataSource = this.chunks(list, 3);
  }

  chunks<T>(arr: T[], size: number): any[] {
    const output = [];

    for (let i = 0; i < arr.length; i += size) {
      const list: any[] = arr.slice(i, i + size);

      output.push(...arr.slice(i, i + size),
        {
          type: 1,
          period: 'quarter',
          payedDebts: { total: this.calculateQuarterTotal(list, 'payedDebts') },
          lifeCosts: { total: this.calculateQuarterTotal(list, 'lifeCosts') },
          investing: {
            total: this.calculateQuarterTotal(list, 'investing'),
            list: this.calculate(list, 'investing'),
          },
          newDebts: { total: this.calculateQuarterTotal(list, 'newDebts') },
          savings: {
            total: this.calculateQuarterTotal(list, 'savings'),
            list: this.calculate(list, 'savings'),
          },
          income: { total: this.calculateQuarterTotal(list, 'income') },
          taxes: {
            total: this.calculateQuarterTotal(list, 'taxes'),
            list: this.calculate(list, 'taxes'),
          },
        });
    }

    return output;
  }

  private calculate(list: any[], property: string): any[] {
    let groupList: any[] = [];

    list.map((month: any) => {
      month[property].list.map((item: any) => {
        const index = groupList.findIndex((group: any) => group.source === item.source && group.payed === item.payed);

        if (index === -1) {
          groupList = [...groupList, {
            source: item.source,
            amount: item.amount,
            payed: item.payed
          }];
        } else {
          groupList[index].amount += item.amount;
          groupList[index].payed = groupList[index].payed ? item.payed : false;
        }
      })
    });

    return groupList;
  }

  private setTotal(): void {
    this.total = {
      payedDebts: this.calculateFullTotal('payedDebts'),
      lifeCosts: this.calculateFullTotal('lifeCosts'),
      investing: this.calculateFullTotal('investing'),
      savings: this.calculateFullTotal('savings'),
      income: this.calculateFullTotal('income'),
      taxes: this.calculateFullTotal('taxes'),
      newDebts: this.calculateFullTotal('newDebts'),
    };
  }

  private calculateFullTotal(property: string): void {
    return this.dataSource
      .filter((item: any) => item.type === 0)
      .reduce((acc: number, item: any) => (acc + item[property].total), 0);
  }

  private calculateQuarterTotal(list: any[], property: string): void {
    return list.reduce((acc: number, item: any) => (acc + item[property].total), 0);
  }
}
