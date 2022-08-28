import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { CapitalComponent } from './capital.component';

const routes: Routes = [
  {
    path: '',
    component: CapitalComponent,
    // children: [
    //   {
    //     path: '',
    //     pathMatch: 'full',
    //     redirectTo: 'list',
    //   },
    //   {
    //     path: 'wallet',
    //     component: BinanceListComponent
    //   },
    // ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CapitalRoutingModule { }
