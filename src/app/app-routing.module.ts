import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

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
    path: 'finances',
    loadChildren: () => import('./modules/finances/finances.module').then((m) => m.FinancesModule),
  },
  {
    path: 'binance',
    loadChildren: () => import('./components/binance/binance.module').then((m) => m.BinanceModule),
  },
  {
    path: 'wallet',
    component: WalletComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
