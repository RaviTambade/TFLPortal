import { Component } from '@angular/core';
import { TimeSheet } from 'src/app/time-sheet/models/timesheet';
import { TimesheetView } from 'src/app/time-sheet/models/TimesheetView';
import { WorkmgmtService } from 'src/app/shared/services/workmgmt.service';

@Component({
  selector: 'app-approve-timesheet',
  templateUrl: './approve-timesheet.component.html',
  styleUrls: ['./approve-timesheet.component.css'],
})
export class ApproveTimesheetComponent {
  totalminutes: any = 0;
  todaysDate: string = new Date().toISOString().slice(0, 10);
  employeeId = 10;
  timeSheet: TimesheetView | undefined;

  constructor(private workmgmtSvc: WorkmgmtService) {}
  ngOnInit(): void {
    this.fetchTimeSheetDetails(this.employeeId, this.todaysDate);
  }

  onApprove() {
    if (this.timeSheet) {
      let timesheet: TimeSheet = {
        id: this.timeSheet.id,
        timeSheetDate: this.timeSheet.timeSheetDate,
        status: 'approved',
        employeeId: this.timeSheet.employeeId,
        timeSheetDetails: this.timeSheet.timeSheetDetails,
        statusChangedDate: this.todaysDate,
      };

      this.workmgmtSvc
        .changeTimeSheetStatus(timesheet.id, timesheet)
        .subscribe((res) => {
          if (res) {
            alert('status  updated');
            if (this.timeSheet) this.timeSheet.status = 'approved';
          }
        });
    }
  }
  onReject() {
    if (this.timeSheet) {
      let timesheet: TimeSheet = {
        id: this.timeSheet.id,
        timeSheetDate: this.timeSheet.timeSheetDate,
        status: 'rejected',
        employeeId: this.timeSheet.employeeId,
        timeSheetDetails: this.timeSheet.timeSheetDetails,
        statusChangedDate: this.todaysDate,
      };

      this.workmgmtSvc
        .changeTimeSheetStatus(this.timeSheet.id, timesheet)
        .subscribe((res) => {
          if (res) {
            alert('status  updated');
            if (this.timeSheet) this.timeSheet.status = 'rejected';
          }
        });
    }
  }

  fetchTimeSheetDetails(employeeId: number, date: string) {
    this.workmgmtSvc.getTimeSheet(employeeId, date).subscribe((res) => {
      this.totalminutes = 0;
      this.timeSheet = res;

      this.timeSheet.timeSheetDetails.forEach((entry) => {
        entry = this.workmgmtSvc.getDurationOfWork(entry);
        this.totalminutes += entry.durationInMinutes;
      });
      this.totalminutes = this.workmgmtSvc.convertMinutesintoHours(
        this.totalminutes
      );

      console.log(res);
    });
  }
}
