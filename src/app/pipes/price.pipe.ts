import { Pipe, PipeTransform } from '@angular/core';

import { AppService } from '../app.service';

@Pipe({
  name: 'price'
})
export class PricePipe implements PipeTransform {

  constructor(private appService: AppService) { }

  transform(quantity: number, symbol: string): number {
    const crypto = this.appService.getCryptoPriceBySymbol(symbol);
    const value = Math.round(quantity * crypto?.quote?.USD?.price || 0);

    this.appService.sumTotalValue(value);

    return value;
  }
}
