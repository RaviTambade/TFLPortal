import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { TimeSheetEntry } from 'src/app/time-sheet/models/TimeSheetEntry';
import { TimeSheetService } from 'src/app/time-sheet/services/time-sheet.service';

@Component({
  selector: 'app-insert-time-sheet-entry',
  templateUrl: './insert-time-sheet-entry.component.html',
  styleUrls: ['./insert-time-sheet-entry.component.css'],
})
export class InsertTimeSheetEntryComponent {
  constructor(private timeSheetService: TimeSheetService) {}

  // @Output() selectedTimeSheetEntries= new EventEmitter<TimeSheetEntry>();
  timeSheetEntry: TimeSheetEntry = {
    id: 0,
    description: '',
    fromTime: '',
    toTime: '',
    duration: ''
  };

  onClick() {
    let timeSheetEntry: TimeSheetEntry = {
      id: 0,
      description: this.timeSheetEntry.description,
      fromTime: this.timeSheetEntry.fromTime,
      toTime: this.timeSheetEntry.toTime,
      duration: this.timeSheetEntry.duration
    };

    this.timeSheetService.AddTimeSheetEntries(timeSheetEntry);
  
    //  this.selectedTimeSheetEntries.emit(this.timeSheetEntry);
  }

  getDuration() {
    let startTime = this.timeSheetEntry.fromTime;
    let endTime = this.timeSheetEntry.toTime;
    console.log(endTime);
    if (startTime != '' && endTime != ''   ) {
      const startDate = new Date(`1970-01-01T${startTime}`);
      const endDate = new Date(`1970-01-01T${endTime}`);

      const durationMilliseconds = endDate.getTime() - startDate.getTime();
      const hours = Math.floor(durationMilliseconds / (60 * 60 * 1000));
      const minutes = Math.floor(
        (durationMilliseconds % (60 * 60 * 1000)) / (60 * 1000)
      );

      this.timeSheetEntry.duration = `${hours}h ${minutes}m `;
    }
  }
}
