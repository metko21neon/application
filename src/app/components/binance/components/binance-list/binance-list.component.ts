import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Subscription, switchMap } from 'rxjs';
import { CoinDataInterface } from 'src/app/interfaces/coin-data.interface';
import { InvestStatisticInterface } from 'src/app/interfaces/invest-statistic.interface';
import { CoinDataService } from 'src/app/services/coin-data.service';
import { BinanceCoinInterface } from '../../interfaces/binance-coin.interface';
import { WalletService } from '../../wallet.service';

const COLUMN_LIST: string[] = ['symbol', 'price', 'amount', 'fullAmount', 'total'];
// 'flexibleAmount',

@Component({
  selector: 'app-binance-list',
  templateUrl: './binance-list.component.html',
  styleUrls: ['./binance-list.component.scss']
})
export class BinanceListComponent implements OnInit, OnDestroy {

  @ViewChild(MatSort) sort!: MatSort;

  displayedColumns: string[] = COLUMN_LIST;
  fiatDataSource!: MatTableDataSource<any>;
  coinDataSource!: MatTableDataSource<any>;
  statistic!: InvestStatisticInterface;

  private subscription: Subscription = new Subscription();

  constructor(
    private coinDataService: CoinDataService,
    private walletService: WalletService,
  ) { }

  ngOnInit(): void {
    this.setInvestStatisticSubscription();
    this.getCoinList();
  }

  synchronizeCoinData(): void {
    const stream$ = this.coinDataService.synchronizeCoinData().pipe(
      switchMap(() => this.coinDataService.coinData$)
    ).subscribe((data: CoinDataInterface[]) => console.log('synchronizeCoinData:', data));

    this.subscription.add(stream$);
  }

  getCoinList(): void {
    // const stream$ = this.walletService.getCoinList().pipe(
    //   switchMap(() => this.walletService.coinList$)
    // ).subscribe((coinList: BinanceCoinInterface[]) => {
    //   this.coinDataSource = new MatTableDataSource(coinList);
    //   setTimeout(() => this.coinDataSource.sort = this.sort);

    //   console.log('getCoinListMock:', coinList);
    // });

    // this.subscription.add(stream$);
  }

  synchronizeCoinList(): void {
    const stream$ = this.walletService.synchronizeCoinList().subscribe();

    this.subscription.add(stream$);
  }

  synchronize(): void {
    const stream$ = this.walletService.synchronizeCoinList().pipe(
      // switchMap(() => this.walletService.synchronizeFlexibleList())
    ).subscribe();

    this.subscription.add(stream$);
  }

  searchCoin(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.coinDataSource.filter = filterValue.trim().toLowerCase();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  private setInvestStatisticSubscription(): void {
    const stream$ = this.walletService.investStatistic$.subscribe((statistic: InvestStatisticInterface) => {
      console.log('statistic:', statistic);
      this.statistic = statistic;
    });

    this.subscription.add(stream$);
  }
}
