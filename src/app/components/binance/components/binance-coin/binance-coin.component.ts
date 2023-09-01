import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatLegacyTableDataSource as MatTableDataSource } from '@angular/material/legacy-table';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';

const COLUMN_LIST: string[] = ['symbol', 'price', 'amount', 'fullAmount', 'total'];

@Component({
  selector: 'app-binance-coin',
  templateUrl: './binance-coin.component.html',
  styleUrls: ['./binance-coin.component.scss']
})
export class BinanceCoinComponent implements OnInit, OnDestroy {

  displayedColumns: string[] = COLUMN_LIST;
  dataSource!: MatTableDataSource<any>;

  private subscription: Subscription = new Subscription();

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    const stream$ = this.route.params.pipe(
      // map((params: Params) => {
      //   this.params = params;
      //   return this.appService.getTokenByAddress(params['tokenAddress']);
      // })
    ).subscribe();

    this.subscription.add(stream$);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
