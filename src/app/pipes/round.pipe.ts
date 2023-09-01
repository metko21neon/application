import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'imRound',
  standalone: true
})
export class RoundPipe implements PipeTransform {

  transform(value: number): number {
    return Math.round(value);
  }
}
