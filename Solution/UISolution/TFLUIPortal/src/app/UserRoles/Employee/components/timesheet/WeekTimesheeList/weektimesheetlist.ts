import { Component } from '@angular/core';

import { TimesheetService } from 'src/app/shared/services/Timesheet/timesheet.service';
import { LocalStorageKeys } from 'src/app/shared/enums/local-storage-keys';
import { Timesheet } from 'src/app/shared/Entities/Timesheetmgmt/timesheet';
import { TimeSheetStatus } from 'src/app/shared/Entities/Timesheetmgmt/timesheetstatus';

@Component({
  selector: 'week-timesheet-list',
  templateUrl: './weektimesheetlist.html',
})
export class WeekTimesheetList {
  
  weekTimesheets: Timesheet[] = [];
  employeeId=10;
  fromDate: string | undefined;
  toDate: string | undefined;
   
 
  timesheetStatus: string[] = [TimeSheetStatus.inprogress,TimeSheetStatus.submitted,TimeSheetStatus.rejected ,TimeSheetStatus.approved];
 
  constructor(private timesheetSvc: TimesheetService) {}

  ngOnInit(): void {
       this.fromDate = "2024-01-01";
       this.toDate = "2024-01-10";
       this.timesheetSvc.getAllTimeSheetsOfEmployee(this.employeeId,this.fromDate, 
                                                    this.toDate)
       .subscribe((res) => {
                              this.weekTimesheets = res;
                            });
  }
}
