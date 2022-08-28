import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { RoundValuePipe } from './round-value.pipe';
import { ParseDatePipe } from './parse-date.pipe';
import { CurrencyPipe } from './currency.pipe';
import { RoundPipe } from './round.pipe';

const PIPES = [
  RoundValuePipe,
  ParseDatePipe,
  CurrencyPipe,
  RoundPipe
];

@NgModule({
  declarations: [...PIPES],
  exports: [...PIPES],
  imports: [CommonModule]
})
export class PipesModule { }
