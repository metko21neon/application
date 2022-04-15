import { Pipe, PipeTransform } from '@angular/core';

import { CryptoHistoryInterface } from '../interfaces/crypto-history.interface';

@Pipe({
  name: 'quantity'
})
export class QuantityPipe implements PipeTransform {

  transform(element: any): string {
    element.quantity = element.history.reduce((acc: number, curr: CryptoHistoryInterface) => {
      return curr.action === 'buy' ? acc + curr.total / curr.price : acc - curr.filled!;
    }, 0).toFixed(5);

    return element.quantity;
  }
}
