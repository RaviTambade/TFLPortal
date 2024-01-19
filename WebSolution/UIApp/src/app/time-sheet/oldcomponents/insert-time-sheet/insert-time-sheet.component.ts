import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LocalStorageKeys } from 'src/app/shared/enums/local-storage-keys';
import { WorkmgmtService } from 'src/app/shared/services/workmgmt.service';
import { TimeSheetStatus } from 'src/app/time-sheet/models/timesheetstatus';
import { TimesheetView } from 'src/app/time-sheet/models/timesheetview';
import { Timesheet } from 'src/app/time-sheet/models/timesheet';
import { TimeSheetDetailView } from 'src/app/time-sheet/models/timesheet-detail-view';

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
  toDaysdate: string = new Date().toISOString().slice(0, 10);
  employeeId: number = 0;
  timesheet: TimesheetView | undefined;
  selectedTimeSheetDetailstoUpdate: TimeSheetDetailView | undefined;
  isTimeSheetCreated = false;
  timeSheetStauts = TimeSheetStatus;

  constructor(
    private workmgmtSvc: WorkmgmtService,
    private route: ActivatedRoute,
    private router:Router
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      let dateparam = params.get('date');
      if (dateparam != null) {
        this.date = dateparam;
        this.employeeId = Number(
          localStorage.getItem(LocalStorageKeys.employeeId)
        );
        this.fetchTimeSheet(this.employeeId, this.date);
      }
    });
  }

  ngOnChanges(changes: SimpleChanges) {
    this.date = changes['date'].currentValue;
    this.fetchTimeSheet(this.employeeId, changes['date'].currentValue);
  }
  onRemoveTimeSheetDetails(timesheetDetailsId: number) {
    this.workmgmtSvc
      .removeTimeSheetDetails(timesheetDetailsId)
      .subscribe((res) => {
        if (res) {
          this.fetchTimeSheet(this.employeeId, this.date);
        }
      });
  }

  onRemoveAllTimeSheetDetails(timesheetId: number) {
    this.workmgmtSvc.removeAllTimeSheetDetails(timesheetId).subscribe((res) => {
      if (res) {
        if (this.timesheet) {
          this.timesheet.timeSheetDetails = [];
          this.totalminutes = 0;
        }
      }
    });
  }

  onSubmit() {
    if (this.timesheet) {
      let timesheet: Timesheet = {
        id: this.timesheet?.id,
        timesheetDate: this.timesheet.timesheetDate,
        status: 'Submitted',
        employeeId: this.timesheet.employeeId,
        statusChangedDate: this.date,
      };

      this.workmgmtSvc
        .changeTimeSheetStatus(this.timesheet.id, timesheet)
        .subscribe((res) => {
          alert('timesheet added');
          this.timesheet!.status=timesheet.status;
        });
    }
  }

  onClickAddTimeSheetDetails() {
    this.showaddTimeSheetDetails = true;
  }
  onCloseAddPopup() {
    this.showaddTimeSheetDetails = false;
  }

  onClickUpdateTimeSheetDetails(timesheetDetails: TimeSheetDetailView) {
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
        this.isTimeSheetCreated = false;
      } else {
        this.isTimeSheetCreated = true;
        this.totalminutes = 0;
        this.timesheet = res;

        this.timesheet.timeSheetDetails.forEach((timeSheetDetail) => {
          timeSheetDetail = this.workmgmtSvc.getDurationOfWork(timeSheetDetail);
          this.totalminutes += timeSheetDetail.durationInMinutes;
        });
        this.totalminutes = this.workmgmtSvc.convertMinutesintoHours(
          this.totalminutes
        );
      }
    });
  }

  CreateTimesheet() {
    const timesheetInsertModel = {
      timesheetDate: this.date,
      employeeId: this.employeeId,
    };
    this.workmgmtSvc.addTimeSheet(timesheetInsertModel).subscribe((res) => {
      if (res) {
        this.fetchTimeSheet(
          timesheetInsertModel.employeeId,
          timesheetInsertModel.timesheetDate
        );
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

  isTimeSheetEditable() {
    return (
      this.timesheet?.status == this.timeSheetStauts.inprogress ||
      this.timesheet?.status == this.timeSheetStauts.rejected
    );
  }

 
}