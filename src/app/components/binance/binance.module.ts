import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BinanceListComponent } from './components/binance-list/binance-list.component';
import { MatTableModule } from '@angular/material/table';
import { BinanceComponent } from './binance.component';
import { BinanceRoutingModule } from './binance-routing.module';
import { PipesModule } from 'src/app/pipes/pipes.module';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSortModule } from '@angular/material/sort';
import { BinanceCoinComponent } from './components/binance-coin/binance-coin.component';

@NgModule({
  declarations: [
    BinanceListComponent,
    BinanceComponent,
    BinanceCoinComponent
  ],
  imports: [
    BinanceRoutingModule,
    MatTableModule,
    CommonModule,
    PipesModule,

    MatFormFieldModule,
    MatInputModule,
    MatSortModule,
  ]
})
export class BinanceModule { }
