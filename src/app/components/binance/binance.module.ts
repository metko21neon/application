import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BinanceListComponent } from './components/binance-list/binance-list.component';
import { MatLegacyTableModule as MatTableModule } from '@angular/material/legacy-table';
import { BinanceComponent } from './binance.component';
import { BinanceRoutingModule } from './binance-routing.module';
import { PipesModule } from 'src/app/pipes/pipes.module';

import { MatLegacyFormFieldModule as MatFormFieldModule } from '@angular/material/legacy-form-field';
import { MatLegacyInputModule as MatInputModule } from '@angular/material/legacy-input';
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
