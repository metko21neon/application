import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, Input, OnInit } from '@angular/core';

import { StateInterface } from '../../interfaces/state.interface';

@Component({
  selector: 'app-month',
  templateUrl: './month.component.html',
  styleUrls: ['./month.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*', minHeight: '30px' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class MonthComponent implements OnInit {

  @Input() state!: StateInterface[];

  displayedColumns = ['period', 'income', 'taxes', 'savings', 'costs', 'newDebts', 'payedDebts', 'investing', 'lifeCosts'];
  expandedElement: any | null;
  dataSource: any[] = [];
  total: any;

  ngOnInit(): void {
    this.setDataSource();
    this.setTotal();

    console.log('state:', this.state);
  }

  private setDataSource(): void {
    const list = this.state
      .map((item: any) => ({ ...item, newDebts: item.debt, type: 0 }))
      .sort((a, b) => this.sortByDate(a, b, 'desc'));

    this.dataSource = this.chunks(list, 3);
  }

  private sortByDate(a: any, b: any, direction: string): number {
    const aDate = new Date(a.period).getTime();
    const bDate = new Date(b.period).getTime();

    if (direction === 'asc') {
      return aDate - bDate;
    }

    if (direction === 'desc') {
      return bDate - aDate
    }

    return 0;
  }

  private quarterOfYear(date = new Date()): string {
    const quarter = Math.ceil((date.getMonth() + 1) / 3);
    return `${this.integer_to_roman(quarter)} quarter ${date.getFullYear()}`;
  }

  chunks<T>(arr: T[], size: number): any[] {
    const output = [];

    for (let i = arr.length; i > 0; i -= size) {
      const list: any[] = arr.slice(i > size ? i - size : 0, i);

      output.unshift(
        {
          type: 1,
          period: this.quarterOfYear(new Date(list[0].period)),
          payedDebts: {
            total: {
              uah: this.calculateQuarterTotal(list, 'payedDebts', 'uah'),
              usd: this.calculateQuarterTotal(list, 'payedDebts', 'usd'),
            },
          },
          lifeCosts: {
            total: {
              uah: this.calculateQuarterTotal(list, 'lifeCosts', 'uah'),
              usd: this.calculateQuarterTotal(list, 'lifeCosts', 'usd'),
            },
          },
          investing: {
            // list: this.calculate(list, 'investing'),
            total: {
              uah: this.calculateQuarterTotal(list, 'investing', 'uah'),
              usd: this.calculateQuarterTotal(list, 'investing', 'usd'),
            },
          },
          newDebts: {
            total: {
              uah: this.calculateQuarterTotal(list, 'newDebts', 'uah'),
              usd: this.calculateQuarterTotal(list, 'newDebts', 'usd'),
            },
          },
          savings: {
            total: {
              uah: this.calculateQuarterTotal(list, 'savings', 'uah'),
              usd: this.calculateQuarterTotal(list, 'savings', 'usd'),
            },
            // list: this.calculate(list, 'savings'),
          },
          costs: {
            // list: this.calculate(list, 'costs'),
            total: {
              uah: this.calculateQuarterTotal(list, 'costs', 'uah'),
              usd: this.calculateQuarterTotal(list, 'costs', 'usd'),
            },
          },
          income: {
            total: {
              uah: this.calculateQuarterTotal(list, 'income', 'uah'),
              usd: this.calculateQuarterTotal(list, 'income', 'usd'),
            }
          },
          taxes: {
            // list: this.calculate(list, 'taxes'),
            total: {
              uah: this.calculateQuarterTotal(list, 'taxes', 'uah'),
              usd: this.calculateQuarterTotal(list, 'taxes', 'usd'),
            }
          },
        },
        ...arr.slice(i > size ? i - size : 0, i)
      );
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
      income: {
        uah: this.calculateFullTotal('income', 'uah'),
        usd: this.calculateFullTotal('income', 'usd'),
      },
      taxes: {
        uah: this.calculateFullTotal('taxes', 'uah'),
        usd: this.calculateFullTotal('taxes', 'usd'),
      },
      savings: {
        uah: this.calculateFullTotal('savings', 'uah'),
        usd: this.calculateFullTotal('savings', 'usd'),
      },
      costs: {
        uah: this.calculateFullTotal('costs', 'uah'),
        usd: this.calculateFullTotal('costs', 'usd'),
      },
      payedDebts: {
        uah: this.calculateFullTotal('payedDebts', 'uah'),
        usd: this.calculateFullTotal('payedDebts', 'usd'),
      },
      newDebts: {
        uah: this.calculateFullTotal('newDebts', 'uah'),
        usd: this.calculateFullTotal('newDebts', 'usd'),
      },
      investing: {
        uah: this.calculateFullTotal('investing', 'uah'),
        usd: this.calculateFullTotal('investing', 'usd'),
      },
      lifeCosts: {
        uah: this.calculateFullTotal('lifeCosts', 'uah'),
        usd: this.calculateFullTotal('lifeCosts', 'usd'),
      }
    };
  }

  private calculateFullTotal(property: string, currency: string = ''): void {
    if (currency) {
      return this.dataSource
        .filter((item: any) => item.type === 0)
        .reduce((acc: number, item: any) => (acc + item[property].total[currency]), 0);
    }

    return this.dataSource
      .filter((item: any) => item.type === 0)
      .reduce((acc: number, item: any) => (acc + item[property].total), 0);
  }

  private calculateQuarterTotal(list: any[], property: string, currency: any = ''): void {
    if (currency) {
      return list.reduce((acc: number, item: any) => (acc + item[property].total[currency]), 0);
    }

    return list.reduce((acc: number, item: any) => (acc + item[property].total), 0);
  }

  private integer_to_roman(num: number): string {
    if (typeof num !== 'number')
      return '';

    var digits: any[] = String(+num).split(""),
      key = ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM",
        "", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC",
        "", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"],
      roman_num = "",
      i = 3;

    while (i--)
      roman_num = (key[+digits.pop() + (i * 10)] || "") + roman_num;
    return Array(+digits.join("") + 1).join("M") + roman_num;
  }
}
