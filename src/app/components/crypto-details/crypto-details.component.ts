import { ActivatedRoute, Params, Router } from '@angular/router';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

import { map, Subscription } from 'rxjs';

import { CryptoHistoryInterface } from '../../interfaces/crypto-history.interface';
import { CoinHistoryActionEnum } from '../../enums/coin-history-action.enum';
import { WalletInterface } from '../../interfaces/wallet.interface';
import { CoinInterface } from '../../interfaces/coin.interface';
import { CoinsService } from '../../services/coins.service';

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

  prevWalletAddress = '';
  nextWalletAddress = '';

  private subscription: Subscription = new Subscription();

  constructor(
    private coinsService: CoinsService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getTokenByAddress();
  }

  back(): void {
    this.router.navigate(['..']);
  }

  prevWallet(): void {
    this.router.navigate(['./wallet/', this.prevWalletAddress, 'coin', this.tokenDetails?.symbol]);
  }

  nextWallet(): void {
    this.router.navigate(['./wallet/', this.nextWalletAddress, 'coin', this.tokenDetails?.symbol]);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  private reset(): void {
    this.totalEarnedCurrency = 0;
    this.totalSpendCurrency = 0;

    this.totalRest = 0;
    this.totalSell = 0;
    this.totalBuy = 0;
  }

  private getTokenByAddress(): void {
    const stream$ = this.route.params.pipe(
      map((params: Params) => {
        this.params = params;
        return this.coinsService.getTokenBySymbol(params['symbol']);
      })
    ).subscribe((tokenDetails: CoinInterface) => {
      this.tokenDetails = tokenDetails;
      console.log('tokenDetails:', tokenDetails);

      const walletIndex = tokenDetails.wallets
        .findIndex((wallet: WalletInterface) => wallet.address === this.params['walletAddress'])!;

      this.wallet = tokenDetails.wallets[walletIndex];

      if (walletIndex > 0) {
        this.prevWalletAddress = tokenDetails.wallets[walletIndex - 1].address;
      } else {
        this.prevWalletAddress = '';
      }

      if (walletIndex < tokenDetails.wallets.length - 1) {
        this.nextWalletAddress = tokenDetails.wallets[walletIndex + 1].address;
      } else {
        this.nextWalletAddress = '';
      }

      this.reset();
      this.setWalletTransactions();
    });

    this.subscription.add(stream$);
  }

  private setWalletTransactions(): void {
    this.wallet?.transactions?.map((history: CryptoHistoryInterface, index: number) => {
      const previousTotal = (this.wallet?.transactions as any)[index - 1]?.totalQuantity! || 0;

      if (history.action === CoinHistoryActionEnum.RECEIVE) {
        history.totalQuantity = previousTotal + history.amount!;

        this.totalEarnedCurrency -= history.total;
        this.totalSpendCurrency += history.total;

        this.totalBuy += history.total;
        return;
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
        return;
      }

      if (history.action === CoinHistoryActionEnum.SELL) {
        history.totalQuantityPercentage = history.filled! / (previousTotal / 100);

        history.totalQuantity = previousTotal - history.filled!;

        this.totalEarnedCurrency += history.filled! * history.price;

        this.totalSell += history.filled! * history.price;
        return;
      }

      if (history.action === CoinHistoryActionEnum.TRANSFER) {
        history.totalQuantityPercentage = (history.amount! + history.fee!) / (previousTotal / 100);
        history.totalQuantity = previousTotal - history.amount! - history.fee!;
        return;
      }

      if (history.action === CoinHistoryActionEnum.SPEND) {
        history.totalQuantityPercentage = history.amount! / (previousTotal / 100);
        history.totalQuantity = previousTotal - history.amount!;
        return;
      }

      if (history.action === CoinHistoryActionEnum.STAKE) {
        history.totalQuantityPercentage = history.amount! / (previousTotal / 100);
        history.totalQuantity = previousTotal + history.amount!;
        return;
      }

      if (history.totalQuantity! < 0.000001) {
        history.totalQuantity = 0;
        return;
      }
    });

    const totalQuantity = this.wallet.transactions![this.wallet.transactions!.length - 1].totalQuantity;
    this.totalRest = totalQuantity * this.tokenDetails?.price!;

    this.dataSource = new MatTableDataSource(this.wallet.transactions);
  }

}
