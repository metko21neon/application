import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { BinanceListComponent } from './components/binance-list/binance-list.component';
import { BinanceComponent } from './binance.component';
import { BinanceCoinComponent } from './components/binance-coin/binance-coin.component';

const routes: Routes = [
  {
    path: '',
    component: BinanceComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'list',
      },
      {
        path: 'wallet',
        component: BinanceListComponent
      },
      {
        path: 'coin/:id',
        component: BinanceCoinComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BinanceRoutingModule { }
