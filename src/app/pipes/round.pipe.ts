import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'imRound'
})
export class RoundPipe implements PipeTransform {

  transform(value: number): number {
    return Math.round(value);
  }
}
