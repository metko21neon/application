import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { CryptoDetailsComponent } from './components/crypto-details/crypto-details.component';
import { CoinDataListComponent } from './components/coin-data-list/coin-data-list.component';
import { WalletComponent } from './components/wallet/wallet.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/coins', pathMatch: 'full'
  },
  {
    path: 'cryptocurrency',
    loadChildren: () => import('./modules/cryptocurrency/cryptocurrency.routes').then(mod => mod.CRYPTOCURRENCY_ROUTES)
  },
  {
    path: 'coin-data-list',
    component: CoinDataListComponent
  },
  {
    path: 'finances',
    loadChildren: () => import('./modules/finances/finances.module').then((m) => m.FinancesModule),
  },
  {
    path: 'cash-history',
    loadChildren: () => import('./modules/cryptocurrency/pages/cash-transactions/cash-transactions.module').then((m) => m.CashTransactionsModule),
  },
  {
    path: 'binance',
    loadChildren: () => import('./components/binance/binance.module').then((m) => m.BinanceModule),
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
