import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { CryptoDetailsComponent } from './components/crypto-details/crypto-details.component';
import { CoinDataListComponent } from './components/coin-data-list/coin-data-list.component';
import { CryptoComponent } from './components/crypto/crypto.component';
import { WalletComponent } from './components/wallet/wallet.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/coins', pathMatch: 'full'
  },
  {
    path: 'coin-data-list',
    component: CoinDataListComponent
  },
  {
    path: 'cash-history',
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
    path: 'wallet/:walletAddress/coin/:symbol',
    component: CryptoDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
