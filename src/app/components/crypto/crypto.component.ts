import { Component, OnDestroy, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { HttpHeaders } from '@angular/common/http';
import { MatSort } from '@angular/material/sort';

import { InvestStatisticInterface } from '../../interfaces/invest-statistic.interface';
import { CoinDataInterface } from '../../interfaces/coin-data.interface';
import { ColumnInterface } from '../../interfaces/column.interface';
import { CoinDataService } from '../../services/coin-data.service';
import { CoinInterface } from '../../interfaces/coin.interface';
import { AppService } from '../../app.service';

import { Subscription, switchMap } from 'rxjs';

const LIST = [
  {
    name: 'YouHolder Wallet',
    list: [
      {
        name: '',
        symbol: 'XRP',
        quantity: 577.401224,
        history: [
          {
            price: 1.25,
            total: 501.5,
            filled: 401.2
          },
          {
            price: 0.6382,
            total: 99.776,
            filled: 156.339705
          }
        ]
      },
      {
        name: '',
        symbol: 'LINK',
        quantity: 16.013633,
        history: [
          {
            price: 37,
            total: 372.59,
            filled: 10.7
          },
          {
            price: 17.389,
            total: 90.353,
            filled: 5.195986
          }
        ]
      }
    ]
  },
  {
    name: 'Metamask Wallet',
    list: [
      {
        name: '',
        symbol: 'ETH',
        quantity: 0.06207,
        history: [
          {
            price: 3955,
            total: 511.777,
            filled: 0.1294
          },
          {
            price: 1888.94,
            total: 99.453,
            filled: 0.05265
          },
          {
            price: 2034.89,
            total: 99.954,
            filled: 0.04912
          }
        ]
      }
    ]
  },
  {
    name: 'Internet Computer Staking',
    list: [
      {
        name: 'Internet Computer',
        symbol: 'ICP',
        quantity: 6.43523112,
        history: [
          {
            price: 361,
            total: 389.88,
            filled: 1.08
          },
          {
            price: 127.32,
            total: 147.6912,
            filled: 1.16
          },
          {
            price: 40,
            total: 120,
            filled: 3
          }
        ]
      }
    ]
  },
  {
    name: 'PancakeSwap Staking',
    list: [
      {
        name: 'Bitcoin',
        symbol: 'CAKE',
        quantity: 43.45121,
        history: [
          {
            price: 19.055,
            total: 228.66,
            filled: 12
          },
          {
            price: 17.728,
            total: 99.98592,
            filled: 5.64
          },
          {
            price: 17.694,
            total: 11.005668,
            filled: 0.622
          },
          {
            price: 37.151,
            total: 529.550354,
            filled: 14.254
          },
          {
            price: 40.5,
            total: 305.289,
            filled: 7.538
          },
        ]
      }
    ]
  },
  {
    name: 'Ledger Wallet',
    list: [
      {
        name: 'Bitcoin',
        symbol: 'BTC',
        quantity: 0.0005,
        history: [
          {
            price: 32578.27,
            total: 99.72208447,
            filled: 0.003061
          },
          {
            price: 32500,
            total: 99.97,
            filled: 0.003076
          },
        ]
      }
    ]
  },
  {
    name: 'Binance Wallet',
    list: [
      {
        name: 'Bitcoin',
        symbol: 'BTC',
        quantity: 0.00387481,
        history: [
          {
            price: 32578.27,
            total: 99.72208447,
            filled: 0.003061
          },
          {
            price: 32500,
            total: 99.97,
            filled: 0.003076
          },
        ]
      },
      {
        name: 'Compound',
        symbol: 'COMP',
        quantity: 0.48407956,
        history: [
          {
            price: 95,
            total: 25,
            filled: 0.263
          },
          {
            price: 113,
            total: 25,
            filled: 0.221
          },
        ]
      },
      {
        name: 'Ethereum',
        symbol: 'ETH',
        quantity: 0.14022274,
        history: [
          {
            price: 3955,
            total: 511.777,
            filled: 0.1294
          },
          {
            price: 1888.94,
            total: 99.453,
            filled: 0.05265
          },
          {
            price: 2034.89,
            total: 99.954,
            filled: 0.04912
          }
        ]
      },
      {
        name: 'Immutable X',
        symbol: 'IMX',
        quantity: 26.47,
        history: [
          {
            price: 1.75,
            total: 25,
            filled: 14.28
          },
          {
            price: 2.05,
            total: 25,
            filled: 12.19
          },
        ]
      },
      {
        name: 'Biconomy',
        symbol: 'BICO',
        quantity: 28.77,
        history: [
          {
            price: 1.6,
            total: 25,
            filled: 15.62
          },
          {
            price: 1.9,
            total: 25,
            filled: 13.15
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
            price: 1.69556,
            total: 149.887504,
            filled: 88.4
          },
        ]
      },
      {
        name: '',
        symbol: 'BNB',
        quantity: 0.29498514
      },
      {
        name: '',
        symbol: 'TRX',
        quantity: 1715.50080135,
        history: [
          {
            price: 0.05812,
            total: 96.694244,
            filled: 1663.7
          },
        ]
      },
      {
        name: '',
        symbol: 'SHIB',
        quantity: 5194313.09,
        history: [
          {
            price: 0.000033,
            total: 168.459357,
            filled: 5104829
          },
        ]
      },
      {
        name: '',
        symbol: 'ADA',
        quantity: 320.4857901,
        history: [
          {
            price: 1.738,
            total: 400.50472,
            filled: 230.44
          },
          {
            price: 1.2,
            total: 92.58,
            filled: 77.15
          },
        ]
      },
      {
        name: '',
        symbol: 'ATOM',
        quantity: 2.6,
        history: [
          {
            price: 25,
            total: 44.25,
            filled: 1.77
          },
          {
            price: 30,
            total: 25,
            filled: 0.83
          },
        ]
      },
      {
        name: '',
        symbol: 'DODO',
        quantity: 35.0612373
      },
      {
        name: '',
        symbol: 'CLV',
        quantity: 9.30875969
      },
      {
        name: '',
        symbol: 'MOVR',
        quantity: 0.76843531,
        history: [
          {
            price: 60,
            total: 25,
            filled: 0.416
          },
          {
            price: 71,
            total: 25,
            filled: 0.352
          },
        ]
      },
      {
        name: '',
        symbol: 'VET',
        quantity: 1180.5,
        history: [
          {
            price: 0.04,
            total: 25,
            filled: 625
          },
          {
            price: 0.045,
            total: 25,
            filled: 555.5
          },
        ]
      },
      {
        name: '',
        symbol: 'SOL',
        quantity: 0.0080273,
        history: [
          {
            price: 32.288,
            total: 99.995936,
            filled: 3.097
          },
        ]
      },
      {
        name: '',
        symbol: 'FIL',
        quantity: 2.20128023,
        history: [
          {
            price: 71.35,
            total: 149.513925,
            filled: 2.0955
          },
        ]
      },
      {
        name: '',
        symbol: 'GLMR',
        quantity: 1.36544507
      },
      {
        name: '',
        symbol: 'DOT',
        quantity: 5.02366494,
        history: [
          {
            price: 14.5,
            total: 99.992,
            filled: 6.896
          },
          {
            price: 15.908,
            total: 99.998,
            filled: 6.28602
          },
        ]
      },
      {
        name: '',
        symbol: 'ASTR',
        quantity: 47.90197712
      },
      {
        name: '',
        symbol: 'DOGE',
        quantity: 891.77322746,
        history: [
          {
            price: 0.59908,
            total: 530.006076,
            filled: 884.7
          },
        ]
      },
      {
        name: 'IOTA',
        symbol: 'MIOTA',
        quantity: 34.00058752,
        history: [
          {
            price: 0.72,
            total: 24.5,
            filled: 34
          },
        ]
      },
      {
        name: '',
        symbol: 'XLM',
        quantity: 214.79234882,
        history: [
          {
            price: 0.31224,
            total: 99.948024,
            filled: 320.1
          },
        ]
      },
    ]
  },
];

@Component({
  selector: 'app-crypto',
  templateUrl: './crypto.component.html',
  styleUrls: ['./crypto.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CryptoComponent implements OnInit, OnDestroy {

  @ViewChild(MatSort) matSort!: MatSort;

  dataSource!: MatTableDataSource<any>;
  statistic!: InvestStatisticInterface;

  isLoading = false;
  list: any = LIST;

  columnList: ColumnInterface[] = [];
  displayedColumns: string[] = [];

  private subscription: Subscription = new Subscription();
  private headers: HttpHeaders = new HttpHeaders({
    'X-CMC_PRO_API_KEY': '90c1ef10-0914-4ade-b15c-e92216c772f7'
  });

  constructor(
    private coinDataService: CoinDataService,
    private appService: AppService
  ) { }

  ngOnInit(): void {
    this.setInvestStatisticSubscription();
    this.setColumnList();
    this.getCoinList();
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  synchronize(): void {
    const stream$ = this.coinDataService.synchronizeCoinData().pipe(
      switchMap(() => this.coinDataService.coinData$)
    ).subscribe((data: CoinDataInterface[]) => console.log('synchronize:', data));

    this.subscription.add(stream$);
  }

  sort(event: { active: string; direction: string; }): void {
    console.log('sort:', event);
  }

  selectCrypto(crypto: any): void {
    console.log('selectCrypto:', crypto);
  }

  showColumn(column: ColumnInterface): void {
    const index = this.displayedColumns.findIndex((columnName: string) => columnName === column.shortcut);

    if (index === -1) {
      this.displayedColumns.splice(column.position, 0, column.shortcut);
    } else {
      this.displayedColumns.splice(index, 1);
    }
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  private getCoinList(): void {
    const stream$ = this.appService.coinList$.subscribe((coinList: CoinInterface[]) => {
      this.dataSource = new MatTableDataSource(coinList);
      setTimeout(() => this.dataSource.sort = this.matSort);
      console.log('COIN_LIST:', coinList);
    });

    this.subscription.add(stream$);
  }

  private setColumnList(): void {
    this.columnList = this.appService.getColumnListList();

    this.displayedColumns = this.columnList
      .filter((column: ColumnInterface) => column.selected)
      .map((column: ColumnInterface) => column.shortcut);
  }

  private setInvestStatisticSubscription(): void {
    const stream$ = this.appService.investStatistic$.subscribe((statistic: InvestStatisticInterface) => {
      this.statistic = statistic;
    });

    this.subscription.add(stream$);
  }
}
