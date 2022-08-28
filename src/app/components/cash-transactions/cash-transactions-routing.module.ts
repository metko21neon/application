import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { CashTransactionsHistoryComponent } from './cash-transactions.component';

const routes: Routes = [
  { path: '', component: CashTransactionsHistoryComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CashTransactionsRoutingModule { }
