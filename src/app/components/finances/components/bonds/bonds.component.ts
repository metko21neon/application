import { Component, Input, OnInit } from '@angular/core';

import { BondsStatisticsInterface, BondsService } from './bonds.service';
import { StateInterface } from '../../interfaces/state.interface';
import { BondInterface } from './interfaces/bond.interface';
import { CURRENCY_ENUM } from '../../enums/currency.enum';

@Component({
  selector: 'app-bonds',
  templateUrl: './bonds.component.html',
  styleUrls: ['./bonds.component.scss'],
})
export class BondsComponent implements OnInit {

  @Input() state!: StateInterface[];

  statistics!: BondsStatisticsInterface;
  dataSource: BondInterface[] = [];
  CURRENCY_ENUM = CURRENCY_ENUM;

  balanceHistory: any[] = [];
  total!: { invested: any; full: any; earned: any; };

  constructor(private bondsService: BondsService) { }

  ngOnInit(): void {
    this.bondsService.state = this.state;

    this.dataSource = this.bondsService.calculateBonds();
    this.balanceHistory = this.bondsService.prepareBalanceHistory();
    this.statistics = this.bondsService.calculateStatistics();
    this.total = this.bondsService.calculateFullTotal();
  }
}