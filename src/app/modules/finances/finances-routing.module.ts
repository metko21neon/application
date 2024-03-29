import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { FinancesComponent } from './finances.component';

const routes: Routes = [
  { path: '', component: FinancesComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FinancesRoutingModule { }
