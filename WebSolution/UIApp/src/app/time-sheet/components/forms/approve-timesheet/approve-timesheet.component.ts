import { Component } from '@angular/core';
import { TimeSheet } from 'src/app/time-sheet/models/timesheet';
import { TimesheetEmployee } from 'src/app/time-sheet/models/timesheet-employee';
import { TimeSheetEntry } from 'src/app/time-sheet/models/timesheetentry';
import { TimeSheetService } from 'src/app/time-sheet/services/time-sheet.service';

@Component({
  selector: 'app-approve-timesheet',
  templateUrl: './approve-timesheet.component.html',
  styleUrls: ['./approve-timesheet.component.css'],
})
export class ApproveTimesheetComponent {
  totalminutes: any = 0;
  showaddTimesheetEntry: boolean = false;
  showupdateTimesheetEntry: boolean = false;
  todaysDate: string = new Date().toISOString().slice(0, 10);
  employeeId = 10;
  timeSheet: TimesheetEmployee | undefined;
  selectedTimeSheetEntrytoUpdate: TimeSheetEntry | undefined;

  constructor(private timeSheetSvc: TimeSheetService) {}
  ngOnInit(): void {
    this.fetchTimeSheetEntries(this.employeeId, this.todaysDate);
  }

  onApprove() {
    if (this.timeSheet) {
      let timesheet: TimeSheet = {
        id: this.timeSheet.id,
        timeSheetDate: this.timeSheet.timeSheetDate,
        status: 'approved',
        employeeId: this.timeSheet.employeeId,
        timeSheetEntries: this.timeSheet.timeSheetEntries,
        statusChangedDate: this.todaysDate,
      };

      this.timeSheetSvc
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
        timeSheetEntries: this.timeSheet.timeSheetEntries,
        statusChangedDate: this.todaysDate,
      };

      this.timeSheetSvc
        .changeTimeSheetStatus(this.timeSheet.id, timesheet)
        .subscribe((res) => {
          if (res) {
            alert('status  updated');
            if (this.timeSheet) this.timeSheet.status = 'rejected';
          }
        });
    }
  }

  fetchTimeSheetEntries(employeeId: number, date: string) {
    this.timeSheetSvc.getTimeSheet(employeeId, date).subscribe((res) => {
      this.totalminutes = 0;
      this.timeSheet = res;

      this.timeSheet.timeSheetEntries.forEach((entry) => {
        entry = this.timeSheetSvc.getDurationOfWork(entry);
        this.totalminutes += entry.durationInMinutes;
      });
      this.totalminutes = this.timeSheetSvc.convertMinutesintoHours(
        this.totalminutes
      );

      console.log(res);
    });
  }
}
