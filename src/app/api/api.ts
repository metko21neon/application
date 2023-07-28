import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { BinanceCoinFlexiblePositionInterface } from '../components/binance/interfaces/binance-coin-flexible-position.interface';
import { BinanceWithdrawalInterface } from '../components/binance/interfaces/binance-withdrawal.interface';

import * as WITHDRRAWALS from "./../jsons/withdrawals.json";

@Injectable({
  providedIn: 'root'
})
export class Api {

  constructor(private http: HttpClient) { }

  getFlexiblePosition(symbol: string): Observable<BinanceCoinFlexiblePositionInterface[]> {
    const params = new HttpParams().append('symbol', symbol);

    return this.http.get<any>('/api.statistic.im/binance/flexible-position', { params });
  }

  getFlexibleList(): Observable<any> {
    return this.http.get<any>('/api.statistic.im/binance/flexible-list');
  }

  getBinanceWallet(): Observable<any> {
    return this.http.get<any>('/api.statistic.im/wallet');
  }

  synchronizeCoinList(): Observable<any> {
    return this.http.get<any>('/api.statistic.im/wallet');
  }

  getOrdersHistoryBySymbol(symbol: string, options: any): Observable<any> {
    const params = new HttpParams().appendAll({ symbol, ...options });

    return this.http.get<any>('/api.statistic.im/orders-history', { params });
  }

  getDepositsHistory(options: any = { status: 1 }): Observable<any> {
    const params = new HttpParams().appendAll(options);

    return this.http.get<any>('/api.statistic.im/deposits-history', { params });
  }

  getWithdrawalsHistory(options: any): Observable<BinanceWithdrawalInterface[]> {
    const params = new HttpParams().appendAll(options);

    return this.http.get<any>('/api.statistic.im/withdrawals-history', { params });
  }

  getTransactionList(): Observable<any> {
    const url = `https://api.bscscan.com/api`;

    const params = new HttpParams().appendAll({
      module: 'token',
      action: 'tokeninfo',
      contractaddress: '0xDc56ed4117C7d1350e9c7164220f6342F85BEA95',
      apikey: 'FHBYKH5JENZRWH2SMIW91Q6Q83AZ6KP1KZ'
    });

    return this.http.get<any>(url, { params });
  }
}
