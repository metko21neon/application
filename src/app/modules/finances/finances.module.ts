import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTooltipModule } from '@angular/material/tooltip';
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
import { CapitalComponent } from './components/capital/capital.component';
import { CostsComponent } from './components/costs/costs.component';
import { BondsComponent } from './components/bonds/bonds.component';
import { BondsTableComponent } from './components/bonds/components/bonds-table/bonds-table.component';
import { BalanceHistoryTableComponent } from './components/bonds/components/balance-history-table/balance-history-table.component';

@NgModule({
  declarations: [
    FinancesComponent,
    MonthComponent,
    DebtsComponent,
    SpendsComponent,
    ImCurrencyPipe,
    SavingsComponent,
    CapitalComponent,
    CostsComponent,
    BondsComponent,
    BondsTableComponent,
    BalanceHistoryTableComponent,
  ],
  imports: [
    FinancesRoutingModule,
    CommonModule,
    PipesModule,

    MatFormFieldModule,
    MatTooltipModule,
    MatTableModule,
    MatInputModule,
    MatSortModule,
    MatTabsModule,
  ]
})
export class FinancesModule { }
