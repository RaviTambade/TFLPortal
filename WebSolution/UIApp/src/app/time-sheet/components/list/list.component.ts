import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Timesheet } from '../../models/timesheet';
import { WorkmgmtService } from 'src/app/shared/services/workmgmt.service';
import { TimesheetDuration } from '../../models/timesheetduratiom';
import { LocalStorageKeys } from 'src/app/shared/enums/local-storage-keys';

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

  constructor(private workmgmtSvc: WorkmgmtService) {}

  ngOnInit(): void {
    this.employeeId=Number(localStorage.getItem(LocalStorageKeys.employeeId))
    this.onIntervalChange();
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
      this.workmgmtSvc
        .getAllTimeSheets(this.employeeId, this.fromDate, this.toDate)
        .subscribe((res) => {
          this.timeSheets = res;
        });
    }
  }
}
