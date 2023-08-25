import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { BinanceWithdrawalInterface } from '../interfaces/binance-withdrawal.interface';
import { BinanceDepositInterface } from '../interfaces/binance-deposit.interface';

import * as BINANCE_WITHDRRAWALS from "../jsons/binance-withdrawals.json";
import * as BINANCE_DEPOSITS from "./../jsons/binance-deposits.json";

@Injectable({
  providedIn: 'root'
})
export class BinanceApi {

  constructor(private http: HttpClient) { }

  getDepositsHistory(options: any = { status: 1 }): Observable<BinanceDepositInterface[]> {
    const params = new HttpParams().appendAll(options);

    // return this.http.get<any>('/api.statistic.im/deposits-history', { params });
    return of((BINANCE_DEPOSITS as any).default);
  }

  getWithdrawalsHistory(options: any): Observable<BinanceWithdrawalInterface[]> {
    const params = new HttpParams().appendAll(options);

    // return this.http.get<any>('/api.statistic.im/withdrawals-history', { params });
    return of((BINANCE_WITHDRRAWALS as any).default);
  }

  getOrdersHistoryBySymbol(symbol: string, options: any): Observable<any> {
    const params = new HttpParams().appendAll({ symbol, ...options });

    return this.http.get<any>('/api.statistic.im/orders-history', { params });
  }
}
