import { Pipe, PipeTransform } from '@angular/core';

import { CryptoHistoryInterface } from '../interfaces/crypto-history.interface';

@Pipe({
  name: 'totalFilled'
})
export class TotalFilledPipe implements PipeTransform {

  transform(element: any): number {
    return element?.history?.reduce((acc: number, curr: CryptoHistoryInterface) => curr.total + acc, 0);
  }
}
