import { Component } from '@angular/core';
import { WorkmgmtService } from 'src/app/shared/services/workmgmt.service';
import { TimesheetView } from '../../models/timesheetview';
import { TimeSheetStatus } from '../../models/timesheetstatus';
import { Timesheet } from '../../models/timesheet';

@Component({
  selector: 'app-timesheet-approval',
  templateUrl: './timesheet-approval.component.html',
  styleUrls: ['./timesheet-approval.component.css'],
})
export class TimesheetApprovalComponent {
  timeSheets: TimesheetView[] = [];

  fromDate: string | undefined;
  toDate: string | undefined;
  intervals: string[] = ['week', 'month'];
  selectedInterval: string = this.intervals[0];
  TimesheetStatus=TimeSheetStatus;
  timesheetStatus: string[] = [ TimeSheetStatus.submitted, TimeSheetStatus.approved];

  selectedStatus: string = this.timesheetStatus[0];

  constructor(private workmgmtSvc: WorkmgmtService) {}

  ngOnInit(): void {
    this.onIntervalChange();
  }

  onIntervalChange() {
    switch (this.selectedInterval) {
      case 'week':
        const week = this.workmgmtSvc.getWeekInfo(new Date());
        this.fromDate = week.startDate;
        this.toDate = week.endDate;
        break;

      case 'month':
        const currentmonth = new Date().getMonth();
        this.fromDate = this.workmgmtSvc.firstDayOfMonth(currentmonth);
        this.toDate = this.workmgmtSvc.lastDayofMonth(currentmonth);
        break;
    }
    if (this.fromDate && this.toDate) {
      this.workmgmtSvc
        .getTimesheetsByStatus(this.selectedStatus, this.fromDate, this.toDate)
        .subscribe((res) => {
          this.timeSheets = res;
        });
    }
  }

  onChangeStatusbuttonclick(timesheet: Timesheet, status: string) {
    let timesheet2: Timesheet = {
      id: timesheet.id,
      timesheetDate: timesheet.timesheetDate,
      status: status,
      employeeId: timesheet.employeeId,
      statusChangedDate: new Date().toISOString().slice(0, 10),
    };

    this.workmgmtSvc
      .changeTimeSheetStatus(timesheet2.id, timesheet2)
      .subscribe((res) => {
        if (res) {
          this.timeSheets = this.timeSheets.filter(
            (t) => t.id != timesheet2.id
          );
        }
      });
  }

  isTimesheetApproved(timesheet: Timesheet): boolean {
    return timesheet.status == TimeSheetStatus.approved;
  }
}
