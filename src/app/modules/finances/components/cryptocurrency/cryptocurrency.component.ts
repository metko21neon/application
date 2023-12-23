import { Component, Input, OnInit } from '@angular/core';

import { StateInterface } from '../../interfaces/state.interface';
import { CryptocurrencyService } from './cryptocurrency.service';
import { CRPTO_ACTIONS_ENUM } from './enums/actions.enum';

@Component({
  selector: 'app-cryptocurrency',
  templateUrl: './cryptocurrency.component.html',
  styleUrls: ['./cryptocurrency.component.scss']
})
export class CryptocurrencyComponent implements OnInit {

  @Input() state!: StateInterface[];

  total = {
    income: 0
  };

  constructor(public cryptocurrencyService: CryptocurrencyService) { }

  ngOnInit(): void {
    this.cryptocurrencyService.state = this.state;

    this.cryptocurrencyService.setDepositHistory();
    this.cryptocurrencyService.calculateStatistics();

    this.total.income = this.cryptocurrencyService.dataSource
      .filter((item: any) => item.action === CRPTO_ACTIONS_ENUM.RECEIVE)
      .reduce((acc: number, item: any) => (acc + item.amount), 0);
  }
}
