import { Component, EventEmitter, Output } from '@angular/core';
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

  onClick(){
    let timeSheetEntry:TimeSheetEntry={
      id: 0,
      description: this.timeSheetEntry.description,
      fromTime: this.timeSheetEntry.fromTime,
      toTime: this.timeSheetEntry.toTime
    };
    
    console.log(timeSheetEntry);
    this.timeSheetService.AddTimeSheetEntries(timeSheetEntry);
   console.log(this.timeSheetEntry.fromTime);
   console.log(this.timeSheetEntry.toTime);
   console.log(this.timeSheetEntry.description);

  //  this.selectedTimeSheetEntries.emit(this.timeSheetEntry);
  }

  
}
