import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'roundValue'
})
export class RoundValuePipe implements PipeTransform {

  transform(value: number, number: number | null = null): number {
    if (number !== null) {
      return Number.parseFloat(value.toFixed(number));
    }

    if (value >= 1 || value <= -1) {
      return Number.parseFloat(value.toFixed(2));
    }

    if (value > 0.1 && value < 1 || value < -0.1 && value > -1) {
      return Number.parseFloat(value.toFixed(4));
    }

    if (value > 0.0001 && value < 0.1 || value < -0.0001 && value > -0.1) {
      return Number.parseFloat(value.toFixed(5));
    }

    if (value > 0.00001 && value < 0.0001 || value < -0.00001 && value > -0.0001) {
      return Number.parseFloat(value.toFixed(7));
    }

    if (value > 0.0000001 && value < 0.00001 || value < -0.0000001 && value > -0.00001) {
      return Number.parseFloat(value.toFixed(9));
    }

    return 0;
    return Number.parseFloat(value.toFixed(17));
  }
}
