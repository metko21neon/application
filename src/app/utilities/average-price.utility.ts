import { CryptoHistoryInterface } from "../interfaces/crypto-history.interface";
import { CoinHistoryActionEnum } from "../enums/coin-history-action.enum";

export function calculateAveragePrice(element: any): number {
  let averagePrice = 0;
  let accValue = 0;

  const quantity = getQuantity(element.history);

  const total = element?.history?.reduce((acc: number, curr: CryptoHistoryInterface, index: number) => {
    if (curr.action === CoinHistoryActionEnum.SELL) {
      averagePrice = getAverage(element?.history, index, accValue);
    }

    // acc
    if (curr.action === CoinHistoryActionEnum.BUY) {
      accValue = acc + curr.total;
    }

    if (curr.action === CoinHistoryActionEnum.SELL) {
      accValue = acc - (curr.filled! * averagePrice);
    }

    // return
    if (curr.action === CoinHistoryActionEnum.BUY) {
      return acc + curr.total;
    }

    if (curr.action === CoinHistoryActionEnum.SELL) {
      return acc - (curr.filled! * averagePrice);
    }

    return acc;
  }, 0);

  return total / quantity;
}

function getAverage(history = [], index: number, accValue: number): number {
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
