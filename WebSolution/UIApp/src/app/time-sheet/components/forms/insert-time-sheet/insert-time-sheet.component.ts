import { Component, OnInit } from '@angular/core';
import { TimeSheetDetails } from 'src/app/time-sheet/models/TimeSheetDetails';
import { TimesheetView } from 'src/app/time-sheet/models/TimesheetView';
import { TimeSheet } from 'src/app/time-sheet/models/timesheet';
import { TimeSheetService } from 'src/app/time-sheet/services/time-sheet.service';

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

  constructor(private timeSheetSvc: TimeSheetService) { }

  ngOnInit(): void {
    this.fetchTimeSheet(this.employeeId, this.todaysDate);
  }

  onRemoveTimeSheetDetails(timesheetDetailsId: number) {
    this.timeSheetSvc.removeTimeSheetDetails(timesheetDetailsId).subscribe((res) => {
      if (res) {
        this.fetchTimeSheet(this.employeeId, this.todaysDate);
      }
    });
  }

  onRemoveAllTimeSheetDetails(timeSheetId: number) {
    this.timeSheetSvc
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

      this.timeSheetSvc
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
    this.timeSheetSvc.getTimeSheet(employeeId, date).subscribe((res) => {
      if (res.id == 0) {
        this.timeSheetSvc.addTimeSheet(employeeId, date).subscribe((res) => {
          if (res) {
            this.fetchTimeSheet(employeeId, date);
          }
        }); 
        return;
      }

      this.totalminutes = 0;
      this.timeSheet = res;


      this.timeSheet.timeSheetDetails.forEach((timeSheetDetail) => {
        timeSheetDetail = this.timeSheetSvc.getDurationOfWork(timeSheetDetail);
        this.totalminutes += timeSheetDetail.durationInMinutes;
      });
      this.totalminutes = this.timeSheetSvc.convertMinutesintoHours(
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
