import { Component,  OnInit } from '@angular/core';
import { WorkmgmtService } from 'src/app/shared/services/workmgmt.service';
import { TimesheetDuration } from '../../models/timesheetduratiom';
import { LocalStorageKeys } from 'src/app/shared/enums/local-storage-keys';
import { TimeSheetStatus } from '../../models/timesheetstatus';

@Component({
  selector: 'timesheet-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  employeeId: number = 0;
  timeSheets: TimesheetDuration[] = [];

  fromDate: string | undefined;
  toDate: string | undefined;
  intervals: string[] = ['week', 'month'];
  selectedInterval: string = this.intervals[0];
  timesheetStatus: string[] = [TimeSheetStatus.inprogress,TimeSheetStatus.submitted,TimeSheetStatus.rejected ,TimeSheetStatus.approved];
  // selectedStatus: string = this.timesheetStatus[0];
  selectedStatus: { [key: string]: boolean } = {};


  constructor(private workmgmtSvc: WorkmgmtService) {}

  ngOnInit(): void {
    this.employeeId=Number(localStorage.getItem(LocalStorageKeys.employeeId))
    this.selectedStatus[this.timesheetStatus[0]] = true;
    this.onIntervalChange()
      }

  onIntervalChange() {
    switch (this.selectedInterval) {
      case 'week':
        const week = this.workmgmtSvc.getWeekInfo(new Date());
        this.fromDate = week.startDate;
        this.toDate = week.endDate;
        break;

      case 'month':
        const currentmonth = new Date().getMonth();
        this.fromDate = this.workmgmtSvc.firstDayOfMonth(currentmonth);
        this.toDate = this.workmgmtSvc.lastDayofMonth(currentmonth);
        break;

    }
    if (this.fromDate && this.toDate) {
      const selectedStatusArray = Object.keys(this.selectedStatus).filter(status => this.selectedStatus[status]);
      console.log('Selected Status:', selectedStatusArray);
      this.workmgmtSvc
        .getAllTimeSheets(this.employeeId, selectedStatusArray, this.fromDate, this.toDate)
        .subscribe((res) => {
          this.timeSheets = res;
        });
    }
  }
}
