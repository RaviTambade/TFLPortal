import { Component, Input } from '@angular/core';

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
 @Input() employeeId:number=0;
 @Input() fromDate: string ='';
 @Input() toDate: string ='';
   
 
  timesheetStatus: string[] = [TimeSheetStatus.inprogress,TimeSheetStatus.submitted,TimeSheetStatus.rejected ,TimeSheetStatus.approved];
 
  constructor(private timesheetSvc: TimesheetService) {}

  ngOnInit(): void {
       this.timesheetSvc.getAllTimeSheetsOfEmployee(this.employeeId,this.fromDate, 
                                                    this.toDate)
       .subscribe((res) => {
                              this.weekTimesheets = res;
                            });
  }
}
