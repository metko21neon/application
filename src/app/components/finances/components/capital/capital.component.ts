import { Component, Input, OnInit } from '@angular/core';

import { StateInterface } from '../../interfaces/state.interface';
import { CAPITAL_STATE } from '../../states/capital.state';

@Component({
  selector: 'app-capital',
  templateUrl: './capital.component.html',
  styleUrls: ['./capital.component.scss']
})
export class CapitalComponent implements OnInit {

  @Input() state!: StateInterface[];

  capital = CAPITAL_STATE;
  exchangeRate = 38;
  list: any[] = [];
  total = {
    amountUSD: 0,
    amountUAH: 0,
  };

  constructor() { }

  ngOnInit(): void {
    this.list = this.capital.list.map((item: any) => {
      if (item.price.currency === 'UAH') {
        return {
          ...item,
          amountUSD: item.price.current / this.exchangeRate,
          amountUAH: item.price.current,
        }
      }

      if (item.price.currency === 'USD') {
        return {
          ...item,
          amountUAH: item.price.current * this.exchangeRate,
          amountUSD: item.price.current,
        }
      }

      return item;
    });

    this.calculateCapitalTotal();
  }


  private calculateCapitalTotal(): void {
    this.total.amountUSD = this.list.reduce((acc: number, item: any) => acc + item.amountUSD, 0);
    this.total.amountUAH = this.list.reduce((acc: number, item: any) => acc + item.amountUAH, 0);
  }
}
