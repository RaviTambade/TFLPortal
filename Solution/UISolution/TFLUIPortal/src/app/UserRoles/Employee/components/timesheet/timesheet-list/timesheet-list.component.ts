import { Component } from '@angular/core';

import { TimesheetService } from 'src/app/shared/services/Timesheet/timesheet.service';
import { LocalStorageKeys } from 'src/app/shared/enums/local-storage-keys';
import { Timesheet } from 'src/app/shared/Entities/timesheet';
import { TimeSheetStatus } from 'src/app/shared/Entities/timesheetstatus';

@Component({
  selector: 'app-timesheet-list',
  templateUrl: './timesheet-list.component.html',
})
export class TimesheetListComponent {
  employeeId: number = 0;
  timesheets: Timesheet[] = [];
  filteredTimesheets: Timesheet[] = [];
  pagedFilterTimesheets: Timesheet[] = [];


  fromDate: string | undefined;
  toDate: string | undefined;
  intervals: string[] = ['week', 'month'];
  selectedInterval: string = this.intervals[0];
  timesheetStatus: string[] = [TimeSheetStatus.inprogress,TimeSheetStatus.submitted,TimeSheetStatus.rejected ,TimeSheetStatus.approved];
  selectedStatus: { [key: string]: boolean } = {};


  constructor(private timesheetService: TimesheetService) {}

  ngOnInit(): void {
    this.employeeId=Number(localStorage.getItem(LocalStorageKeys.employeeId))
    this.selectedStatus[this.timesheetStatus[0]] = true;
    this.onIntervalChange()
  }

  onIntervalChange() {
    switch (this.selectedInterval) {
      case 'week':
        const week = this.timesheetService.getWeekInfo(new Date());
        this.fromDate = week.startDate;
        this.toDate = week.endDate;
        break;

      case 'month':
        const currentmonth = new Date().getMonth();
        this.fromDate = this.timesheetService.firstDayOfMonth(currentmonth);
        this.toDate = this.timesheetService.lastDayofMonth(currentmonth);
        break;

    }
    if (this.fromDate && this.toDate) {
      this.timesheetService
        .getAllTimeSheets(this.employeeId,this.fromDate, this.toDate)
        .subscribe((res) => {
          this.timesheets = res;
          this.filteredTimesheets=res;
          this.onStatusChange();
        });
    }
  }

  onStatusChange(){
    const selectedStatusArray = Object.keys(this.selectedStatus).filter(status => this.selectedStatus[status]);
    console.log('Selected Status:', selectedStatusArray);
    this.filteredTimesheets=this.timesheets.filter((timesheet)=> selectedStatusArray.includes(timesheet.status));  
  }

  onReceivePagedData(e:any){
    this.pagedFilterTimesheets=e;
  }

}
