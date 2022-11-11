import { CashTransactionsInterface } from '../cash-transactions/interfaces/cash-transactions.interface';
import { InvestStatisticInterface } from '../../interfaces/invest-statistic.interface';
import { CoinDataInterface } from '../../interfaces/coin-data.interface';
import { ColumnInterface } from '../../interfaces/column.interface';
import { CoinDataService } from '../../services/coin-data.service';
import { CoinInterface } from '../../interfaces/coin.interface';
import { AppService } from '../../app.service';

import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';

import { Subscription, switchMap } from 'rxjs';

@Component({
  selector: 'app-crypto',
  templateUrl: './crypto.component.html',
  styleUrls: ['./crypto.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class CryptoComponent implements OnInit, OnDestroy {

  @ViewChild(MatSort) matSort!: MatSort;

  dataSource!: MatTableDataSource<CoinInterface>;
  cashTransactions!: CashTransactionsInterface;
  expandedElement!: CoinInterface | null;
  statistic!: InvestStatisticInterface;

  columnList: ColumnInterface[] = [];
  displayedColumns: string[] = [];

  isHideUntracked = true;
  isLoading = false;

  private subscription: Subscription = new Subscription();
  private coinList: CoinInterface[] = [];

  constructor(
    private coinDataService: CoinDataService,
    private appService: AppService
  ) { }

  ngOnInit(): void {
    this.setStatisticSubscription();
    this.setColumnList();
    this.getCoinList();
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  synchronize(): void {
    const stream$ = this.coinDataService.synchronizeCoinData().pipe(
      switchMap(() => this.coinDataService.coinData$)
    ).subscribe((data: CoinDataInterface[]) => console.log('synchronize:', data));

    this.subscription.add(stream$);
  }

  selectCrypto(crypto: any): void {
    console.log('selectCrypto:', crypto);
  }

  showColumn(column: ColumnInterface): void {
    const index = this.displayedColumns.findIndex((columnName: string) => columnName === column.shortcut);

    if (index === -1) {
      this.displayedColumns.splice(column.position, 0, column.shortcut);
    } else {
      this.displayedColumns.splice(index, 1);
    }
  }

  toggleUntracked(checked: boolean = this.isHideUntracked): void {
    const coinList = this.coinList.filter((coin: CoinInterface) => {
      return checked ? coin.price !== null && coin.rank! <= 1000 : true;
    });

    this.dataSource = new MatTableDataSource(coinList);

    this.setSortingDataAccessor();

    setTimeout(() => this.dataSource.sort = this.matSort);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  private getCoinList(): void {
    const stream$ = this.appService.coinList$.subscribe((coinList: CoinInterface[]) => {
      this.coinList = coinList;
      this.toggleUntracked();

      // console.log('COIN_LIST:', coinList);
      // this.applyFilter(({ target: { value: 'icp' } }) as any);
    });

    this.subscription.add(stream$);
  }

  private setColumnList(): void {
    this.columnList = this.appService.getColumnListList();

    this.displayedColumns = this.columnList
      .filter((column: ColumnInterface) => column.selected)
      .map((column: ColumnInterface) => column.shortcut);
  }

  private setSortingDataAccessor(): void {
    this.dataSource.sortingDataAccessor = (coin: CoinInterface, property: string) => {
      switch (property) {
        case 'coin':
          return coin.name.toLowerCase();

        case 'totalCoins':
          return coin.quantity;

        default:
          return (coin as any)[property];
      }
    };
  }

  private setStatisticSubscription(): void {
    const stream$ = this.appService.investStatistic$.subscribe((statistic: InvestStatisticInterface) => {
      this.statistic = statistic;
    });

    this.subscription.add(stream$);
  }
}
