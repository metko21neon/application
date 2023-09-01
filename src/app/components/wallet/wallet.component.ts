import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { UntypedFormControl } from '@angular/forms';

import { WalletInterface } from '../../interfaces/wallet.interface';
import { ColumnInterface } from '../../interfaces/column.interface';
import { COIN_STATUS_LIST } from '../../states/coin-status.state';
import { CoinInterface } from '../../interfaces/coin.interface';
import { AppService } from '../../app.service';

import { Subscription } from 'rxjs';

@Component({
  selector: 'im-wallet',
  templateUrl: './wallet.component.html',
  styleUrls: ['./wallet.component.scss']
})
export class WalletComponent implements OnInit, OnDestroy {

  @ViewChild(MatSort) matSort!: MatSort;

  statusControl: UntypedFormControl = new UntypedFormControl('tracked');

  dataSource!: MatTableDataSource<any>;
  walletList: WalletInterface[] = [];
  columnList: ColumnInterface[] = [];
  selectedWallet!: WalletInterface;
  displayedColumns: string[] = [];
  coinList: CoinInterface[] = [];

  totalSpendCurrency = 0;
  percentageResult = 0;
  totalInCurrency = 0;
  currencyResult = 0;

  statusList = COIN_STATUS_LIST;

  private subscription: Subscription = new Subscription();

  constructor(private appService: AppService) { }

  ngOnInit(): void {
    this.setColumnList();
    this.getWalletList();
  }

  filterProjectByStatus(): void {
    const status = this.statusControl.value;

    const filteredList = this.coinList.filter((coin: CoinInterface) => {
      if (status === 'tracked') { return !coin.isClosed && !coin.isUntracked; }
      if (status === 'untracked') { return coin.isUntracked; }
      if (status === 'closed') { return coin.isClosed; }
      if (status === 'all') { return true; }

      return true;
    });

    this.dataSource = new MatTableDataSource(filteredList);
    this.setTotalSpendCurrency();
  }

  searchCoin(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  selectWallet(wallet: WalletInterface): void {
    this.coinList = this.appService.getCoinListByWalletAddress(wallet.address);
    this.selectedWallet = wallet;

    setTimeout(() => this.dataSource.sort = this.matSort);
    console.log('coinList:', this.coinList);

    this.filterProjectByStatus();
    this.setTotalSpendCurrency();
  }

  getCurrentWallet(coin: CoinInterface): WalletInterface {
    return coin.wallets.find((wallet) => wallet.address === this.selectedWallet.address)!;
  }

  private setTotalSpendCurrency(): void {
    this.totalSpendCurrency = 0;
    this.percentageResult = 0;
    this.totalInCurrency = 0;
    this.currencyResult = 0;

    this.dataSource.data.map((coin: CoinInterface) => {
      if (coin.hasOwnProperty('history')) {
        this.totalSpendCurrency += coin.investedAmount;
        this.totalInCurrency += coin.totalInCurrency;
        this.currencyResult += coin.currencyResult;
      }

      if (!coin.hasOwnProperty('history')) {
        const wallet = this.getCurrentWallet(coin);

        this.totalSpendCurrency += wallet.investedAmount!;
        this.totalInCurrency += wallet.totalInCurrency!;
        this.currencyResult += wallet.currencyResult!;
      }
    });

    this.percentageResult = Number.parseFloat(((this.totalInCurrency - this.totalSpendCurrency) / (this.totalSpendCurrency / 100)).toFixed(1));
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  private getWalletList(): void {
    // const stream$ = this.appService.getWalletList().subscribe((walletList: WalletInterface[]) => {
    //   this.walletList = walletList;

    //   this.selectWallet(walletList[0]);
    // });

    // this.subscription.add(stream$);
  }

  private setColumnList(): void {
    this.columnList = this.appService.getColumnListList();
    console.log('columnList:', this.columnList);

    this.displayedColumns = this.columnList
      .filter((column: ColumnInterface) => column.selected)
      .map((column: ColumnInterface) => column.shortcut);
  }
}
