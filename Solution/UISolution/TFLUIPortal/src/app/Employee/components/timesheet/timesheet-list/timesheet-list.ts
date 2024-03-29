import { Component } from '@angular/core';
import { TimesheetService } from 'src/app/shared/services/Timesheet/timesheet.service';
import { Timesheet } from 'src/app/shared/Entities/Timesheetmgmt/timesheet';
import { TimeSheetStatus } from 'src/app/shared/Entities/Timesheetmgmt/timesheetstatus';

@Component({
  selector: 'timesheet-list',
  templateUrl: './timesheet-list.html',
})
export class TimesheetList {
  employeeId: number = 10;
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
    // this.employeeId=Number(localStorage.getItem(LocalStorageKeys.employeeId))
    // console.log("employeeId",this.employeeId);
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
        .getAllTimeSheetsOfEmployee(this.employeeId,this.fromDate, this.toDate)
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
