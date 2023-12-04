import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { TimeSheetEntry } from 'src/app/time-sheet/models/timesheetentry';
import { TimeSheetService } from 'src/app/time-sheet/services/time-sheet.service';

@Component({
  selector: 'app-insert-time-sheet-entry',
  templateUrl: './insert-time-sheet-entry.component.html',
  styleUrls: ['./insert-time-sheet-entry.component.css'],
})
export class InsertTimeSheetEntryComponent {
  activitiyTypes:string[]=["task","userstory","bug","issues","meeting","learning","mentoring","break","clientcall","other"];
  timeSheetEntry: TimeSheetEntry = {
    id: 0,
    fromTime: '',
    toTime: '',
    durationInMinutes: 0,
    durationInHours: '',
    timeSheetId: 0,
    work: '',
    workCategory: '',
    description: ''
  };

  constructor(private timeSheetService: TimeSheetService) {}

  
  onClick() {
    let timeSheetEntry: TimeSheetEntry = {
      id: 0,
      fromTime: this.timeSheetEntry.fromTime,
      toTime: this.timeSheetEntry.toTime,
      durationInMinutes: this.timeSheetEntry.durationInMinutes,
      durationInHours: this.timeSheetEntry.durationInHours,
      timeSheetId: 0,
      work: this.timeSheetEntry.work,
      workCategory: this.timeSheetEntry.workCategory,
      description: this.timeSheetEntry.description
    };

    this.timeSheetService.AddTimeSheetEntries(timeSheetEntry);
  
  }

  getDuration() {
    let startTime = this.timeSheetEntry.fromTime;
    let endTime = this.timeSheetEntry.toTime;
    console.log(endTime);
    if (startTime != '' && endTime != ''   ) {
      const startDate = new Date(`1970-01-01T${startTime}`);
      const endDate = new Date(`1970-01-01T${endTime}`);

      const durationMilliseconds = endDate.getTime() - startDate.getTime();
      this.timeSheetEntry.durationInMinutes = (durationMilliseconds /(1000*60));
      this.timeSheetEntry.durationInHours=this.convertMinutesintoHours(this.timeSheetEntry.durationInMinutes);
    }
  }

  convertMinutesintoHours(minutes:number){
    let str=`${(minutes/60).toFixed(0)}h: ${(minutes%60)}m`;
    return str;
  }
}
