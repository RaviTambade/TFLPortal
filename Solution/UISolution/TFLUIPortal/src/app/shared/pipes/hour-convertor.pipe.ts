import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'hourConvertor'
})
export class HourConvertorPipe implements PipeTransform {

  transform(hours: number): string {
    var minutes=hours*60;
    let str = `${Math.floor(minutes / 60)}h : ${Math.ceil(minutes % 60)}m`;
    return str;
  }

}
