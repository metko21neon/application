import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { BehaviorSubject, map, Observable, of, tap } from 'rxjs';

import { NgxIndexedDBService } from 'ngx-indexed-db';

import * as CRYPTO from "./../assets/crypto.json";
import { CoinInterface } from './components/crypto/crypto.component';
import { CryptoHistoryInterface } from './interfaces/crypto-history.interface';

export enum CoinHistoryActionEnum {
  TRANSFER = 'transfer',
  SPEND = 'spend',
  SELL = 'sell',
  BUY = 'buy'
}

const COIN_LIST = [
  {
    id: 1,
    name: 'Polkadot',
    symbol: 'DOT',
    history: [
      {
        action: 'buy',
        price: 15.171,
        total: 76.214
      },
    ]
  },
  {
    name: 'XRP',
    symbol: 'XRP',
    history: [
      {
        action: 'buy',
        price: 1.25,
        total: 501.5
      },
      {
        action: 'buy',
        price: 0.6382,
        total: 99.776
      }
    ]
  },
  {
    name: 'Chainlink',
    symbol: 'LINK',
    history: [
      {
        action: 'buy',
        price: 37,
        total: 372.59,
      },
      {
        action: 'buy',
        price: 17.389,
        total: 90.353,
      }
    ]
  },
  {
    name: 'Ethereum',
    symbol: 'ETH',
    history: [
      {
        action: 'buy',
        price: 3955,
        total: 511.777,
      },
      {
        action: 'buy',
        price: 1888.94,
        total: 99.453,
      },
      {
        action: 'buy',
        price: 2034.89,
        total: 99.954,
      },
      {
        action: 'transfer',
        wallet: 'Metamask',
        amount: 0.09775855,
        fee: 0.005,
      },
      {
        action: 'spend',
        wallet: 'Metamask',
        amount: 0,
        fee: 0.03568501
      }
    ],
    wallets: [
      {
        name: "Metamask wallet",
        quantity: 0.06207
      },
      {
        name: "Binance wallet",
        quantity: 0.14022274
      }
    ]
  },
  {
    name: 'Internet Computer',
    symbol: 'ICP',
    quantity: 6.43523112,
    history: [
      {
        action: 'buy',
        price: 361,
        total: 389.88,
      },
      {
        action: 'buy',
        price: 127.32,
        total: 147.6912,
      },
      {
        action: 'buy',
        price: 40,
        total: 120,
      }
    ]
  },
  {
    name: 'PancakeSwap',
    symbol: 'CAKE',
    quantity: 43.45121,
    history: [
      {
        action: 'buy',
        price: 19.055,
        total: 228.66,
      },
      {
        action: 'buy',
        price: 17.728,
        total: 99.98592,
      },
      {
        action: 'buy',
        price: 17.694,
        total: 11.005668,
      },
      {
        action: 'buy',
        price: 37.151,
        total: 529.550354,
      },
      {
        action: 'buy',
        price: 40.5,
        total: 305.289,
      },
    ]
  },
  {
    name: 'Bitcoin',
    symbol: 'BTC',
    history: [
      {
        action: 'buy',
        price: 32578.27,
        total: 99.72208447,
      },
      {
        action: 'buy',
        price: 32500,
        total: 99.97,
      },
      {
        action: 'transfer',
        wallet: 'Ledger',
        amount: 0.0005,
        fee: 0.0005,
      },
      {
        action: 'sell',
        price: 40000,
        filled: 0.00126219
        // avg: 	32539.039
      }
    ],
    wallets: [
      {
        name: "Ledger wallet",
        quantity: 0.0005
      },
      {
        name: "Binance wallet",
        quantity: 0.00387481
      }
    ]
  },
  {
    name: 'Compound',
    symbol: 'COMP',
    quantity: 0.48407956,
    history: [
      {
        action: 'buy',
        price: 95,
        total: 25,
      },
      {
        action: 'buy',
        price: 113,
        total: 25,
      },
    ]
  },
  {
    name: 'Immutable X',
    symbol: 'IMX',
    quantity: 26.47,
    history: [
      {
        action: 'buy',
        price: 1.75,
        total: 25,
      },
      {
        action: 'buy',
        price: 2.05,
        total: 25,
      },
    ]
  },
  {
    name: 'Biconomy',
    symbol: 'BICO',
    quantity: 28.77,
    history: [
      {
        action: 'buy',
        price: 1.6,
        total: 25,
      },
      {
        action: 'buy',
        price: 1.9,
        total: 25,
      },
    ]
  },
  {
    name: 'TetherUS',
    symbol: 'USDT',
    quantity: 25.506
  },
  {
    name: 'Dusk Network',
    symbol: 'DUSK',
    quantity: 19.73252
  },
  {
    name: 'Polygon',
    symbol: 'MATIC',
    quantity: 94.57722980,
    history: [
      {
        action: 'buy',
        price: 1.69556,
        total: 149.887504,
      },
    ]
  },
  {
    name: 'BNB',
    symbol: 'BNB',
    quantity: 0.29498514
  },
  {
    name: 'TRON',
    symbol: 'TRX',
    quantity: 1715.50080135,
    history: [
      {
        action: 'buy',
        price: 0.05812,
        total: 96.694244,
      },
    ]
  },
  {
    name: 'Shiba Inu',
    symbol: 'SHIB',
    quantity: 5194313.09,
    history: [
      {
        action: 'buy',
        price: 0.000033,
        total: 168.459357,
      },
    ]
  },
  {
    name: 'Cardano',
    symbol: 'ADA',
    quantity: 320.4857901,
    history: [
      {
        action: 'buy',
        price: 1.738,
        total: 400.50472,
      },
      {
        action: 'buy',
        price: 1.2,
        total: 92.58,
      },
    ]
  },
  {
    name: 'Cosmos',
    symbol: 'ATOM',
    quantity: 2.6,
    history: [
      {
        action: 'buy',
        price: 25,
        total: 44.25,
      },
      {
        action: 'buy',
        price: 30,
        total: 25,
      },
    ]
  },
  {
    name: 'DODO',
    symbol: 'DODO',
    quantity: 35.0612373
  },
  {
    name: 'CLV',
    symbol: 'CLV',
    quantity: 9.30875969
  },
  {
    name: 'Moonriver',
    symbol: 'MOVR',
    quantity: 0.76843531,
    history: [
      {
        action: 'buy',
        price: 60,
        total: 25,
      },
      {
        action: 'buy',
        price: 71,
        total: 25,
      },
    ]
  },
  {
    name: 'VeChain',
    symbol: 'VET',
    quantity: 1180.5,
    history: [
      {
        action: 'buy',
        price: 0.04,
        total: 25,
      },
      {
        action: 'buy',
        price: 0.045,
        total: 25,
      },
    ]
  },
  {
    name: 'Filecoin',
    symbol: 'FIL',
    quantity: 2.20128023,
    history: [
      {
        action: 'buy',
        price: 71.35,
        total: 149.513925,
      },
    ]
  },
  {
    name: 'Moonbeam',
    symbol: 'GLMR',
    quantity: 1.36544507
  },
  {
    name: 'Astar',
    symbol: 'ASTR',
    quantity: 47.90197712
  },
  {
    name: 'Dogecoin',
    symbol: 'DOGE',
    quantity: 891.77322746,
    history: [
      {
        action: 'buy',
        price: 0.59908,
        total: 530.006076,
      },
    ]
  },
  {
    name: 'IOTA',
    symbol: 'MIOTA',
    quantity: 34.00058752,
    history: [
      {
        action: 'buy',
        price: 0.72,
        total: 24.5,
      },
    ]
  },
  {
    name: 'Stellar',
    symbol: 'XLM',
    quantity: 214.79234882,
    history: [
      {
        action: 'buy',
        price: 0.31224,
        total: 99.948024,
      },
    ]
  },
];

@Injectable({
  providedIn: 'root'
})
export class AppService {

  cryptoList$: Observable<any[]>;

  private cryptoListState: any[] = [];
  private cryptoListSubject = new BehaviorSubject<any[]>(this.cryptoListState);

  rootURL = '/api';
  totalValue = 0;

  constructor(
    private dbService: NgxIndexedDBService,
    private http: HttpClient) {
    this.cryptoList$ = this.cryptoListSubject.asObservable();
  }

  sumTotalValue(value: number): void {
    this.totalValue += value;
  }

  getCryptoPriceBySymbol(symbol: string): any {
    return this.cryptoListState.find((crypto: any) => crypto.symbol === symbol)
  }

  getCoinList(): Observable<CoinInterface[]> {
    // return (this.dbService.getAll('coinList') as Observable<CoinInterface[]>).pipe(
    return (of(COIN_LIST) as Observable<any[]>).pipe(
      tap((coinList: CoinInterface[]) => {
        this.setPriceProperty(coinList);
        this.sortCoinListByRank(coinList);
        this.setQuantityProperty(coinList);
      })
    );
  }

  private sortCoinListByRank(coinList: CoinInterface[]): void {
    coinList.sort((a: CoinInterface, b: CoinInterface) => {
      if (a.rank < b.rank) return -1;
      if (a.rank > b.rank) return 1;
      return 0;
    })
  }

  private setQuantityProperty(coinList: CoinInterface[]): void {
    coinList.map((coin: CoinInterface) => {
      const quantity = coin.history?.reduce((acc: number, curr: CryptoHistoryInterface) => {
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

      coin.quantity = this.getRoundedValue(quantity);
    });
  }

  private setPriceProperty(coinList: CoinInterface[]): void {
    coinList.map((coin: CoinInterface) => {
      const crypto = this.getCryptoPriceBySymbol(coin.symbol);
      coin.price = this.getRoundedValue(crypto?.quote?.USD?.price);

      coin.rank = crypto.cmc_rank;
    });
  }

  private getRoundedValue(value: number): number {
    if (value >= 1) {
      return Number.parseFloat(value.toFixed(2));
    }

    if (value > 0.1 && value < 1) {
      return Number.parseFloat(value.toFixed(4));
    }

    if (value > 0.01 && value < 0.1) {
      return Number.parseFloat(value.toFixed(5));
    }

    if (value < 0.0001) {
      return Number.parseFloat(value.toFixed(9));
    }

    return value;
  }

  getCoinListSettings(): Observable<any> {
    return of(CRYPTO).pipe(
      tap((response: any) => this.setCryptoListState(response.data)),
    );

    return this.http.get(this.rootURL + '/users').pipe(
      tap((response: any) => this.setCryptoListState(response.data)),
    );
  }

  addUser(user: any) {
    return this.http.post(this.rootURL + '/user', { user });
  }

  get total(): number {
    return this.totalValue;
  }

  private setCryptoListState(cryptoList: any[]): void {
    this.cryptoListState = cryptoList;
    this.cryptoListSubject.next(this.cryptoListState);
  }
}