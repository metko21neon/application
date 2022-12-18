import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Params } from '@angular/router';

import { map, Subscription } from 'rxjs';

import { CryptoHistoryInterface } from '../../interfaces/crypto-history.interface';
import { CoinHistoryActionEnum } from '../../enums/coin-history-action.enum';
import { WalletInterface } from '../../interfaces/wallet.interface';
import { CoinInterface } from '../../interfaces/coin.interface';
import { AppService } from '../../app.service';

@Component({
  selector: 'im-crypto-details',
  templateUrl: './crypto-details.component.html',
  styleUrls: ['./crypto-details.component.scss']
})
export class CryptoDetailsComponent implements OnInit, OnDestroy {

  displayedColumns: string[] = ['number', 'date', 'action', 'totalQuantity', 'quantity', 'price', 'averagePrice', 'total'];
  dataSource!: MatTableDataSource<any>;
  tokenDetails!: CoinInterface;
  wallet!: WalletInterface;
  params!: Params;

  totalEarnedCurrency = 0;
  totalSpendCurrency = 0;

  totalRest = 0;
  totalSell = 0;
  totalBuy = 0;

  actionHistoryEnum = CoinHistoryActionEnum;

  private subscription: Subscription = new Subscription();

  constructor(
    private appService: AppService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.getTokenByAddress();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  private getTokenByAddress(): void {
    const stream$ = this.route.params.pipe(
      map((params: Params) => {
        this.params = params;
        return this.appService.getTokenBySymbol(params['symbol']);
      })
    ).subscribe((tokenDetails: CoinInterface) => {
      console.log('tokenDetails:', tokenDetails);
      this.wallet = tokenDetails.wallets.find((wallet: WalletInterface) => wallet.address === this.params['walletAddress'])!;

      this.tokenDetails = tokenDetails;

      this.wallet?.transactions?.map((history: CryptoHistoryInterface, index: number) => {
        const previousTotal = (this.wallet?.transactions as any)[index - 1]?.totalQuantity! || 0;

        if (history.action === CoinHistoryActionEnum.RECEIVE) {
          history.totalQuantity = previousTotal + history.amount!;

          this.totalEarnedCurrency -= history.total;
          this.totalSpendCurrency += history.total;

          this.totalBuy += history.total;
        }

        if (history.action === CoinHistoryActionEnum.BUY) {
          if (previousTotal === 0) {
            history.totalQuantityPercentage = 100;
          } else {
            history.totalQuantityPercentage = (history.total / history.price) / (previousTotal / 100);
          }

          history.totalQuantity = previousTotal + history.total / history.price;

          this.totalEarnedCurrency -= history.total;
          this.totalSpendCurrency += history.total;

          this.totalBuy += history.total;
        }

        if (history.action === CoinHistoryActionEnum.SELL) {
          history.totalQuantityPercentage = history.filled! / (previousTotal / 100);

          history.totalQuantity = previousTotal - history.filled!;

          this.totalEarnedCurrency += history.filled! * history.price;

          this.totalSell += history.filled! * history.price;
        }

        if (history.action === CoinHistoryActionEnum.TRANSFER) {
          history.totalQuantityPercentage = (history.amount! + history.fee!) / (previousTotal / 100);
          history.totalQuantity = previousTotal - history.amount! - history.fee!;
        }

        if (history.action === CoinHistoryActionEnum.SPEND) {
          history.totalQuantityPercentage = history.amount! / (previousTotal / 100);
          history.totalQuantity = previousTotal - history.amount!;
        }

        if (history.totalQuantity! < 0.000001) {
          history.totalQuantity = 0;
        }
      });

      const totalQuantity = this.wallet.transactions![this.wallet.transactions!.length - 1].totalQuantity;
      this.totalRest = totalQuantity * this.tokenDetails?.price!;

      this.dataSource = new MatTableDataSource(this.wallet.transactions);
    });

    this.subscription.add(stream$);
  }

}
