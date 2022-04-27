import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Params } from '@angular/router';
import { NgxIndexedDBService } from 'ngx-indexed-db';
import { map, Subscription } from 'rxjs';
import { AppService } from 'src/app/app.service';
import { CoinHistoryActionEnum } from 'src/app/enums/coin-history-action.enum';
import { CoinInterface } from 'src/app/interfaces/coin.interface';
import { CryptoHistoryInterface } from 'src/app/interfaces/crypto-history.interface';

@Component({
  selector: 'im-crypto-details',
  templateUrl: './crypto-details.component.html',
  styleUrls: ['./crypto-details.component.scss']
})
export class CryptoDetailsComponent implements OnInit, OnDestroy {

  displayedColumns: string[] = ['number', 'action', 'totalQuantity', 'quantity', 'price', 'total', 'percentageResult'];
  dataSource!: MatTableDataSource<any>;
  coinDetails: any;

  totalEarnedCurrency = 0;
  totalSpendCurrency = 0;

  actionHistoryEnum = CoinHistoryActionEnum;

  private subscription: Subscription = new Subscription();

  constructor(
    private dbService: NgxIndexedDBService,
    private appService: AppService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.setAnamnesStepListSubscription();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  private setAnamnesStepListSubscription(): void {
    const stream$ = this.route.params.pipe(
      map((params: Params) => {
        console.log('params:', params, params['id']);
        return this.appService.getCoinByAddress(params['id']);
        // return this.dbService.getByKey('coinList', Number.parseInt(params['id'], 10))
      })
    ).subscribe((coinDetails: CoinInterface | undefined) => {
      coinDetails?.history.map((history: CryptoHistoryInterface, index: number) => {
        const previousTotal = coinDetails?.history[index - 1]?.totalQuantity! || 0;

        if (history.action === CoinHistoryActionEnum.BUY) {
          history.totalQuantity = previousTotal + history.total / history.price;

          this.totalEarnedCurrency -= history.total;
          this.totalSpendCurrency += history.total;
        }

        if (history.action === CoinHistoryActionEnum.SELL) {
          history.totalQuantity = previousTotal - history.filled!;

          this.totalEarnedCurrency += history.filled! * history.price;
        }
      });

      this.coinDetails = coinDetails;
      console.log('coinDetails:', coinDetails);

      this.dataSource = new MatTableDataSource(coinDetails?.history);
    });

    this.subscription.add(stream$);
  }

}
