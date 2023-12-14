import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { LocalStorageKeys } from 'src/app/shared/Enums/local-storage-keys';
import { JwtService } from 'src/app/shared/services/jwt.service';
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
  @Input() date: string = new Date().toISOString().slice(0, 10);
  employeeId :number=0;
  timeSheet: TimesheetView | undefined;
  selectedTimeSheetDetailstoUpdate: TimeSheetDetails | undefined;

  isTimeSheetCreated=false;

  constructor(private workmgmtSvc: WorkmgmtService) {}

  ngOnInit(): void {
  this.employeeId=Number(localStorage.getItem(LocalStorageKeys.employeeId));
    this.fetchTimeSheet(this.employeeId, this.date);
  }

  ngOnChanges(changes: SimpleChanges) {
    this.date=changes['date'].currentValue;
    this.fetchTimeSheet(this.employeeId, changes['date'].currentValue);
    console.log("🚀 ~ ngOnChanges ~ changes['date'].currentValue:", changes['date'].currentValue);
  }
  onRemoveTimeSheetDetails(timesheetDetailsId: number) {
    this.workmgmtSvc.removeTimeSheetDetails(timesheetDetailsId).subscribe((res) => {
      if (res) {
        this.fetchTimeSheet(this.employeeId, this.date);
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
        statusChangedDate: this.date,
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
      console.log("🚀 ~ this.workmgmtSvc.getTimeSheet ~ res:", res);
      if (res.id == 0) {
       this.isTimeSheetCreated=false;
      }
      else{
       this.isTimeSheetCreated=true;
        this.totalminutes = 0;
        this.timeSheet = res;
  
  
        this.timeSheet.timeSheetDetails.forEach((timeSheetDetail) => {
          timeSheetDetail = this.workmgmtSvc.getDurationOfWork(timeSheetDetail);
          this.totalminutes += timeSheetDetail.durationInMinutes;
        });
        this.totalminutes = this.workmgmtSvc.convertMinutesintoHours(
          this.totalminutes
        );
  
      }
    });
  }

  CreateTimesheet(){
    const timesheetInsertModel = {
      timeSheetDate: this.date,
      employeeId: this.employeeId,
    }
    this.workmgmtSvc.addTimeSheet(timesheetInsertModel).subscribe((res) => {
      if (res) {
        this.fetchTimeSheet(timesheetInsertModel.employeeId, timesheetInsertModel.timeSheetDate);
        console.log("🚀 ~ this.workmgmtSvc.addTimeSheet ~ fetchTimeSheet:");
      }
    });
    return;
  }

  onAddStateChange(isupdated: boolean) {
    if (isupdated) {
      this.fetchTimeSheet(this.employeeId, this.date);
    }
    this.showaddTimeSheetDetails = false;
  }

  onUpdateStateChange(isupdated: boolean) {
    if (isupdated) {
      this.fetchTimeSheet(this.employeeId, this.date);
    }
    this.showupdateTimeSheetDetails = false;
    this.selectedTimeSheetDetailstoUpdate = undefined;
  }
}
