import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { TimeSheet } from 'src/app/time-sheet/models/timesheet';
import { TimesheetEmployee } from 'src/app/time-sheet/models/TimesheetView';
import { TimeSheetEntry } from 'src/app/time-sheet/models/TimeSheetDetails';

import { TimeSheetService } from 'src/app/time-sheet/services/time-sheet.service';

@Component({
  selector: 'app-insert-time-sheet',
  templateUrl: './insert-time-sheet.component.html',
  styleUrls: ['./insert-time-sheet.component.css'],
})
export class InsertTimeSheetComponent implements OnInit {
  // timeSheetId!: number;
  // timeSheetEntries: TimeSheetEntry[] = [];
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

  onRemoveTimeSheetEntry(timeSheetEntryId: number) {
    this.timeSheetSvc
      .removeTimeSheetEntry(timeSheetEntryId)
      .subscribe((res) => {
        if (res) {
          this.fetchTimeSheetEntries(this.employeeId, this.todaysDate);
          console.log('record deleted');
        }
      });
  }

  onRemoveAllTimeSheetEntries(timeSheetId: number) {
    this.timeSheetSvc
      .removeAllTimeSheetEntries(timeSheetId)
      .subscribe((res) => {
        if (res) {
          if (this.timeSheet) this.timeSheet.timeSheetEntries = [];
        }
      });
  }

  onSubmit() {
    if (this.timeSheet) {
      let timesheet: TimeSheet = {
        id: this.timeSheet?.id,
        timeSheetDate: this.timeSheet.timeSheetDate ,
        status: 'Submitted',
        employeeId: this.timeSheet.employeeId,
        timeSheetEntries: this.timeSheet.timeSheetEntries,
        statusChangedDate: this.todaysDate,
      };

      this.timeSheetSvc
        .changeTimeSheetStatus(this.timeSheet.id, timesheet)
        .subscribe((res) => {
          alert('timesheet added');
        });
    }
  }

  onClickAddTimesheetEntry() {
    this.showaddTimesheetEntry = true;
  }
  onCloseAddPopup() {
    this.showaddTimesheetEntry = false;
  }

  onClickUpdateTimesheetEntry(timeSheetEntry: TimeSheetEntry) {
    let newentry = { ...timeSheetEntry };
    this.selectedTimeSheetEntrytoUpdate = newentry;
    this.showupdateTimesheetEntry = true;
  }

  onCloseUpdatePopup() {
    this.showupdateTimesheetEntry = false;
    this.selectedTimeSheetEntrytoUpdate = undefined;
  }

  fetchTimeSheetEntries(employeeId: number, date: string) {
    this.timeSheetSvc.getTimeSheet(employeeId, date).subscribe((res) => {
      if (res.id == 0) {
        this.timeSheetSvc.insertTimeSheet(employeeId, date).subscribe((res) => {
          if (res) {
            this.fetchTimeSheetEntries(employeeId, date);
          }
        });
        return;
      }

      this.totalminutes = 0;
      this.timeSheet = res;

      console.log('🚀 ~ this.timeSheetSvc.getTimeSheet ~ timeSheetId:', res.id);

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

  onAddStateChange(isupdated: boolean) {
    if (isupdated) {
      this.fetchTimeSheetEntries(this.employeeId, this.todaysDate);
    }
    this.showaddTimesheetEntry = false;
  }

  onUpdateStateChange(isupdated: boolean) {
    if (isupdated) {
      this.fetchTimeSheetEntries(this.employeeId, this.todaysDate);
    }
    this.showupdateTimesheetEntry = false;
    this.selectedTimeSheetEntrytoUpdate = undefined;
  }
}
