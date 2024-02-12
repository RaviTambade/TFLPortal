import { Component } from '@angular/core';
import { Timesheet } from 'src/app/shared/Entities/Timesheetmgmt/timesheet';
import { TimesheetEntry } from 'src/app/shared/Entities/Timesheetmgmt/timesheetEntry';
import { TimesheetEntryModel } from 'src/app/shared/Models/Timesheetmgmt/TimesheetEntryModel';
import { TasksManagementService } from 'src/app/shared/services/TaskMgmt/tasks-management.service';
import { TimesheetService } from 'src/app/shared/services/Timesheet/timesheet.service';

@Component({
  selector: 'mytimesheet',
  templateUrl: './mytimesheet.html',
})
export class MyTimesheet {
  timesheet: Timesheet = {
    id: 0,
    status: '',
    createdOn: '',
    modifiedOn: '',
    createdBy: 0,
    totalHours: 0,
  };
  timesheetId: number = 0;

  timesheetEntries: TimesheetEntryModel[] = [];

  constructor(
    private timesheetService: TimesheetService,
    private taskSvc: TasksManagementService
  ) {}

  ngOnInit(): void {
    this.timesheetId = 3;
    this.timesheetService
      .getTimeSheetById(this.timesheetId)
      .subscribe((timesheet) => {
        this.timesheet = timesheet;
      });
    this.timesheetService
      .getEntriesOfTimesheet(this.timesheetId)
      .subscribe((timesheetEntries) => {
        timesheetEntries.forEach((entry) => {
          let timesheetEntry: TimesheetEntryModel = {
            id: entry.id,
            taskId: entry.taskId,
            fromTime: entry.fromTime,
            toTime: entry.toTime,
            timesheetId: entry.timesheetId,
            hours: entry.hours,
            taskTitle: '',
          };
          this.timesheetEntries.push(timesheetEntry);
        });
        this.timesheetEntries.forEach((entry) =>
          this.taskSvc.getTaskDetails(entry.taskId).subscribe((task) => {
            entry.taskTitle = task.title;
          })
        );
      });
  }
}
