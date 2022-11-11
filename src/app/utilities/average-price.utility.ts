import { CryptoHistoryInterface } from "../interfaces/crypto-history.interface";
import { CoinHistoryActionEnum } from "../enums/coin-history-action.enum";
import { CoinInterface } from "../interfaces/coin.interface";

export function calculateAveragePrice(transactions: any[] = [], coin: CoinInterface): number {
  let averagePrice = 0;
  let accValue = 0;

  const quantity = getQuantity(transactions);

  const total = transactions.reduce((acc: number, curr: CryptoHistoryInterface, index: number) => {
    if (curr.action === CoinHistoryActionEnum.BUY) {
      accValue = acc + curr.total;
      return accValue;
    }

    if (curr.action === CoinHistoryActionEnum.SELL) {
      averagePrice = getAverage(transactions, index, accValue);
      accValue = acc - (curr.filled! * averagePrice);
      return accValue;
    }

    return acc;
  }, 0);

  return total !== 0 && quantity !== 0 ? total / quantity : 0;
}

function getAverage(history: any[], index: number, accValue: number): number {
  const historyList = history?.slice(0, index);

  const isSell = historyList.some((item: CryptoHistoryInterface) => item.action === 'sell');

  if (!isSell) {
    const filledSum = historyList
      .filter((item: CryptoHistoryInterface) => item.action === CoinHistoryActionEnum.BUY)
      .reduce((acc: number, curr: CryptoHistoryInterface) => acc + curr.total / curr.price, 0);

    const totalSum = historyList
      .filter((item: CryptoHistoryInterface) => item.action === CoinHistoryActionEnum.BUY)
      .reduce((acc: number, curr: CryptoHistoryInterface) => curr.total + acc, 0);

    return totalSum / filledSum;
  }

  if (isSell) {
    const quantity = historyList.reduce((acc: number, curr: CryptoHistoryInterface) => {
      if (curr.action === CoinHistoryActionEnum.BUY) {
        return acc + curr.total / curr.price;
      }

      if (curr.action === CoinHistoryActionEnum.SELL) {
        return acc - curr.filled!;
      }

      return acc;
    }, 0);

    return accValue / quantity;
  }

  return 0;
}

function getQuantity(history: CryptoHistoryInterface[] = []): number {
  return history.reduce((acc: number, curr: CryptoHistoryInterface) => {
    if (curr.action === CoinHistoryActionEnum.BUY) {
      return acc + curr.total / curr.price;
    }

    if (curr.action === CoinHistoryActionEnum.SELL) {
      return acc - curr.filled!;
    }

    return acc;
  }, 0);
}
