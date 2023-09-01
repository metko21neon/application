import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatLegacyTableDataSource as MatTableDataSource } from '@angular/material/legacy-table';
import { Subscription } from 'rxjs';
import { CoinDataInterface } from 'src/app/interfaces/coin-data.interface';
import { ColumnInterface } from 'src/app/interfaces/column.interface';
import { CoinDataService } from 'src/app/services/coin-data.service';

@Component({
  selector: 'app-coin-data-list',
  templateUrl: './coin-data-list.component.html',
  styleUrls: ['./coin-data-list.component.scss']
})
export class CoinDataListComponent implements OnInit, OnDestroy {

  @ViewChild(MatSort) matSort!: MatSort;

  displayedColumns: string[] = ['number', 'rank', 'symbol', 'price', 'percent_change_90d'];
  dataSource!: MatTableDataSource<any>;

  private subscription: Subscription = new Subscription();

  constructor(
    private coinDataService: CoinDataService,
  ) { }

  ngOnInit(): void {
    this.getCoinList();
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  sort(event: { active: string; direction: string; }): void {
    console.log('sort:', event);
  }

  selectCrypto(crypto: any): void {
    console.log('selectCrypto:', crypto);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  private getCoinList(): void {
    const stream$ = this.coinDataService.coinData$.subscribe((coinDataList: CoinDataInterface[]) => {
      this.dataSource = new MatTableDataSource(coinDataList);
      setTimeout(() => this.dataSource.sort = this.matSort);
      console.log('coinDataList:', coinDataList);
    });

    this.subscription.add(stream$);
  }
}
