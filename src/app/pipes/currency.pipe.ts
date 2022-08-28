import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'imCurrency'
})
export class CurrencyPipe implements PipeTransform {

  transform(value: number, currency: string = ''): unknown {
    if (this.isFloat(value)) {
      return `${currency} ${Math.round(value).toLocaleString()}`;
    }

    if (this.isInt(value)) {
      return `${currency} ${value.toLocaleString()}`;
    }

    return value;
  }

  private isFloat(n: number): boolean {
    return Number(n) === n && n % 1 !== 0;
  }

  private isInt(n: number): boolean {
    return Number(n) === n && n % 1 === 0;
  }
}
