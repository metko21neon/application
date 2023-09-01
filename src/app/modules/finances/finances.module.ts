import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { MatLegacyFormFieldModule as MatFormFieldModule } from '@angular/material/legacy-form-field';
import { MatLegacyTableModule as MatTableModule } from '@angular/material/legacy-table';
import { MatLegacyInputModule as MatInputModule } from '@angular/material/legacy-input';
import { MatSortModule } from '@angular/material/sort';
import { MatLegacyTabsModule as MatTabsModule } from '@angular/material/legacy-tabs';

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
    MatTableModule,
    MatInputModule,
    MatSortModule,
    MatTabsModule,
  ]
})
export class FinancesModule { }
