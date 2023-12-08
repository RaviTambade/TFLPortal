import {Component,EventEmitter,Input,Output, SimpleChanges} from '@angular/core';
import { TimeSheetDetails } from 'src/app/time-sheet/models/TimeSheetDetails';
import { TimeSheetService } from 'src/app/time-sheet/services/time-sheet.service';

@Component({
  selector: 'app-update-timesheet-entry',
  templateUrl: './update-timesheet-entry.component.html',
  styleUrls: ['./update-timesheet-entry.component.css'],
})
export class UpdateTimesheetEntryComponent {
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

  @Input() timesheetDetails!: TimeSheetDetails;
  @Output() stateChangeEvent = new EventEmitter<boolean>();
  constructor(private timeSheetService: TimeSheetService) {}

  ngOnChanges(changes: SimpleChanges) {
    this.timesheetDetails = changes['timesheetDetails'].currentValue;
    this.timesheetDetails.fromTime = this.timesheetDetails.fromTime.split(':00').at(0)!;
    this.timesheetDetails.toTime = this.timesheetDetails.toTime.split(':00').at(0)!;
  }

  onClick() {
    let timesheetDetails: TimeSheetDetails = {
      id: this.timesheetDetails.id,
      fromTime: this.timesheetDetails.fromTime + ':00',
      toTime: this.timesheetDetails.toTime + ':00',
      durationInMinutes: this.timesheetDetails.durationInMinutes,
      durationInHours: this.timesheetDetails.durationInHours,
      timeSheetId: this.timesheetDetails.timeSheetId,
      work: this.timesheetDetails.work,
      workCategory: this.timesheetDetails.workCategory,
      description: this.timesheetDetails.description,
    };

    this.timeSheetService
      .updateTimeSheetDetails(timesheetDetails.id, timesheetDetails)
      .subscribe((res) => {
        if (res) {
          this.stateChangeEvent.emit(true);
        }
      });
  }
  getDuration(timeSheetEnrty: TimeSheetDetails) {
    this.timeSheetService.getDurationOfWork(timeSheetEnrty);
  }
}
