import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { TimeSheetEntry } from 'src/app/time-sheet/models/TimeSheetEntry';
import { TimeSheetService } from 'src/app/time-sheet/services/time-sheet.service';

@Component({
  selector: 'app-insert-time-sheet-entry',
  templateUrl: './insert-time-sheet-entry.component.html',
  styleUrls: ['./insert-time-sheet-entry.component.css']
})
export class InsertTimeSheetEntryComponent {

  constructor(private timeSheetService:TimeSheetService){}
 

  // @Output() selectedTimeSheetEntries= new EventEmitter<TimeSheetEntry>();
  timeSheetEntry:TimeSheetEntry={
    id: 0,
    description: '',
    fromTime: '',
    toTime: ''
  }
  startTime: string = '';
  endTime: string = '';
  duration: string = '';
  onClick(){
    let timeSheetEntry:TimeSheetEntry={
      id: 0,
      description: this.timeSheetEntry.description,
      fromTime: this.timeSheetEntry.fromTime,
      toTime: this.timeSheetEntry.toTime
    };
    
    console.log(timeSheetEntry);
    this.startTime=timeSheetEntry.fromTime;
    this.endTime=timeSheetEntry.toTime;
    const startDate = new Date(`1970-01-01T${this.startTime}`);
    const endDate = new Date(`1970-01-01T${this.endTime}`);

    const durationMilliseconds = endDate.getTime() - startDate.getTime();
    const hours = Math.floor(durationMilliseconds / (60 * 60 * 1000));
    const minutes = Math.floor((durationMilliseconds % (60 * 60 * 1000)) / (60 * 1000));

    this.duration = `${hours} hours, ${minutes} minutes`;
    this.timeSheetService.AddTimeSheetEntries(timeSheetEntry);
   console.log(this.timeSheetEntry.fromTime);
   console.log(this.timeSheetEntry.toTime);
   console.log(this.timeSheetEntry.description);

  //  this.selectedTimeSheetEntries.emit(this.timeSheetEntry);
  }

  
}
