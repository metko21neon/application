import { Pipe, PipeTransform } from '@angular/core';

import { CryptoHistoryInterface } from '../interfaces/crypto-history.interface';
import { AppService } from '../app.service';

@Pipe({
  name: 'percentResult'
})
export class PercentResultPipe implements PipeTransform {

  constructor(private appService: AppService) { }

  transform(element: any): string {
    const crypto = this.appService.getCryptoPriceBySymbol(element.symbol);

    if (!element.history?.length) { return '0' }

    const avg = this.getAveragePrice(element);

    return ((crypto?.quote?.USD?.price - Number.parseFloat(avg)) / (Number.parseFloat(avg) / 100))?.toFixed(3);
  }

  // AVERAGE
  private averagePrice: number = 0;
  private acc: number = 0;

  private getAveragePrice(element: any): string {
    const quantity = this.getQuantity(element.history);
    const total = element?.history?.reduce((acc: number, curr: CryptoHistoryInterface, index: number) => {
      if (curr.action === 'buy') {
      }

      if (curr.action === 'sell') {
        this.averagePrice = this.getAverage(element?.history, index);
      }

      this.acc = curr.action === 'buy' ? acc + curr.total : acc - (curr.filled! * this.averagePrice);;
      return curr.action === 'buy' ? acc + curr.total : acc - (curr.filled! * this.averagePrice);
    }, 0);

    return (total / quantity).toFixed(3);
  }

  private getAverage(history = [], index: number): number {
    const historyList = history?.slice(0, index);

    const isSell = historyList.some((item: CryptoHistoryInterface) => item.action === 'sell');

    if (!isSell) {
      const filledSum = historyList.reduce((acc: number, curr: CryptoHistoryInterface) => acc + curr.total / curr.price, 0);
      const totalSum = historyList.reduce((acc: number, curr: CryptoHistoryInterface) => curr.total + acc, 0);

      return totalSum / filledSum;
    }

    if (isSell) {
      const quantity = historyList.reduce((acc: number, curr: CryptoHistoryInterface) => {
        return curr.action === 'buy' ? acc + curr.total / curr.price : acc - curr.filled!;
      }, 0);

      return this.acc / quantity;
    }

    return 0;
  }

  private getQuantity(history: CryptoHistoryInterface[] = []): number {
    return history.reduce((acc: number, curr: CryptoHistoryInterface) => {
      return curr.action === 'buy' ? acc + curr.total / curr.price : acc - curr.filled!;
    }, 0);
  }
}
