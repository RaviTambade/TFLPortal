import { Component } from '@angular/core';
import { Timesheet } from 'src/app/shared/Entities/Timesheetmgmt/timesheet';
import { TimesheetEntry } from 'src/app/shared/Entities/Timesheetmgmt/timesheetEntry';
import { TimesheetService } from 'src/app/shared/services/Timesheet/timesheet.service';

@Component({
  selector: 'mytimesheet',
  templateUrl: './mytimesheet.html',
})
export class MyTimesheet {
  timesheet: Timesheet={
    id: 0,
    status: '',
    createdOn: '',
    modifiedOn: '',
    createdBy: 0,
    totalHours: 0
  };
  timesheetId: number = 0;

  timesheetEntries: TimesheetEntry[] = [];

  constructor(
    private timesheetService: TimesheetService,
  ) {}

  ngOnInit(): void {
    this.timesheetId = 3;
    this.timesheetService.getTimeSheetById(this.timesheetId).subscribe((res) => {
      this.timesheet = res;
    });
    this.timesheetService.getEntriesOfTimesheet(this.timesheetId).subscribe((res) => {
      this.timesheetEntries = res;
    });
    
  }
}
