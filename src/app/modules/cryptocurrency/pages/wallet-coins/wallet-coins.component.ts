import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { CommonModule } from '@angular/common';

import { Subscription, switchMap } from 'rxjs';

import { WalletAddressInterface } from '../../interfaces/wallet-address.interface';
import { CoinInterface } from '../../../../interfaces/coin.interface';
import { RoundValuePipe } from '../../../../pipes/round-value.pipe';
import { WalletInterface } from '../../interfaces/wallet.interface';
import { CoinsService } from '../../../../services/coins.service';
import { WALLET_LIST } from '../../states/wallet.state';

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
  dataSource!: MatTableDataSource<WalletCoinInterface>;
  wallet!: WalletInterface;
  total = 0;

  private subscription: Subscription = new Subscription();
  private walletAddress = '';

  constructor(
    private coinsService: CoinsService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.setWalletSubscription();
  }

  back(): void {
    this.router.navigate(['./cryptocurrency/wallets']);
  }

  openCoinDetails(coin: WalletCoinInterface): void {
    this.router.navigate(['./cryptocurrency/wallets', this.walletAddress, 'coins', coin.symbol]);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  private calculateWalletTotal(): void {
    this.total = this.dataSource.data
      .reduce((acc: number, prev: any) => (acc + prev.amount), 0);
  }

  private setWalletCoins(coinList: CoinInterface[]): void {
    const coins: WalletCoinInterface[] = [];

    coinList.map((coin: CoinInterface) => {
      const walletIndex = coin.wallets.findIndex((wallet: any) => {
        return this.wallet.addresses.some((item: WalletAddressInterface) => item.address === wallet.address);
      });

      if (walletIndex !== -1) {
        coins.push({
          amount: coin.wallets[walletIndex].totalInCurrency!,
          quantity: coin.wallets[walletIndex].quantity!,
          symbol: coin.symbol,
          name: coin.name,
        });
      }
    });

    this.dataSource = new MatTableDataSource(coins);
  }

  private setWalletDetails(walletAddress: string): void {
    this.walletAddress = walletAddress;

    this.wallet = WALLET_LIST.find((wallet: WalletInterface) => {
      return wallet.addresses.some((item: WalletAddressInterface) => item.address === walletAddress);
    })!;
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
}

interface WalletCoinInterface {
  name: string;
  symbol: string;
  quantity: number;
  amount: number;
}