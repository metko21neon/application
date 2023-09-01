import { Injectable } from '@angular/core';

import { FirebaseApp, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { Observable } from 'rxjs';
import { Firestore } from '@angular/fire/firestore';
import { WithdrawalInterface } from '../modules/cryptocurrency/pages/cash-transactions/interfaces/withdrawal.interface';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { DepositInterface } from '../modules/cryptocurrency/pages/cash-transactions/interfaces/deposit.interface';
import { BinanceCoinInterface } from '../components/binance/interfaces/binance-coin.interface';

const CONFIG = {
  apiKey: "AIzaSyCjNMShCKpV1-EL5p73TYmAVm_lrnQjHVs",
  authDomain: "crypto-statistic-b10a6.firebaseapp.com",
  projectId: "crypto-statistic-b10a6",
  storageBucket: "crypto-statistic-b10a6.appspot.com",
  messagingSenderId: "855441284167",
  appId: "1:855441284167:web:bcfcb6c9e96345eefea562",
  measurementId: "G-F3721CT0L2"
};

const WITHDRAWAL_HISTORY = "withdrawal-history";
const DEPOSIT_HISTORY = "deposit-history";
const BINANCE_SPOT = "binance-spot";

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  firebaseApp: FirebaseApp = initializeApp(CONFIG);
  store: Firestore = getFirestore(this.firebaseApp);

  constructor(private firestore: AngularFirestore) { }

  // Binance
  addBinanceCoin(coin: BinanceCoinInterface): void {
    this.firestore.collection(BINANCE_SPOT).add(coin);
  }

  getBinanceCoin(id: string): any {
    return this.firestore.doc(BINANCE_SPOT + `/${id}`);
  }

  getCoinList(): Observable<BinanceCoinInterface[]> {
    return this.firestore.collection(BINANCE_SPOT).valueChanges() as Observable<BinanceCoinInterface[]>;
  }
  //

  addDepositToHistory(deposit: DepositInterface): void {
    this.firestore.collection(DEPOSIT_HISTORY).add(deposit);
  }

  addWithdrawalToHistory(withdrawal: WithdrawalInterface): void {
    this.firestore.collection(WITHDRAWAL_HISTORY).add(withdrawal);
  }

  getDepositHistory(): Observable<DepositInterface[]> {
    return this.firestore.collection(DEPOSIT_HISTORY).valueChanges() as Observable<DepositInterface[]>;
  }

  getWithdrawalHistory(): Observable<WithdrawalInterface[]> {
    return this.firestore.collection(WITHDRAWAL_HISTORY).valueChanges() as Observable<WithdrawalInterface[]>;
  }

  // updateWithdrawalHistory(withdrawal: WithdrawalInterface, id: string): void {
  //   this.firestore.collection('withdrawal-history').doc(id).update(withdrawal);
  // }
}
