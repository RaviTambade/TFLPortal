import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { TimeSheetEntry } from 'src/app/time-sheet/models/TimeSheetDetails';
import { TimeSheetService } from 'src/app/time-sheet/services/time-sheet.service';

@Component({
  selector: 'app-insert-time-sheet-entry',
  templateUrl: './insert-time-sheet-entry.component.html',
  styleUrls: ['./insert-time-sheet-entry.component.css'],
})
export class InsertTimeSheetEntryComponent {
  activitiyTypes: string[] = [
    'task',
    'userstory',
    'bug',
    'issues',
    'meeting',
    'learning',
    'mentoring',
    'break',
    'clientcall',
    'other',
  ];
  timeSheetEntry: TimeSheetEntry = {
    id: 0,
    fromTime: '',
    toTime: '',
    durationInMinutes: 0,
    durationInHours: '',
    timeSheetId: 0,
    work: '',
    workCategory: '',
    description: '',
  };

  @Input() timeSheetId!: number;
  @Output() stateChangeEvent = new EventEmitter<boolean>();
  constructor(private timeSheetService: TimeSheetService) {}

  onClick() {
    let timeSheetEntry: TimeSheetEntry = {
      id: 0,
      fromTime: this.timeSheetEntry.fromTime + ':00',
      toTime: this.timeSheetEntry.toTime + ':00',
      durationInMinutes: this.timeSheetEntry.durationInMinutes,
      durationInHours: this.timeSheetEntry.durationInHours,
      timeSheetId: this.timeSheetId,
      work: this.timeSheetEntry.work,
      workCategory: this.timeSheetEntry.workCategory,
      description: this.timeSheetEntry.description,
    };

    this.timeSheetService.addTimeSheetEntry(timeSheetEntry).subscribe((res) => {
      if (res) {
        this.stateChangeEvent.emit(true);
      }
    });
  }

  getDuration(timeSheetEnrty: TimeSheetEntry) {
    this.timeSheetEntry =
      this.timeSheetService.getDurationOfWork(timeSheetEnrty);
  }
}
