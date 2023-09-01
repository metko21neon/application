import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

// Modules
import { CashTransactionsRoutingModule } from './cash-transactions-routing.module';
import { PipesModule } from '../../../../pipes/pipes.module';

// Components
import { CashTransactionsTableComponent } from './components/cash-transactions-table/cash-transactions-table.component';
import { CashTransactionsHistoryComponent } from './cash-transactions.component';

// UI
import { MatLegacyTableModule as MatTableModule } from '@angular/material/legacy-table';
import { MatSortModule } from '@angular/material/sort';

@NgModule({
  declarations: [
    CashTransactionsHistoryComponent,
    CashTransactionsTableComponent
  ],
  imports: [
    CashTransactionsRoutingModule,
    MatTableModule,
    MatSortModule,
    CommonModule,
    PipesModule
  ]
})
export class CashTransactionsModule { }
