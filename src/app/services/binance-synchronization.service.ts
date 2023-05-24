import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { CoinInterface } from '../interfaces/coin.interface';
import { BINANCE_WITHDRAW } from '../../assets/withdraws';
import { COIN_LIST } from '../states/coins.state';
import { ORDERS } from '../../assets/orders';
import { AppService } from '../app.service';

import moment from 'moment';

export const DATE_FORMAT = 'YYYY-MM-DD HH:mm:ss';

@Injectable({
  providedIn: 'root'
})
export class BinanceSynchronizationService {

  constructor(private appService: AppService) { }

  private prepareTransaction(order: any): any {
    let formatted: any = {
      date: order['Date(UTC)'],
      price: +order['AvgTrading Price'],
    };

    switch (order.Type) {
      case 'BUY':
        formatted.action = 'buy';
        formatted.total = +order['Total'];
        break;
      case 'SELL':
        formatted.action = 'sell';
        formatted.filled = +order['Filled'];
        break;

      default:
        break;
    }

    return formatted;
  }

  synchronizeOrders(): Observable<CoinInterface[]> {
    const coins = JSON.parse(JSON.stringify(COIN_LIST));

    // && order.Status === 'Filled'
    const orders = ORDERS
      .filter((order: any) => order.Type === 'SELL' || order.Type === 'BUY')
      .filter((order: any) => order.Total !== '0');

    orders.map((order: any) => {
      const symbol = order.Pair.replace('USDT', '');
      if (symbol === 'UAH') return;

      order['Date(UTC)'] = moment(order['Date(UTC)'], DATE_FORMAT).add({ hours: 3 }).format(DATE_FORMAT);

      const coinIndex = coins.findIndex((item: any) => item.symbol === symbol);
      const transaction = this.prepareTransaction(order);


      if (coinIndex !== -1) {
        const coin = coins[coinIndex];
        order.rank = coin.rank;
        const walletIndex = coin.wallets?.findIndex((wallet: any) => wallet.name === "Binance")!;

        if (walletIndex !== -1) {
          const wallet = coin.wallets![walletIndex];

          const transactionIndex = wallet.transactions.findIndex((transaction: any) => {
            return new Date(transaction.date).getTime() === new Date(order['Date(UTC)']).getTime();
          });

          if (transactionIndex === -1) {
            wallet.transactions.push(transaction);

            wallet.transactions.sort((a: any, b: any) => {
              const aDate = this.appService.getTime(a.date);
              const bDate = this.appService.getTime(b.date);

              if (aDate < bDate) return -1;
              if (aDate > bDate) return 1;

              return 0;
            });
          }

        } else {
          const wallet = {
            "name": "Binance",
            "address": "binance_1",
            "transactions": [transaction]
          };

          coin.wallets.push(wallet);
        }
      } else {
        const coin = {
          name: '',
          symbol: symbol,
          "token_address": "",
          "wallets": [
            {
              "name": "Binance",
              "address": "binance_1",
              "transactions": [transaction]
            }
          ],
        }

        coins.push(coin);
      }
    });

    this.synchronizeWithdrawals(coins);

    return this.appService.getCoinList(coins);
  }

  private prepareWithdrawal(withdrawal: any): any {
    return {
      action: "transfer",
      address: withdrawal['Address'],
      amount: +withdrawal['Amount'],
      date: withdrawal['Date(UTC)'],
      fee: +withdrawal['TransactionFee'],
      network: withdrawal['Network'],
    }
  }

  private synchronizeWithdrawals(coins: any): void {
    const withdrawals = BINANCE_WITHDRAW.filter((withdrawal: any) => withdrawal.Status === "Completed");

    withdrawals.map((withdrawal: any) => {
      const symbol = withdrawal.Coin;
      if (symbol === 'UAH') return;

      withdrawal['Date(UTC)'] = moment(withdrawal['Date(UTC)'], DATE_FORMAT).add({ hours: 3 }).format(DATE_FORMAT);

      const coinIndex = coins.findIndex((item: any) => item.symbol === symbol);
      const transaction = this.prepareWithdrawal(withdrawal);

      if (coinIndex !== -1) {
        const coin = coins[coinIndex];
        withdrawal.rank = coin.rank;
        const walletIndex = coin.wallets?.findIndex((wallet: any) => wallet.name === "Binance")!;

        if (walletIndex !== -1) {
          const wallet = coin.wallets![walletIndex];

          const transactionIndex = wallet.transactions.findIndex((transaction: any) => {
            return new Date(transaction.date).getTime() === new Date(withdrawal['Date(UTC)']).getTime();
          });

          if (transactionIndex === -1) {
            wallet.transactions.push(transaction);

            wallet.transactions.sort((a: any, b: any) => {
              const aDate = this.appService.getTime(a.date);
              const bDate = this.appService.getTime(b.date);

              if (aDate < bDate) return -1;
              if (aDate > bDate) return 1;

              return 0;
            });
          }

        } else {
          const wallet = {
            "name": "Binance",
            "address": "binance_1",
            "transactions": [transaction]
          };

          coin.wallets.push(wallet);
        }
      } else {
        const coin = {
          name: '',
          symbol: symbol,
          "token_address": "",
          "wallets": [
            {
              "name": "Binance",
              "address": "binance_1",
              "transactions": [transaction]
            }
          ],
        }

        coins.push(coin);
      }
    });
  }
}
