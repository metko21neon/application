import { CashTransactionsInterface } from '../cash-transactions/interfaces/cash-transactions.interface';
import { BinanceSynchronizationService } from '../../../../components/binance/services/binance-synchronization.service';
import { BinanceWithdrawalsService } from '../../../../components/binance/services/binance-withdrawals.service';
import { InvestStatisticInterface } from '../../../../interfaces/invest-statistic.interface';
import { BinanceDepositsService } from '../../../../components/binance/services/binance-deposits.service';
import { CoinDataInterface } from '../../../../interfaces/coin-data.interface';
import { ColumnInterface } from '../../../../interfaces/column.interface';
import { CoinDataService } from '../../../../services/coin-data.service';
import { CoinInterface } from '../../../../interfaces/coin.interface';
import { WalletNamePipe } from '../../../../pipes/wallet-name.pipe';
import { CoinsService } from '../../../../services/coins.service';

import { animate, state, style, transition, trigger } from '@angular/animations';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatSort, MatSortModule } from '@angular/material/sort';

import { Subscription, switchMap } from 'rxjs';
import { RoundValuePipe } from 'src/app/pipes/round-value.pipe';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { RoundPipe } from 'src/app/pipes/round.pipe';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-coin-list',
  templateUrl: './coin-list.component.html',
  styleUrls: ['./coin-list.component.scss'],
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatCheckboxModule,
    MatInputModule,
    MatTableModule,
    RoundValuePipe,
    WalletNamePipe,
    MatSortModule,
    RouterModule,
    CommonModule,
    FormsModule,
    RoundPipe,
  ],
  providers: [
    BinanceSynchronizationService,
    BinanceWithdrawalsService,
    BinanceDepositsService,
    WalletNamePipe
  ],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class CoinListComponent implements OnInit, OnDestroy {

  @ViewChild(MatSort) matSort!: MatSort;

  dataSource!: MatTableDataSource<CoinInterface>;
  cashTransactions!: CashTransactionsInterface;
  expandedElement!: CoinInterface | null;
  statistic!: InvestStatisticInterface;

  columnList: ColumnInterface[] = [];
  displayedColumns: string[] = [];

  isHideZeroBalances = true;
  isHideUntracked = true;
  isLoading = false;

  updatedDate = '24.05.2023 20:00';

  search = '';

  private subscription: Subscription = new Subscription();
  private coinList: CoinInterface[] = [];

  constructor(
    private binanceSynchronizationService: BinanceSynchronizationService,
    private coinDataService: CoinDataService,
    private walletNamePipe: WalletNamePipe,
    private coinsService: CoinsService
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

  synchronizeOrders(): void {
    const stream$ = this.binanceSynchronizationService.synchronize().subscribe((data: any[]) => {
      console.log('synchronize:', data);
    });

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

  toggleZeroBalances(checked: boolean = this.isHideUntracked): void {
    // const coinList = this.coinList.filter((coin: CoinInterface) => {
    //   return checked ? coin.price !== null && coin.rank! <= 1000 : true;
    // });

    // this.dataSource = new MatTableDataSource(coinList);

    // this.setSortingDataAccessor();

    // setTimeout(() => this.dataSource.sort = this.matSort);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  private sortCoinsByName(a: CoinInterface, b: CoinInterface): number {
    const aName = a.name.toUpperCase();
    const bName = b.name.toUpperCase();

    if (aName < bName) return -1;
    if (aName > bName) return 1;

    return 0;
  }

  private getInitCoinList(coinList: any[]): void {
    const list = JSON.parse(JSON.stringify(coinList))
      .sort(this.sortCoinsByName)
      .map((coin: any) => {
        return {
          name: coin.name,
          symbol: coin.symbol,
          token_address: coin.token_address || "",
          wallets: coin.wallets
            .map((wallet: any) => {
              const walletName = this.walletNamePipe.transform(wallet.address);

              if (!walletName) {
                console.log('Not found wallet name:', coin.name, `(${coin.symbol})`);
                console.log('Wallet address:', wallet.address);
              }

              return {
                name: this.walletNamePipe.transform(wallet.address),
                address: wallet.address || "",
                transactions: wallet.transactions.map((transaction: any) => {
                  const { averagePrice, ...other } = transaction;
                  return other;
                }),
              };
            })
            .sort(this.sortCoinsByName)
        };
      })

    console.log('getInitCoinList:', list);
  }

  private getCoinList(): void {
    const stream$ = this.coinsService.coinList$.subscribe((coinList: CoinInterface[]) => {
      this.getInitCoinList(coinList);

      this.coinList = coinList.map((coin: CoinInterface) => {
        const value = this.statistic.totalSpendCurrency - coin.quantity * coin.averagePrice;
        coin.percantageFromDeposit = 100 - (value / this.statistic.totalSpendCurrency * 100);

        return coin;
      });

      const trackedList = this.coinList.filter((coin: CoinInterface) => {
        return this.isHideUntracked ? coin.price !== null && coin.rank! <= 1000 : true;
      });

      const notZeroBalanceList = trackedList.filter((coin: CoinInterface) => {
        return this.isHideZeroBalances ? coin.quantity !== 0 : true;
      });

      this.dataSource = new MatTableDataSource(notZeroBalanceList);

      this.setSortingDataAccessor();

      setTimeout(() => this.dataSource.sort = this.matSort);

      // console.log('COIN_LIST:', coinList);
      // this.applyFilter(({ target: { value: this.search } }) as any);
    });

    this.subscription.add(stream$);
  }

  private setColumnList(): void {
    this.columnList = this.coinsService.getColumnListList();

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
    const stream$ = this.coinsService.investStatistic$.subscribe((statistic: InvestStatisticInterface) => {
      this.statistic = statistic;
    });

    this.subscription.add(stream$);
  }
}
