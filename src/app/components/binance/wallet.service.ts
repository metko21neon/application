import { Injectable } from '@angular/core';

import { BehaviorSubject, concatMap, filter } from 'rxjs';
import { map, Observable, of, tap, toArray } from 'rxjs';

import { InvestStatisticInterface } from 'src/app/interfaces/invest-statistic.interface';
import { CoinDataService } from 'src/app/services/coin-data.service';
import { STATE } from 'src/app/states/invest-statistic.state';

import { BinanceCoinFlexiblePositionInterface } from './interfaces/binance-coin-flexible-position.interface';
import { BinanceCoinFlexibleInterface } from './interfaces/binance-coin-flexible.interface';
import { BinanceCoinDetailsInterface } from './interfaces/binance-coin-details.interface';
import { BinanceCoinInterface } from './interfaces/binance-coin.interface';
// import { BINANCE_COIN_LIST } from '../../states/binance-coin-list.state';
import { FirebaseService } from '../../services/firebase.service';
import { Api } from '../../api/api';

@Injectable()
export class WalletService {

  investStatistic$!: Observable<InvestStatisticInterface>;
  coinList$!: Observable<BinanceCoinInterface[]>;
  fiatList$!: Observable<BinanceCoinInterface[]>;

  private investStatisticState: InvestStatisticInterface = JSON.parse(JSON.stringify(STATE));
  private investStatisticSubject: BehaviorSubject<InvestStatisticInterface> = new BehaviorSubject(this.investStatisticState);

  private coinListState: BinanceCoinInterface[] = [];
  private coinListSubject: BehaviorSubject<BinanceCoinInterface[]> = new BehaviorSubject(this.coinListState);

  private fiatListState: BinanceCoinInterface[] = [];
  private fiatListSubject: BehaviorSubject<BinanceCoinInterface[]> = new BehaviorSubject(this.fiatListState);

  private flexiblePositionListState: any[] = [];

  constructor(
    private coinDataService: CoinDataService,
    // private firebaseService: FirebaseService,
    private api: Api) {
    this.investStatistic$ = this.investStatisticSubject.asObservable();
    this.coinList$ = this.coinListSubject.asObservable();
    this.fiatList$ = this.fiatListSubject.asObservable();
  }

  // getCoinList(): Observable<BinanceCoinInterface[]> {
  //   return of(BINANCE_COIN_LIST).pipe(
  //     // return this.firebaseService.getCoinList().pipe(
  //     tap((coinList: BinanceCoinInterface[]) => {
  //       this.setCoinListMetadata(coinList);
  //       this.setCoinListState(coinList);
  //       this.setInvestStatisticState();
  //     })
  //   );
  // }

  private setCoinListMetadata(coinList: BinanceCoinInterface[]): void {
    coinList
      .filter((item: BinanceCoinInterface) => !!item.amount && !item.isLegalMoney)
      .map((coin: BinanceCoinInterface) => {
        const symbol = coin.symbol === 'IOTA' ? 'MIOTA' : coin.symbol;
        const coinData = this.coinDataService.getCoinDataBySymbol({ symbol } as any);

        coin.price = coinData?.price;
        this.setCoinFullAmount(coin);
        this.setCoinTotal(coin);
      });
  }

  synchronizeCoinList(): Observable<BinanceCoinDetailsInterface[]> {
    return this.api.synchronizeCoinList().pipe(
      tap((coinList: BinanceCoinDetailsInterface[]) => {
        coinList
          .filter((item: BinanceCoinDetailsInterface) => !!+item.free)
          .map((item: BinanceCoinDetailsInterface) => {
            if (item.isLegalMoney) {
            }

            if (!item.isLegalMoney) {
              // this.coinListState = this.prepareBinanceCoinList(coinList);
              // this.setCoinFullAmount(coin);
              // this.setCoinTotal(coin);
            }
          });

        this.coinListSubject.next(this.coinListState);

        this.setInvestStatisticState();
      })
    );
  }

  private setCoinFullAmount(coin: BinanceCoinInterface): void {
    coin.fullAmount = coin.amount + (coin.flexibleAmount! || 0);
  }

  private setCoinTotal(coin: BinanceCoinInterface): void {
    coin.total = (coin.amount + (coin.flexibleAmount! || 0)) * coin.price!;
  }

  synchronizeFlexibleList(): Observable<any> {
    this.flexiblePositionListState = [];

    return this.api.getFlexibleList().pipe(
      concatMap((data: BinanceCoinFlexibleInterface[]) => data),
      concatMap((coin: BinanceCoinFlexibleInterface) => this.getFlexiblePosition(coin.asset)),
      filter((coin: BinanceCoinFlexiblePositionInterface) => !!+coin?.totalAmount),
      tap((coin: BinanceCoinFlexiblePositionInterface) => this.setFlexibleAmountByCoin(coin)),
      toArray(),
      tap(() => this.coinListSubject.next(this.coinListState))
    );
  }

  private findFlexibleCoinIndex(coin: BinanceCoinFlexiblePositionInterface): number {
    return this.coinListState.findIndex((data: BinanceCoinInterface) => data.symbol === coin.asset);
  }

  private getFlexiblePosition(symbol: string): Observable<BinanceCoinFlexiblePositionInterface> {
    return this.api.getFlexiblePosition(symbol).pipe(
      map((item: BinanceCoinFlexiblePositionInterface[]) => item[0])
    );
  }

  private prepareBinanceCoinList(coinList: BinanceCoinDetailsInterface[]): BinanceCoinInterface[] {
    return coinList
      .filter((item: BinanceCoinDetailsInterface) => !!+item.free && !item.isLegalMoney)
      .map((item: BinanceCoinDetailsInterface) => {
        const symbol = item.coin === 'IOTA' ? 'MIOTA' : item.coin;
        const coinData = this.coinDataService.getCoinDataBySymbol({ symbol } as any);

        return {
          isLegalMoney: item.isLegalMoney,
          price: coinData?.price,
          amount: +item.free,
          symbol: item.coin,
        };
      });
  }

  private setFlexibleAmount(coin: BinanceCoinFlexiblePositionInterface): number {
    return this.coinListState.findIndex((data: BinanceCoinInterface) => {
      if (data.symbol === coin.asset) { data.flexibleAmount = +coin?.totalAmount; }
    });
  }

  private setFlexibleAmountByCoin(coin: BinanceCoinFlexiblePositionInterface): void {
    const symbol = coin.asset === 'IOTA' ? 'MIOTA' : coin.asset;
    const coinData = this.coinDataService.getCoinDataBySymbol({ symbol } as any);
    const index = this.findFlexibleCoinIndex(coin);

    this.flexiblePositionListState.push(coin);
    this.setFlexibleAmount(coin);

    if (index === -1) {
      this.coinListState.push({
        flexibleAmount: +coin?.totalAmount,
        price: coinData?.price,
        isLegalMoney: false,
        symbol: coin.asset,
        amount: 0
      });
    }
  }

  private setInvestStatisticState(): void {
    this.investStatisticState = JSON.parse(JSON.stringify(STATE));

    this.coinListState.map((coin: BinanceCoinInterface) => {
      this.investStatisticState.totalInCurrency += coin.total!;
    });

    this.investStatisticSubject.next(this.investStatisticState);
  }

  private setCoinListState(coinList: BinanceCoinInterface[]): void {
    this.coinListState = coinList.sort((a: any, b: any) => b.total - a.total);
    console.log('coinListState:', this.coinListState);
    this.coinListSubject.next(this.coinListState);
  }
}
