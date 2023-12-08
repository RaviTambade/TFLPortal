import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TimeSheetDetails } from 'src/app/time-sheet/models/TimeSheetDetails';
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
  timeSheetDetail: TimeSheetDetails = {
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
    let timeSheetDetail: TimeSheetDetails = {
      id: 0,
      fromTime: this.timeSheetDetail.fromTime + ':00',
      toTime: this.timeSheetDetail.toTime + ':00',
      durationInMinutes: this.timeSheetDetail.durationInMinutes,
      durationInHours: this.timeSheetDetail.durationInHours,
      timeSheetId: this.timeSheetId,
      work: this.timeSheetDetail.work,
      workCategory: this.timeSheetDetail.workCategory,
      description: this.timeSheetDetail.description,
    };

    this.timeSheetService.addTimeSheetDetails(timeSheetDetail).subscribe((res) => {
      if (res) {
        this.stateChangeEvent.emit(true);
      }
    });
  }

  getDuration(timeSheetDetail: TimeSheetDetails) {
    this.timeSheetDetail =
      this.timeSheetService.getDurationOfWork(timeSheetDetail);
  }
}
