import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { CoinSettingsInterface } from '../interfaces/coin-settings.interface';
import { ResponseInterface } from '../interfaces/coin-settings.interface';
import { CoinDataInterface } from '../interfaces/coin-data.interface';
import { CoinInterface } from '../interfaces/coin.interface';

import { BehaviorSubject, concatMap, map } from 'rxjs';
import { Observable, of, tap, toArray } from 'rxjs';

import * as CRYPTO from "./../../assets/crypto.json";

let LIMIT = 5000;
let START = 1;

@Injectable({
  providedIn: 'root'
})
export class CoinDataService {

  coinData$!: Observable<CoinDataInterface[]>;
  stream$!: Observable<boolean>;

  private coinDataState: CoinDataInterface[] = [];
  private coinDataSubject = new BehaviorSubject<CoinDataInterface[]>(this.coinDataState);

  private streamState: boolean = true;
  private streamSubject = new BehaviorSubject<boolean>(this.streamState);

  constructor(private http: HttpClient) {
    this.coinData$ = this.coinDataSubject.asObservable();
    this.stream$ = this.streamSubject.asObservable();
  }

  synchronizeCoinData(): Observable<any[]> {
    this.coinDataState = [];

    return this.stream$.pipe(
      concatMap(() => this.getCoinSettings()),
      tap((response: ResponseInterface) => {
        this.setCoinDataState(response.data);
        this.emitStreamSubject(response);
      }),
      toArray(),
      tap(() => this.coinDataSubject.next(this.coinDataState))
    );
  }

  getCoinData(): Observable<CoinDataInterface[]> {
    return of(CRYPTO).pipe(
      tap((response: any) => {
        this.coinDataState = response.default;
        this.coinDataSubject.next(this.coinDataState);
      })
    );
  }

  getCoinDataBySymbol(coin: CoinInterface): CoinDataInterface {
    return this.coinDataState.find((coinData: CoinDataInterface) => {
      return coin?.token_address
        ? coinData?.token_address?.toLowerCase() === coin.token_address.toLowerCase()
        : coinData?.symbol?.toLowerCase() === coin?.symbol?.toLowerCase();
    })!;
  }

  private emitStreamSubject(response: ResponseInterface): void {
    if (response.data.length === LIMIT) {
      this.streamSubject.next(true);
      START += LIMIT;
    }

    if (response.data.length !== LIMIT) {
      this.streamSubject.complete();
    }
  }

  private getCoinSettings(): Observable<any> {
    const params = new HttpParams()
      .append('start', START)
      .append('limit', LIMIT);

    return this.http.get<ResponseInterface>('/api.coinmarketcap.com', { params });
  }

  private setCoinDataState(data: CoinSettingsInterface[]): void {
    const coinDataList: CoinDataInterface[] = data.map((coinData: CoinSettingsInterface) => ({
      percent_change_90d: coinData.quote.USD.percent_change_90d,
      token_address: coinData.platform?.token_address,
      price: coinData.quote.USD.price,
      cmc_rank: coinData.cmc_rank,
      symbol: coinData.symbol,
      name: coinData.name
    }));

    this.coinDataState = [...this.coinDataState, ...coinDataList];
  }
}
