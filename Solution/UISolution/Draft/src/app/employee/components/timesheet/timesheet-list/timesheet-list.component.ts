import { Component } from '@angular/core';
import { Timesheet } from '../../../../shared/models/timesheet';
import { TimeSheetStatus } from '../../../../shared/models/timesheetstatus';
import { TimesheetService } from '../../../../shared/services/Timesheet/timesheet.service';
import { LocalStorageKeys } from '../../../../shared/enums/local-storage-keys';

@Component({
  selector: 'app-timesheet-list',
  templateUrl: './timesheet-list.component.html',
  styleUrls: ['./timesheet-list.component.css']
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


  constructor(private timesheetSvc: TimesheetService) {}

  ngOnInit(): void {
    this.employeeId=Number(localStorage.getItem(LocalStorageKeys.employeeId))
    this.selectedStatus[this.timesheetStatus[0]] = true;
    this.onIntervalChange()
  }

  onIntervalChange() {
    switch (this.selectedInterval) {
      case 'week':
        const week = this.timesheetSvc.getWeekInfo(new Date());
        this.fromDate = week.startDate;
        this.toDate = week.endDate;
        break;

      case 'month':
        const currentmonth = new Date().getMonth();
        this.fromDate = this.timesheetSvc.firstDayOfMonth(currentmonth);
        this.toDate = this.timesheetSvc.lastDayofMonth(currentmonth);
        break;

    }
    if (this.fromDate && this.toDate) {
      this.timesheetSvc
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
