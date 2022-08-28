import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { BehaviorSubject, Observable, of, tap } from 'rxjs';

import { CryptoHistoryInterface } from './interfaces/crypto-history.interface';
import { calculateAveragePrice } from './utilities/average-price.utility';
import { CoinInterface } from './interfaces/coin.interface';

import { Api } from './api/api';
import { ColumnInterface } from './interfaces/column.interface';
import { InvestStatisticInterface } from './interfaces/invest-statistic.interface';
import { WalletInterface } from './interfaces/wallet.interface';
import { WALLET_LIST } from './states/wallet.state';
import { COLUMN_LIST } from './states/column.state';
import { STATE } from './states/invest-statistic.state';
import { COIN_LIST } from './states/coins.state';
import { CoinHistoryActionEnum } from './enums/coin-history-action.enum';
import { CoinDataService } from './services/coin-data.service';
import { CoinDataInterface } from './interfaces/coin-data.interface';

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
    private coinDataService: CoinDataService,
    private http: HttpClient,
    private api: Api) {
    this.investStatistic$ = this.investStatisticSubject.asObservable();
    this.coinList$ = this.coinListSubject.asObservable();
  }

  getTokenByAddress(address: string): CoinInterface {
    return this.coinListState.find((coin: CoinInterface) => coin?.token_address === address)!;
  }

  getCoinListByWalletAddress(address: string): CoinInterface[] {
    return this.coinListState.filter((coin: CoinInterface) => {
      // if (!coin.hasOwnProperty('history')) {
      //   const wallet = coin?.wallets?.find((wallet: WalletInterface) => wallet.address === address);

      //   return wallet?.quantity;
      // }

      return coin?.wallets?.some((wallet: WalletInterface) => wallet.address === address);
    });
  }

  getColumnListList(): ColumnInterface[] {
    return COLUMN_LIST;
  }

  getTransactionList(): Observable<any> {
    return this.api.getTransactionList();
  }

  getCoinList(): Observable<CoinInterface[]> {
    // return (this.dbService.getAll('coinList') as Observable<CoinInterface[]>).pipe(
    return (of(COIN_LIST) as Observable<CoinInterface[]>).pipe(
      tap((coinList: CoinInterface[]) => {
        coinList.map((coin: CoinInterface) => {
          const coinData = this.coinDataService.getCoinDataBySymbol(coin);

          this.setCoinInvestedAmountProperty(coin);
          this.setCoinAveragePriceProperty(coin);
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
    if (coin.hasOwnProperty('history')) {
      coin.totalInCurrency = coin.quantity * coinData?.price;
    }

    if (!coin.hasOwnProperty('history')) {
      coin?.wallets?.map((wallet: WalletInterface) => {
        wallet.totalInCurrency = wallet.quantity! * coinData?.price;
      });
    }
  }

  private setCoinCurrencyResultProperty(coin: CoinInterface): void {
    if (coin.hasOwnProperty('history')) {
      coin.currencyResult = coin.totalInCurrency - coin.investedAmount;
    }

    if (!coin.hasOwnProperty('history')) {
      coin?.wallets?.map((wallet: WalletInterface) => {
        wallet.currencyResult = wallet.totalInCurrency! - wallet.investedAmount!;
      });
    }
  }

  private setCoinInvestedAmountProperty(coin: CoinInterface): void {
    if (coin.hasOwnProperty('history')) {
      coin.investedAmount = this.calculateInvestedAmount(coin?.history);
    }

    if (!coin.hasOwnProperty('history')) {
      coin?.wallets?.map((wallet: WalletInterface) => {
        wallet.investedAmount = this.calculateInvestedAmount(wallet?.transactions);
      });
    }
  }

  private calculateInvestedAmount(transactions: CryptoHistoryInterface[] = []): number {
    return transactions.reduce((acc: number, curr: CryptoHistoryInterface) => {
      if (curr.action === CoinHistoryActionEnum.RECEIVE) {
        return acc + curr.amount! * curr.averagePrice!;
      }

      if (curr.action === CoinHistoryActionEnum.SPEND) {
        return acc - (curr.fee! * curr.averagePrice!) - (curr.amount! * curr.averagePrice!);
      }

      if (curr.action === CoinHistoryActionEnum.TRANSFER) {
        return acc - ((curr.fee! || 0) * curr.averagePrice!) - (curr.amount! * curr.averagePrice!);
      }

      if (curr.action === CoinHistoryActionEnum.SELL) {
        return acc - curr.filled! * curr.averagePrice!;
      }

      if (curr.action === CoinHistoryActionEnum.BUY) {
        return acc + curr.total;
      }

      return acc;
    }, 0);
  }

  private setCoinPercentResultProperty(coin: CoinInterface, coinData: CoinDataInterface): void {
    if (coin.hasOwnProperty('history')) {
      const priceDifference = (coinData?.price - coin.averagePrice);
      const percentageResult = (priceDifference / (coin.averagePrice / 100));

      coin.percentageResult = coin.history?.length ? percentageResult : 0;
    }

    if (!coin.hasOwnProperty('history')) {
      coin?.wallets?.map((wallet: WalletInterface) => {
        const priceDifference = (coinData?.price - coin.averagePrice);
        const percentageResult = (priceDifference / (coin.averagePrice / 100));

        wallet.percentageResult = wallet.transactions?.length ? percentageResult : 0;
      });
    }
  }

  private setCoinAveragePriceProperty(coin: CoinInterface): void {
    if (coin.hasOwnProperty('history')) {
      coin.averagePrice = calculateAveragePrice(coin.history);
    }

    if (!coin.hasOwnProperty('history')) {
      let transactions: any[] = [];

      coin?.wallets?.map((wallet: WalletInterface) => {
        if (wallet.hasOwnProperty('transactions')) {
          transactions = [...transactions, ...wallet.transactions!];
        }
      });

      coin.averagePrice = calculateAveragePrice(transactions);
    }
  }

  private setCoinQuantityProperty(coin: CoinInterface): void {
    if (coin.hasOwnProperty('history')) {
      coin.quantity = coin.history?.reduce((acc: number, curr: CryptoHistoryInterface) => {
        if (curr.action === CoinHistoryActionEnum.TRANSFER) {
          return acc - curr.fee!;
        }

        if (curr.action === CoinHistoryActionEnum.SPEND) {
          return acc - curr.amount! - curr.fee!;
        }

        if (curr.action === CoinHistoryActionEnum.BUY) {
          return acc + curr.total / curr.price;
        }

        if (curr.action === CoinHistoryActionEnum.SELL) {
          return acc - curr.filled!;
        }

        return acc;
      }, 0);
    }

    if (!coin.hasOwnProperty('history')) {
      coin?.wallets?.map((wallet: WalletInterface) => {
        wallet.quantity = wallet?.transactions?.reduce((acc: number, curr: CryptoHistoryInterface) => {
          if (curr.action === CoinHistoryActionEnum.TRANSFER) {
            return acc - curr.amount! - (curr.fee! || 0);
          }

          if (curr.action === CoinHistoryActionEnum.RECEIVE) {
            return acc + curr.amount!;
          }

          if (curr.action === CoinHistoryActionEnum.SPEND) {
            return acc - curr.amount! - curr.fee!;
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
    }
  }

  private setCoinPriceProperty(coin: CoinInterface, coinData: CoinDataInterface): void {
    coin.price = coinData?.price;
  }

  private setCoinRankProperty(coin: CoinInterface, coinData: CoinDataInterface): void {
    coin.rank = coinData?.cmc_rank;
  }

  private setCoinListState(coinList: CoinInterface[]): void {
    this.coinListState = coinList;
    this.coinListSubject.next(this.coinListState);
  }

  private setInvestStatisticState(coinList: CoinInterface[]): void {
    coinList.map((coin: CoinInterface) => {
      // this.investStatisticState.totalSpendCurrency += coin.investedAmount;
      this.investStatisticState.totalSpendCurrency = 7253.63;

      if (coin.hasOwnProperty('history')) {
        this.investStatisticState.totalInCurrency += coin.totalInCurrency || 0;
      }

      if (!coin.hasOwnProperty('history')) {
        coin?.wallets?.map((wallet: WalletInterface) => {
          this.investStatisticState.totalInCurrency += wallet.totalInCurrency! || 0;
        });
      }
    });

    this.investStatisticState.currencyDifference =
      this.investStatisticState.totalSpendCurrency - this.investStatisticState.totalInCurrency;

    this.investStatisticState.percentageDifference =
      Number.parseFloat((this.investStatisticState.currencyDifference / 100).toFixed(1));

    this.investStatisticSubject.next(this.investStatisticState);
  }

  private sortCoinListByRank(coinList: CoinInterface[]): void {
    coinList.sort((a: CoinInterface, b: CoinInterface) => {
      if (a.rank < b.rank) return -1;
      if (a.rank > b.rank) return 1;
      return 0;
    });
  }
}