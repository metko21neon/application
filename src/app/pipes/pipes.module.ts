import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

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
    CommonModule,
    RoundPipe,

    ...PIPES,
  ],
  imports: [
    RoundValuePipe,
    CommonModule,
    RoundPipe
  ]
})
export class PipesModule { }
