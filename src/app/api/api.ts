import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { BinanceCoinFlexiblePositionInterface } from '../components/binance/interfaces/binance-coin-flexible-position.interface';

import { TimeRangeInterface } from '../interfaces/time-range.interface';

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

  getDepositByRange(time: TimeRangeInterface): Observable<any> {
    const params = new HttpParams()
      .append('beginTime', time.beginTime)
      .append('endTime', time.endTime);

    return this.http.get<any>('/api.statistic.im/deposit-history', { params });
  }

  getWithdrawalByRange(time: TimeRangeInterface): Observable<any> {
    const params = new HttpParams()
      .append('beginTime', time.beginTime)
      .append('endTime', time.endTime);

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
