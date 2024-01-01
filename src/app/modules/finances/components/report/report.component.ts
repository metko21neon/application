import { Component, Input, OnInit } from '@angular/core';

import { CryptocurrencyService } from '../cryptocurrency/cryptocurrency.service';
import { StateInterface } from '../../interfaces/state.interface';
import { CostsService } from '../costs/costs.service';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.scss']
})
export class ReportComponent implements OnInit {

  @Input() state!: StateInterface[];

  list = [
    {
      type: 'BORROWS',
      label: 'Borrows',
      total: 0,
      list: [
        {
          label: 'Savings',
          amount: 15_200,
          description: 'COMMS invested (400 USD)'
        },
        {
          label: 'Taxes 4 quartal',
          amount: 7_000,
          description: 'Parents borrowed'
        },
        {
          label: 'Taxes 4 quartal',
          amount: 13_000,
          description: 'Clothes'
        },
      ]
    },
    {
      type: 'DEBTS',
      label: 'Debts',
      total: 0,
      list: [
        // {
        //   label: 'Privatbank',
        //   amount: 100_000,
        // },
        {
          label: 'Savings',
          amount: 10_000
        },
        {
          label: 'Costs',
          amount: 4_200
        },
        {
          label: 'Taxes 4 quartal',
          amount: 7_000,
          description: 'Parents borrowed'
        },
        {
          label: 'Taxes 4 quartal',
          amount: 13_000,
          description: 'Clothes'
        },
        {
          label: 'Taxes 4 quartal',
          amount: 9_650,
          description: 'For crypto'
        }
      ]
    },
    {
      type: 'REMAINS',
      label: 'Remains',
      total: 0,
      list: [
        {
          label: 'Privatbank',
          amount: 27_150
        },
        {
          label: 'Monobank',
          amount: 700
        },
        {
          label: 'Cash',
          amount: 3_200
        },
      ]
    }
  ];

  total = 0;

  constructor(
    public cryptocurrencyService: CryptocurrencyService,
    public costsService: CostsService
  ) { }

  ngOnInit(): void {
    this.setCostsRest();

    this.list.map((item: any) => {
      item.total = item.list.reduce((acc: number, cur: any) => (acc + cur.amount), 0);

      switch (item.type) {
        case 'DEBTS':
          this.total -= item.total;
          break;

        default:
          this.total += item.total;
          break;
      }
    });

    setTimeout(() => this.total -= this.cryptocurrencyService.balance.uah);
  }

  private setCostsRest(): void {
    const group = this.list.find((item: any) => item.type === 'DEBTS')!;
    const item = group.list.find((item: any) => item.label === 'Costs');

    this.costsService.setDataSource();
    this.costsService.calculateRest();

    if (item) {
      item.amount = this.costsService.rest;
    }
  }
}
