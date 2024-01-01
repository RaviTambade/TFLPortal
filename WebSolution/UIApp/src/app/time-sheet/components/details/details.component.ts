import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { WorkmgmtService } from 'src/app/shared/services/workmgmt.service';
import { TimeSheetDetailView } from '../../models/timesheet-detail-view';
import { ActivatedRoute, Router } from '@angular/router';
import { LocalStorageKeys } from 'src/app/shared/Enums/local-storage-keys';
import { Timesheet } from '../../models/timesheet';
import { TimeSheetStatus } from '../../models/timesheetstatus';
import { TimesheetView } from '../../models/timesheetview';
@Component({
  selector: 'timesheet-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
})
export class DetailsComponent implements OnInit {
  totalminutes: any = 0;
  // employeeId: number = 0;
  timesheet: TimesheetView | undefined;
  timeSheetStauts = TimeSheetStatus;
  timesheetId:number=0;

  constructor(
    private workmgmtSvc: WorkmgmtService,
    private route: ActivatedRoute,
    private router:Router
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.timesheetId=Number(params.get('id'));
        this.fetchTimeSheet(this.timesheetId);
      }
    );
  }

  onRemoveTimeSheetDetails(timesheetDetailsId: number) {
    this.workmgmtSvc
      .removeTimeSheetDetails(timesheetDetailsId)
      .subscribe((res) => {
        if (res) {
          this.fetchTimeSheet(this.timesheetId);
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
        statusChangedDate: new Date().toISOString().slice(0,10),
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
    this.router.navigate(['../../addentry',this.timesheetId],{relativeTo:this.route})
 
  }




  fetchTimeSheet(timesheetId: number) {
    this.workmgmtSvc.getTimeSheetById(timesheetId).subscribe((res) => {  
      this.totalminutes = 0;
        this.timesheet = res; 

        this.timesheet.timeSheetDetails.forEach((timeSheetDetail) => {
          timeSheetDetail = this.workmgmtSvc.getDurationOfWork(timeSheetDetail);
          this.totalminutes += timeSheetDetail.durationInMinutes;
        });
        this.totalminutes = this.workmgmtSvc.convertMinutesintoHours(
          this.totalminutes
        );
    });
  }


  isTimeSheetEditable() {
    return (
      this.timesheet?.status == this.timeSheetStauts.inprogress ||
      this.timesheet?.status == this.timeSheetStauts.rejected
    );
  }

 
}
