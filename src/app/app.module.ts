import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

// Angular material
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSelectModule } from '@angular/material/select';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatSortModule } from '@angular/material/sort';

// External modules
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireModule } from '@angular/fire/compat';

// Internal modules
import { DirectivesModule } from './directives/directives.module';
import { AppRoutingModule } from './app-routing.module';
import { PipesModule } from './pipes/pipes.module';

// Components
import { CryptoDetailsComponent } from './components/crypto-details/crypto-details.component';
import { CoinDataListComponent } from './components/coin-data-list/coin-data-list.component';
import { CryptoComponent } from './components/crypto/crypto.component';
import { WalletComponent } from './components/wallet/wallet.component';
import { ListComponent } from './components/list/list.component';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

const firebaseConfig = {
  apiKey: "AIzaSyCjNMShCKpV1-EL5p73TYmAVm_lrnQjHVs",
  authDomain: "crypto-statistic-b10a6.firebaseapp.com",
  projectId: "crypto-statistic-b10a6",
  storageBucket: "crypto-statistic-b10a6.appspot.com",
  messagingSenderId: "855441284167",
  appId: "1:855441284167:web:bcfcb6c9e96345eefea562",
  measurementId: "G-F3721CT0L2"
};

@NgModule({
  declarations: [
    CryptoDetailsComponent,
    CoinDataListComponent,
    CryptoComponent,
    WalletComponent,
    ListComponent,
    AppComponent,
    DashboardComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserModule,
    FormsModule,

    // Angular material
    MatFormFieldModule,
    MatCheckboxModule,
    MatSelectModule,
    MatButtonModule,
    MatDialogModule,
    MatTableModule,
    MatInputModule,
    MatSortModule,

    // Internal modules
    DirectivesModule,
    AppRoutingModule,
    PipesModule,

    // provideFirebaseApp(() => initializeApp(firebaseConfig)),
    // provideFirestore(() => getFirestore()),
    // External modules
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
