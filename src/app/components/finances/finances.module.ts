import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatSortModule } from '@angular/material/sort';
import { MatTabsModule } from '@angular/material/tabs';

import { FinancesRoutingModule } from './finances-routing.module';
import { FinancesComponent } from './finances.component';
import { PipesModule } from '../../pipes/pipes.module';
import { MonthComponent } from './components/month/month.component';
import { DebtsComponent } from './components/debts/debts.component';
import { SpendsComponent } from './components/spends/spends.component';
import { ImCurrencyPipe } from './pipes/im-currency.pipe';
import { SavingsComponent } from './components/savings/savings.component';

@NgModule({
  declarations: [
    FinancesComponent,
    MonthComponent,
    DebtsComponent,
    SpendsComponent,
    ImCurrencyPipe,
    SavingsComponent,
  ],
  imports: [
    FinancesRoutingModule,
    CommonModule,
    PipesModule,

    MatFormFieldModule,
    MatTableModule,
    MatInputModule,
    MatSortModule,
    MatTabsModule,
  ]
})
export class FinancesModule { }
