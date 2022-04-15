import { Pipe, PipeTransform } from '@angular/core';

import { CoinInterface } from '../components/crypto/crypto.component';
import { AppService } from '../app.service';

@Pipe({
  name: 'usdValue',
  pure: true
})
export class USDValuePipe implements PipeTransform {

  constructor(private appService: AppService) { }

  transform(element: CoinInterface): number {
    const crypto = this.appService.getCryptoPriceBySymbol(element.symbol);
    return crypto?.quote?.USD?.price.toFixed(4);
  }
}
