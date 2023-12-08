import { Component, OnInit } from '@angular/core';
import { WorkmgmtService } from 'src/app/shared/services/workmgmt.service';
import { TimeSheetDetails } from 'src/app/time-sheet/models/TimeSheetDetails';
import { TimesheetView } from 'src/app/time-sheet/models/TimesheetView';
import { TimeSheet } from 'src/app/time-sheet/models/timesheet';

@Component({
  selector: 'app-insert-time-sheet',
  templateUrl: './insert-time-sheet.component.html',
  styleUrls: ['./insert-time-sheet.component.css'],
})

export class InsertTimeSheetComponent implements OnInit {
  totalminutes: any = 0;
  showaddTimeSheetDetails: boolean = false;
  showupdateTimeSheetDetails: boolean = false;
  todaysDate: string = new Date().toISOString().slice(0, 10);
  employeeId = 10;
  timeSheet: TimesheetView | undefined;
  selectedTimeSheetDetailstoUpdate: TimeSheetDetails | undefined;

  constructor(private workmgmtSvc: WorkmgmtService) {}

  ngOnInit(): void {
    this.fetchTimeSheet(this.employeeId, this.todaysDate);
  }

  onRemoveTimeSheetDetails(timesheetDetailsId: number) {
    this.workmgmtSvc.removeTimeSheetDetails(timesheetDetailsId).subscribe((res) => {
      if (res) {
        this.fetchTimeSheet(this.employeeId, this.todaysDate);
      }
    });
  }

  onRemoveAllTimeSheetDetails(timeSheetId: number) {
    this.workmgmtSvc
      .removeAllTimeSheetDetails(timeSheetId)
      .subscribe((res) => {
        if (res) {
          if (this.timeSheet) {
            this.timeSheet.timeSheetDetails = [];
            this.totalminutes = 0;
          }
        }
      });
  }

  onSubmit() {
    if (this.timeSheet) {
      let timesheet: TimeSheet = {
        id: this.timeSheet?.id,
        timeSheetDate: this.timeSheet.timeSheetDate,
        status: 'Submitted',
        employeeId: this.timeSheet.employeeId,
        timeSheetDetails: this.timeSheet.timeSheetDetails,
        statusChangedDate: this.todaysDate,
      };

      this.workmgmtSvc
        .changeTimeSheetStatus(this.timeSheet.id, timesheet)
        .subscribe((res) => {
          alert('timesheet added');
        });
    }
  }

  onClickAddTimeSheetDetails() {
    this.showaddTimeSheetDetails = true;
  }
  onCloseAddPopup() {
    this.showaddTimeSheetDetails = false;
  }

  onClickUpdateTimeSheetDetails(timesheetDetails: TimeSheetDetails) {
    let newtimeSheetDetail = { ...timesheetDetails };
    this.selectedTimeSheetDetailstoUpdate = newtimeSheetDetail;
    this.showupdateTimeSheetDetails = true;
  }

  onCloseUpdatePopup() {
    this.showupdateTimeSheetDetails = false;
    this.selectedTimeSheetDetailstoUpdate = undefined;
  }

  fetchTimeSheet(employeeId: number, date: string) {
    this.workmgmtSvc.getTimeSheet(employeeId, date).subscribe((res) => {
      if (res.id == 0) {
        const timesheetInsertModel = {
          timeSheetDate: new Date().toISOString().slice(0, 10),
          employeeId: this.employeeId,
        }
        this.workmgmtSvc.addTimeSheet(timesheetInsertModel).subscribe((res) => {
          if (res) {
            this.fetchTimeSheet(employeeId, date);
          }
        });
        return;
      }

      this.totalminutes = 0;
      this.timeSheet = res;


      this.timeSheet.timeSheetDetails.forEach((timeSheetDetail) => {
        timeSheetDetail = this.workmgmtSvc.getDurationOfWork(timeSheetDetail);
        this.totalminutes += timeSheetDetail.durationInMinutes;
      });
      this.totalminutes = this.workmgmtSvc.convertMinutesintoHours(
        this.totalminutes
      );

    });
  }

  onAddStateChange(isupdated: boolean) {
    if (isupdated) {
      this.fetchTimeSheet(this.employeeId, this.todaysDate);
    }
    this.showaddTimeSheetDetails = false;
  }

  onUpdateStateChange(isupdated: boolean) {
    if (isupdated) {
      this.fetchTimeSheet(this.employeeId, this.todaysDate);
    }
    this.showupdateTimeSheetDetails = false;
    this.selectedTimeSheetDetailstoUpdate = undefined;
  }
}
