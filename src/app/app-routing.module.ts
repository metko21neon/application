import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CashTransactionHistoryComponent } from './components/cash-transaction-history/cash-transaction-history.component';
import { CryptoDetailsComponent } from './components/crypto-details/crypto-details.component';
import { CryptoComponent } from './components/crypto/crypto.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/cash-hitory', pathMatch: 'full'
  },
  {
    path: 'cash-hitory',
    component: CashTransactionHistoryComponent
  },
  {
    path: 'crypto',
    component: CryptoComponent
  },
  {
    path: 'crypto/:id',
    component: CryptoDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
