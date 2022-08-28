import { Pipe, PipeTransform } from '@angular/core';

import moment from 'moment';

@Pipe({
  name: 'parseDate'
})
export class ParseDatePipe implements PipeTransform {

  transform(time: number): string {
    return moment(time).format('DD MMM YYYY');
  }
}
