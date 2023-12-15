import {Component,EventEmitter,Input,Output, SimpleChanges} from '@angular/core';
import { WorkmgmtService } from 'src/app/shared/services/workmgmt.service';
import { TimeSheetDetails } from 'src/app/time-sheet/models/TimeSheetDetails';

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
  constructor(private workmgmtSvc: WorkmgmtService) {}

  ngOnChanges(changes: SimpleChanges) {
    this.timesheetDetails = changes['timesheetDetails'].currentValue;
    console.log("🚀 ~ ngOnChanges ~ timesheetDetails:", this.timesheetDetails);
    this.timesheetDetails.fromTime = this.timesheetDetails.fromTime.slice(0,5);
    this.timesheetDetails.toTime = this.timesheetDetails.toTime.slice(0,5);
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

    this.workmgmtSvc
      .updateTimeSheetDetails(timesheetDetails.id, timesheetDetails)
      .subscribe((res) => {
        if (res) {
          this.stateChangeEvent.emit(true);
        }
      });
  }
  getDuration(timeSheetEnrty: TimeSheetDetails) {
    this.workmgmtSvc.getDurationOfWork(timeSheetEnrty);
  }
}
