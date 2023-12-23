import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'imFloor',
  standalone: true
})
export class IMFloorPipe implements PipeTransform {

  transform(value: number): number {
    return Math.floor(value / 100) * 100;
  }
}
