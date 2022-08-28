import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Params } from '@angular/router';
import { map, Subscription } from 'rxjs';
import { AppService } from 'src/app/app.service';
import { CoinHistoryActionEnum } from 'src/app/enums/coin-history-action.enum';
import { CoinInterface } from 'src/app/interfaces/coin.interface';
import { CryptoHistoryInterface } from 'src/app/interfaces/crypto-history.interface';
import { WalletInterface } from 'src/app/interfaces/wallet.interface';

@Component({
  selector: 'im-crypto-details',
  templateUrl: './crypto-details.component.html',
  styleUrls: ['./crypto-details.component.scss']
})
export class CryptoDetailsComponent implements OnInit, OnDestroy {

  displayedColumns: string[] = ['number', 'action', 'totalQuantity', 'quantity', 'price', 'total', 'percentageResult'];
  dataSource!: MatTableDataSource<any>;
  tokenDetails!: CoinInterface;
  wallet!: WalletInterface;
  params!: Params;

  totalEarnedCurrency = 0;
  totalSpendCurrency = 0;

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
        return this.appService.getTokenByAddress(params['tokenAddress']);
      })
    ).subscribe((tokenDetails: CoinInterface) => {
      console.log('tokenDetails:', tokenDetails);
      this.tokenDetails = tokenDetails;
      this.wallet = tokenDetails.wallets.find((wallet: WalletInterface) => wallet.address === this.params['walletAddress'])!;


      console.log('wallet1:', tokenDetails.wallets[0]);
      console.log('wallet2:', tokenDetails.wallets[1]);

      this.wallet?.transactions?.map((history: CryptoHistoryInterface, index: number) => {
        const previousTotal = (this.wallet?.transactions as any)[index - 1]?.totalQuantity! || 0;

        if (history.action === CoinHistoryActionEnum.RECEIVE) {
          history.totalQuantity = previousTotal + history.amount!;

          // this.totalEarnedCurrency -= history.total;
          // this.totalSpendCurrency += history.total;
        }

        if (history.action === CoinHistoryActionEnum.BUY) {
          history.totalQuantity = previousTotal + history.total / history.price;

          this.totalEarnedCurrency -= history.total;
          this.totalSpendCurrency += history.total;
        }

        if (history.action === CoinHistoryActionEnum.SELL) {
          history.totalQuantity = previousTotal - history.filled!;

          this.totalEarnedCurrency += history.filled! * history.price;
        }

        if (history.action === CoinHistoryActionEnum.TRANSFER) {
          history.totalQuantity = previousTotal - history.amount!;
        }

        if (history.totalQuantity! < 0.000001) {
          history.totalQuantity = 0;
        }
      });

      this.dataSource = new MatTableDataSource(this.wallet.transactions);
    });

    this.subscription.add(stream$);
  }

}
