import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { TimeSheet } from 'src/app/time-sheet/models/timesheet';
import { TimeSheetEntry } from 'src/app/time-sheet/models/timesheetentry';

import { TimeSheetService } from 'src/app/time-sheet/services/time-sheet.service';

@Component({
  selector: 'app-insert-time-sheet',
  templateUrl: './insert-time-sheet.component.html',
  styleUrls: ['./insert-time-sheet.component.css'],
})
export class InsertTimeSheetComponent implements OnInit {
  timeSheetId!: number;
  timeSheetEntries: TimeSheetEntry[] = [];
  totalminutes: any = 0;
  showaddTimesheetEntry: boolean = false;
  todaysDate: string = new Date().toISOString().slice(0, 10);
  employeeId = 10;

  constructor(private timeSheetSvc: TimeSheetService) {}
  ngOnInit(): void {

    this.timeSheetSvc
      .getTimeSheetId(this.employeeId, this.todaysDate)
      .subscribe((res) => {
        this.timeSheetId = res;
        this.fetchTimeSheetEntries(this.timeSheetId);
      });
  }

  onSubmit() {
    let timesheet: TimeSheet = {
      id: this.timeSheetId,
      timeSheetDate: this.todaysDate,
      status: 'Submitted',
      employeeId: 10,
      timeSheetEntries: this.timeSheetEntries,
      statusChangedDate: this.todaysDate,
    };

    this.timeSheetSvc
      .changeTimeSheetStatus(this.timeSheetId, timesheet)
      .subscribe((res) => {
        alert('timesheet added');
      });
  }

  onClickAddTimesheetEntry() {
    this.showaddTimesheetEntry = true;
  }
  onClosePopup() {
    this.showaddTimesheetEntry = false;
  }

  fetchTimeSheetEntries(timeSheetId: number) {
    this.timeSheetSvc.getTimeSheetDetails(timeSheetId).subscribe((res) => {
      this.totalminutes = 0;
      this.timeSheetEntries = res;
      this.timeSheetEntries.forEach((entry) => {
        this.getDuration(entry);
        this.totalminutes += entry.durationInMinutes;
      });
      this.totalminutes = this.convertMinutesintoHours(this.totalminutes);

      console.log(res);
    });
  }

  onAddStateChange(isupdated: boolean) {
    if (isupdated) {
      this.fetchTimeSheetEntries(this.timeSheetId);
    }
    this.showaddTimesheetEntry = false;
  }

  getDuration(timeSheetEntry: TimeSheetEntry) {
    let startTime = timeSheetEntry.fromTime;
    let endTime = timeSheetEntry.toTime;
    console.log(endTime);
    if (startTime != '' && endTime != '') {
      const startDate = new Date(`1970-01-01T${startTime}`);
      const endDate = new Date(`1970-01-01T${endTime}`);

      const durationMilliseconds = endDate.getTime() - startDate.getTime();
      timeSheetEntry.durationInMinutes = durationMilliseconds / (1000 * 60);
      timeSheetEntry.durationInHours = this.convertMinutesintoHours(
        timeSheetEntry.durationInMinutes
      );
    }
  }
  convertMinutesintoHours(minutes: number) {
    let str = `${Math.floor(minutes / 60)}h: ${minutes % 60}m`;
    return str;
  }
}
