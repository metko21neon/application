import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'imCurrency'
})
export class ImCurrencyPipe implements PipeTransform {

  transform(value: string | null = ''): string | undefined {
    return value?.replace(',', ' ');
  }
}
