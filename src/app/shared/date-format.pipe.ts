import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({
  name: 'dateFormat',
})
export class DateFormatPipe implements PipeTransform {
  transform(value: Date, ...args: any[]): string {
    // formats the date to DD/MMM/YYYY
    return moment(value).format('DD-MMM-YYYY');
  }
}
