import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { BinanceCoinFlexiblePositionInterface } from '../components/binance/interfaces/binance-coin-flexible-position.interface';

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
}
