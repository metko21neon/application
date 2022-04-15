import { Pipe, PipeTransform } from '@angular/core';

import { CryptoHistoryInterface } from '../interfaces/crypto-history.interface';
import { AppService } from '../app.service';

@Pipe({
  name: 'usdValueResult'
})
export class UsdValueResultPipe implements PipeTransform {

  constructor(private appService: AppService) { }

  transform(element: any): string {
    const crypto = this.appService.getCryptoPriceBySymbol(element.symbol);

    if (!element.history?.length) { return '0' }

    const filledSum = element.history.reduce((acc: number, curr: CryptoHistoryInterface) => curr.filled! + acc, 0);
    const totalSum = element.history.reduce((acc: number, curr: CryptoHistoryInterface) => curr.total + acc, 0);

    return ((crypto?.quote?.USD?.price * filledSum) - totalSum).toFixed(1);
  }
}
