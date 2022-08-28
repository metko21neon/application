import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { CryptoDetailsComponent } from './components/crypto-details/crypto-details.component';
import { CoinDataListComponent } from './components/coin-data-list/coin-data-list.component';
import { CoinDetailsComponent } from './components/coin-details/coin-details.component';
import { CryptoComponent } from './components/crypto/crypto.component';
import { WalletComponent } from './components/wallet/wallet.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/cash-hitory', pathMatch: 'full'
  },
  {
    path: 'coin-data-list',
    component: CoinDataListComponent
  },
  {
    path: 'cash-hitory',
    loadChildren: () => import('./components/cash-transactions/cash-transactions.module').then((m) => m.CashTransactionsModule),
  },
  {
    path: 'binance',
    loadChildren: () => import('./components/binance/binance.module').then((m) => m.BinanceModule),
  },
  {
    path: 'capital',
    loadChildren: () => import('./components/capital/capital.module').then((m) => m.CapitalModule),
  },
  {
    path: 'coins',
    component: CryptoComponent
  },
  {
    path: 'wallet',
    component: WalletComponent
  },
  {
    path: 'wallet/:walletAddress/coin/:tokenAddress',
    component: CryptoDetailsComponent
  },
  {
    path: 'crypto/:id',
    component: CoinDetailsComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
