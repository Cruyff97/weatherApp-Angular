import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateNow',
})
export class DateNowPipe implements PipeTransform {
  transform(value: unknown): unknown {
    const arrDays = [
      'Sunday',
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
    ];
    const today = new Date();

    if (value === arrDays[today.getDay()]) {
      return 'Today';
    }
    if (value === arrDays[today.getDay() + 1]) {
      return 'Tomorrow';
    }
    return value;
  }
}
