import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateNow'
})
export class DateNowPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {  
    const arrDays=["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"] 
    const today = new Date();
    console.log(arrDays[today.getDay()]);

if(value === arrDays[today.getDay()-1] ){
  return 'Today'
}
if(value===arrDays[today.getDay()]){
  return 'Tomorrow'
}
    return value;
  }

}
