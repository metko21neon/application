import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { MatTableDataSource, MatTableModule } from '@angular/material/table';

import { Subscription } from 'rxjs';

import { NETORK_COIN_ENUM, WALLET_LIST, WalletAddressInterface, WalletInterface } from '../../states/wallet.state';
import { CoinInterface } from '../../../../interfaces/coin.interface';
import { RoundValuePipe } from '../../../../pipes/round-value.pipe';
import { CoinsService } from '../../../../services/coins.service';

export interface ExtendedWalletInterface extends WalletInterface {
  amount: number;
  ration: number;
  coins: any[];
}

@Component({
  selector: 'app-wallets',
  templateUrl: './wallets.component.html',
  styleUrls: ['./wallets.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    MatTableModule,
    RoundValuePipe,
    RouterModule,
    CommonModule
  ]
})
export class WalletsComponent implements OnInit, OnDestroy {

  walletList: ExtendedWalletInterface[] = WALLET_LIST as ExtendedWalletInterface[];
  displayedColumns: string[] = ['number', 'company', 'name', 'ratio', 'balance'];
  dataSource!: MatTableDataSource<any>;
  total = 0;

  private subscription: Subscription = new Subscription();

  constructor(
    private changeDetectorRef: ChangeDetectorRef,
    private coinsService: CoinsService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.setCoinsSubscription();
  }

  openWalletDetails(wallet: ExtendedWalletInterface): void {
    const addressIndex = wallet.addresses
      .findIndex((item: WalletAddressInterface) => item.network === NETORK_COIN_ENUM.ETH);

    const address = addressIndex !== -1
      ? wallet.addresses[addressIndex].address
      : wallet.addresses[0].address;

    this.router.navigate(['./cryptocurrency/wallets/', address]);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  private calculateWalletsBalance(): void {
    this.walletList.map((wallet: ExtendedWalletInterface) => {
      wallet.amount = wallet.coins.reduce((acc: number, coin: any) => (acc + coin.amount), 0);
    });
  }

  private calculateWalletsRation(): void {
    this.walletList.map((wallet: ExtendedWalletInterface) => {
      wallet.ration = (wallet.amount || 0) / this.total * 100;
    });
  }

  private calculateWalletsTotal(): void {
    this.total = this.walletList
      .reduce((acc: number, wallet: ExtendedWalletInterface) => (acc + (wallet.amount || 0)), 0);
  }

  private setCoinsSubscription(): void {
    const stream$ = this.coinsService.coinList$.subscribe((coinList: CoinInterface[]) => {
      this.setWallets(coinList);

      this.calculateWalletsBalance();
      this.calculateWalletsTotal();
      this.calculateWalletsRation();

      this.sortWalletByAmount();

      this.dataSource = new MatTableDataSource(this.walletList);
      this.changeDetectorRef.detectChanges();
    });

    this.subscription.add(stream$);
  }

  private setWallets(coinList: CoinInterface[]): void {
    coinList.map((coin: CoinInterface) => {
      coin.wallets.map((wallet: any) => {
        const walletIndex = this.walletList.findIndex((item: WalletInterface) => {
          return item.addresses.some((address: WalletAddressInterface) => address.address === wallet.address);
        });

        if (walletIndex !== -1) {
          const coinItem = {
            name: coin.name,
            symbol: coin.symbol,
            amount: wallet.totalInCurrency
          };

          if (this.walletList[walletIndex].coins) {
            this.walletList[walletIndex].coins.push(coinItem);
          } else {
            this.walletList[walletIndex].coins = [coinItem]
          }
        }
      });
    });
  }

  private sortWalletByAmount(): void {
    this.walletList.sort((a: ExtendedWalletInterface, b: ExtendedWalletInterface) => b.amount - a.amount);
  }
}
