import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatSortModule } from '@angular/material/sort';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NgxIndexedDBModule, DBConfig } from 'ngx-indexed-db';
import { CryptoComponent } from './components/crypto/crypto.component';
import { CryptoDetailsComponent } from './components/crypto-details/crypto-details.component';
import { CashTransactionHistoryComponent } from './components/cash-transaction-history/cash-transaction-history.component';
import { AddTransactionComponent } from './components/cash-transaction-history/add-transaction/add-transaction.component';
import { WalletComponent } from './components/wallet/wallet.component';
import { MatSelectModule } from '@angular/material/select';

const dbConfig: DBConfig = {
  name: 'Crypto',
  version: 2,
  objectStoresMeta: [
    {
      store: 'coinList',
      storeConfig: { keyPath: 'id', autoIncrement: true },
      storeSchema: [
        { name: 'name', keypath: 'name', options: { unique: false } },
        { name: 'symbol', keypath: 'symbol', options: { unique: true } },
        { name: 'history', keypath: 'history', options: { unique: false } }
      ]
    },
    {
      store: 'cash-transactions',
      storeConfig: { keyPath: 'id', autoIncrement: true },
      storeSchema: [
        { name: 'month', keypath: 'month', options: { unique: false } },
        { name: 'deposit', keypath: 'deposit', options: { unique: false } },
        { name: 'withdraw', keypath: 'withdraw', options: { unique: false } }
      ]
    }
  ]
};

@NgModule({
  declarations: [
    AppComponent,
    CryptoComponent,
    CryptoDetailsComponent,
    CashTransactionHistoryComponent,
    AddTransactionComponent,
    WalletComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NgxIndexedDBModule.forRoot(dbConfig),
    ReactiveFormsModule,
    FormsModule,

    MatFormFieldModule,
    MatCheckboxModule,
    MatSelectModule,
    MatButtonModule,
    MatDialogModule,
    MatTableModule,
    MatInputModule,
    MatSortModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
