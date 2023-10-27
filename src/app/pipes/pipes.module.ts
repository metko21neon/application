import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { WalletNamePipe } from '../modules/cryptocurrency/enums/wallet-name.pipe';
import { RoundValuePipe } from './round-value.pipe';
import { ParseDatePipe } from './parse-date.pipe';
import { CurrencyPipe } from './currency.pipe';
import { RoundPipe } from './round.pipe';

const PIPES = [
  ParseDatePipe,
  CurrencyPipe,
];

@NgModule({
  declarations: [...PIPES],
  exports: [
    RoundValuePipe,
    WalletNamePipe,
    CommonModule,
    RoundPipe,

    ...PIPES,
  ],
  imports: [
    RoundValuePipe,
    WalletNamePipe,
    CommonModule,
    RoundPipe
  ]
})
export class PipesModule { }
