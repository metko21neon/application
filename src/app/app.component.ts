import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';

import { combineLatest, Subscription } from 'rxjs';

import { CashTransactionsService } from './modules/cryptocurrency/pages/cash-transactions/cash-transactions.service';
import { CoinDataService } from './services/coin-data.service';
import { CoinsService } from './services/coins.service';

export const DATE_FORMAT = 'YYYY-MM-DD HH:mm:ss';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit, OnDestroy {

  private subscription: Subscription = new Subscription();

  constructor(
    private cashTransactionsService: CashTransactionsService,
    private coinDataService: CoinDataService,
    private coinsService: CoinsService,
  ) { }

  ngOnInit(): void {
    this.initData();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  private initData(): void {
    const stream$ = combineLatest([
      this.cashTransactionsService.getCashTransactions(),
      this.coinDataService.getCoinData(),
      this.coinsService.getCoinList()
    ]).subscribe();

    this.subscription.add(stream$);
  }
}
