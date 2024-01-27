import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'chunk'
})
export class ChunkPipe implements PipeTransform {

  transform(calendarDaysArray: any, chunkSize: number) {
    let calendarDays: any[][] = [];
    let weekDays: any[] = [];

    calendarDaysArray.map((day: any,index: number) => {
        weekDays.push(day);
        // here we need to use ++ in front of the variable else index incr  ease 
        //will happen after the evaluation but we need it to happen BEFORE
        if (++index % chunkSize  === 0) {
          calendarDays.push(weekDays);
          weekDays = [];
        }
    });
    return calendarDays;
  }
}
