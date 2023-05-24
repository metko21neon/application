import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { BehaviorSubject, Observable, of, tap } from 'rxjs';

import { CashTransactionsService } from './components/cash-transactions/cash-transactions.service';
import { InvestStatisticInterface } from './interfaces/invest-statistic.interface';
import { CryptoHistoryInterface } from './interfaces/crypto-history.interface';
import { calculateAveragePrice } from './utilities/average-price.utility';
import { CoinHistoryActionEnum } from './enums/coin-history-action.enum';
import { CoinDataInterface } from './interfaces/coin-data.interface';
import { WalletInterface } from './interfaces/wallet.interface';
import { ColumnInterface } from './interfaces/column.interface';
import { CoinDataService } from './services/coin-data.service';
import { CoinInterface } from './interfaces/coin.interface';
import { STATE } from './states/invest-statistic.state';
import { WALLET_LIST } from './states/wallet.state';
import { COLUMN_LIST } from './states/column.state';
import { COIN_LIST } from './states/coins.state';
import { Api } from './api/api';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  investStatistic$: Observable<InvestStatisticInterface>;
  coinList$: Observable<CoinInterface[]>;

  private investStatisticState: InvestStatisticInterface = JSON.parse(JSON.stringify(STATE));
  private investStatisticSubject = new BehaviorSubject<InvestStatisticInterface>(this.investStatisticState);

  private coinListState: CoinInterface[] = [];
  private coinListSubject = new BehaviorSubject<CoinInterface[]>(this.coinListState);

  constructor(
    private cashTransactionsService: CashTransactionsService,
    private coinDataService: CoinDataService,
    private http: HttpClient,
    private api: Api) {
    this.investStatistic$ = this.investStatisticSubject.asObservable();
    this.coinList$ = this.coinListSubject.asObservable();
  }

  getTokenByAddress(address: string): CoinInterface {
    return this.coinListState.find((coin: CoinInterface) => coin?.token_address === address)!;
  }

  getTokenBySymbol(symbol: string): CoinInterface {
    return this.coinListState.find((coin: CoinInterface) => coin?.symbol === symbol)!;
  }

  getCoinListByWalletAddress(address: string): CoinInterface[] {
    return this.coinListState.filter((coin: CoinInterface) => {
      return coin?.wallets?.some((wallet: WalletInterface) => wallet.address === address);
    });
  }

  getColumnListList(): ColumnInterface[] {
    return COLUMN_LIST;
  }

  getTransactionList(): Observable<any> {
    return this.api.getTransactionList();
  }

  getCoinList(coins = COIN_LIST): Observable<CoinInterface[]> {
    // return (this.dbService.getAll('coinList') as Observable<CoinInterface[]>).pipe(
    return (of(coins) as Observable<any[]>).pipe(
      tap((coinList: CoinInterface[]) => {
        coinList.map((coin: CoinInterface) => {
          const coinData = this.coinDataService.getCoinDataBySymbol(coin);

          // Calculate average prices first
          this.setCoinAveragePriceProperty(coin);

          this.setCoinInvestedAmountProperty(coin);
          this.setCoinQuantityProperty(coin);
          this.setCoinTotalInCurrencyProperty(coin, coinData);
          this.setCoinCurrencyResultProperty(coin);
          this.setCoinPercentResultProperty(coin, coinData);
          this.setCoinPriceProperty(coin, coinData);
          this.setCoinRankProperty(coin, coinData);
        });

        this.setInvestStatisticState(coinList);
        this.sortCoinListByRank(coinList);

        this.setCoinListState(coinList);
      })
    );
  }

  getWalletList(): Observable<WalletInterface[]> {
    return of(WALLET_LIST);
  }

  private setCoinTotalInCurrencyProperty(coin: CoinInterface, coinData: CoinDataInterface): void {
    coin?.wallets?.map((wallet: WalletInterface) => {
      wallet.totalInCurrency = wallet.quantity! * coinData?.price;
    });

    coin.totalInCurrency = coin?.wallets?.reduce((quantity: number, wallet: WalletInterface) => quantity += wallet.totalInCurrency!, 0);
  }

  private setCoinCurrencyResultProperty(coin: CoinInterface): void {
    coin?.wallets?.map((wallet: WalletInterface) => {
      wallet.currencyResult = wallet.totalInCurrency! - wallet.investedAmount!;
    });
  }

  private setCoinInvestedAmountProperty(coin: CoinInterface): void {
    coin?.wallets?.map((wallet: WalletInterface) => {
      wallet.investedAmount = this.calculateInvestedAmount(wallet?.transactions, coin);
    });

    coin.investedAmount = coin?.wallets?.reduce((quantity: number, wallet: WalletInterface) => quantity += wallet.investedAmount! || 0, 0);
  }

  private calculateInvestedAmount(transactions: CryptoHistoryInterface[] = [], coin: CoinInterface): number {
    return transactions.reduce((acc: number, curr: CryptoHistoryInterface) => {
      if (curr.action === CoinHistoryActionEnum.RECEIVE) {
        return acc;
        // return acc + curr.amount! * curr.averagePrice!;
      }

      if (curr.action === CoinHistoryActionEnum.SPEND) {
        return acc - (curr.fee! * curr.averagePrice!) - (curr.amount! * curr.averagePrice!);
      }

      if (curr.action === CoinHistoryActionEnum.TRANSFER) {
        return acc;
        // return acc - ((curr.fee! || 0) * curr.averagePrice!) - (curr.amount! * curr.averagePrice!);
      }

      if (curr.action === CoinHistoryActionEnum.SELL) {
        return acc - curr.filled! * curr.price!;
      }

      if (curr.action === CoinHistoryActionEnum.BUY) {
        return acc + curr.total;
      }

      return acc;
    }, 0);
  }

  private setCoinPercentResultProperty(coin: CoinInterface, coinData: CoinDataInterface): void {
    // totalInCurrency
    // investedAmount
    // const priceDifference = coinData?.price - (coin.averagePrice ?? coinData?.price);
    const percentageResult = (coin.totalInCurrency / coin.investedAmount - 1) * 100;

    coin.percentageResult = coin.averagePrice !== 0 ? percentageResult : 0;
  }

  getTime(fullDate: string): number {
    if (fullDate?.includes('-')) {
      const [date, time] = fullDate.split(' ');
      const [year, month, day] = date.split('-');
      const [hour, minute, second] = time.split(':');

      const newDate = new Date(+year, +month - 1, +day, +hour || 0, +minute || 0, +second || 0);

      return newDate.getTime();
    }

    if (fullDate?.includes('.')) {
      const [date, time] = fullDate.split(' ');
      const [day, month, year] = date.split('.');
      const [hour, minute, second] = time.split(':');

      const newDate = new Date(+year, +month - 1, +day, +hour || 0, +minute || 0, +second || 0);

      return newDate.getTime();
    }

    return new Date(fullDate).getTime();
  }

  private setCoinAveragePriceProperty(coin: CoinInterface): void {
    let transactions: any[] = [];

    coin?.wallets?.map((wallet: WalletInterface) => {
      if (wallet.hasOwnProperty('transactions')) {
        transactions = [...transactions, ...wallet.transactions!];
      }
    });

    transactions.sort((a: any, b: any) => {
      const aDate = this.getTime(a.date);
      const bDate = this.getTime(b.date);

      if (aDate < bDate) return -1;
      if (aDate > bDate) return 1;

      return 0;
    });

    // if (coin.symbol === 'BTC') {
    //   console.log('transactions:', transactions);
    // }
    transactions!.map((transaction: CryptoHistoryInterface, index: number) => {
      transaction.averagePrice = calculateAveragePrice(transactions!.slice(0, index + 1));
    });

    coin.averagePrice = calculateAveragePrice(transactions, coin);
  }

  private setCoinQuantityProperty(coin: CoinInterface): void {
    coin?.wallets?.map((wallet: WalletInterface) => {
      wallet.quantity = wallet?.transactions?.reduce((acc: number, curr: CryptoHistoryInterface) => {
        if (curr.action === CoinHistoryActionEnum.TRANSFER) {
          return acc - curr.amount! - (curr.fee! || 0);
        }

        if (curr.action === CoinHistoryActionEnum.RECEIVE) {
          return acc + curr.amount!;
        }

        if (curr.action === CoinHistoryActionEnum.SPEND) {
          return acc - curr.amount! - (curr.fee! || 0);
        }

        if (curr.action === CoinHistoryActionEnum.BUY) {
          return acc + curr.total / curr.price;
        }

        if (curr.action === CoinHistoryActionEnum.SELL) {
          return acc - curr.filled!;
        }

        return acc;
      }, 0);
    });

    coin.quantity = coin?.wallets?.reduce((quantity: number, wallet: WalletInterface) => quantity += wallet.quantity!, 0);
  }

  private setCoinPriceProperty(coin: CoinInterface, coinData: CoinDataInterface): void {
    coin.price = coinData?.price || null;
  }

  private setCoinRankProperty(coin: CoinInterface, coinData: CoinDataInterface): void {
    coin.rank = coinData?.cmc_rank || null;
  }

  private setCoinListState(coinList: CoinInterface[]): void {
    this.coinListState = coinList;
    this.coinListSubject.next(this.coinListState);
  }

  get cashStatistic(): any {
    return this.cashTransactionsService.cashStatistic;
  }

  private setInvestStatisticState(coinList: CoinInterface[]): void {
    this.investStatisticState = JSON.parse(JSON.stringify(STATE));

    coinList.map((coin: CoinInterface) => {
      coin.wallets.map((wallet: WalletInterface) => {
        this.investStatisticState.totalInCurrency += wallet.totalInCurrency! || 0;
      });
    });

    this.investStatisticState.totalSpendCurrency =
      this.cashStatistic.depositUSDTotal - this.cashStatistic.withdrawalUSDTotal;

    this.investStatisticState.currencyDifference =
      this.investStatisticState.totalInCurrency - this.investStatisticState.totalSpendCurrency;

    this.investStatisticState.percentageDifference =
      this.investStatisticState.totalInCurrency / this.investStatisticState.totalSpendCurrency * 100 - 100;

    this.investStatisticSubject.next(this.investStatisticState);
  }

  private sortCoinListByRank(coinList: CoinInterface[]): void {
    coinList.sort((a: CoinInterface, b: CoinInterface) => {
      if (a.rank === null) return 1;
      if (b.rank === null) return -1;

      if (a.rank! < b.rank!) return -1;
      if (a.rank! > b.rank!) return 1;

      return 0;
    });
  }
}