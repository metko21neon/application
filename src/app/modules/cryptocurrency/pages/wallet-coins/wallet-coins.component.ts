import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { CommonModule } from '@angular/common';

import { MatTableDataSource, MatTableModule } from '@angular/material/table';

import { Subscription, switchMap } from 'rxjs';

import { WALLET_LIST, WalletAddressInterface, WalletInterface } from '../../states/wallet.state';
import { CoinInterface } from 'src/app/interfaces/coin.interface';
import { RoundValuePipe } from 'src/app/pipes/round-value.pipe';
import { CoinsService } from 'src/app/services/coins.service';

@Component({
  selector: 'app-wallet-coins',
  templateUrl: './wallet-coins.component.html',
  styleUrls: ['./wallet-coins.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    MatTableModule,
    RoundValuePipe,
    CommonModule
  ]
})
export class WalletCoinsComponent implements OnInit, OnDestroy {

  displayedColumns: string[] = ['number', 'name', 'coin_balance', 'usd_balance'];
  dataSource!: MatTableDataSource<any>;
  wallet!: WalletInterface;
  total: number = 0;

  private subscription: Subscription = new Subscription();

  constructor(
    private coinsService: CoinsService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.setWalletSubscription();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  private setWalletSubscription(): void {
    const stream$ = this.route.params.pipe(
      switchMap((params: Params) => {
        this.setWalletDetails(params['walletAddress']);
        return this.coinsService.coinList$;
      })
    ).subscribe((coinList: CoinInterface[]) => {
      this.setWalletCoins(coinList);
      this.calculateWalletTotal();
    });

    this.subscription.add(stream$);
  }

  private calculateWalletTotal(): void {
    this.total = this.dataSource.data.reduce((acc: number, prev: any) => (acc + prev.wallet.totalInCurrency), 0);
  }

  private setWalletCoins(coinList: CoinInterface[]): void {
    const coins: any[] = [];

    coinList.map((coin: CoinInterface) => {
      const walletIndex = coin.wallets.findIndex((wallet: any) => {
        return this.wallet.addresses.some((item: WalletAddressInterface) => item.address === wallet.address);
      });

      if (walletIndex !== -1) {
        coins.push({
          name: coin.name,
          symbol: coin.symbol,
          wallet: coin.wallets[walletIndex]
        });
      }
    });

    this.dataSource = new MatTableDataSource(coins);
  }

  private setWalletDetails(walletAddress: string): void {
    this.wallet = WALLET_LIST.find((wallet: WalletInterface) => {
      return wallet.addresses.some((item: WalletAddressInterface) => item.address === walletAddress);
    })!;
  }
}
