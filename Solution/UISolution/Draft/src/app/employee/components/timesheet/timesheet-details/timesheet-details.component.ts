import { Component } from '@angular/core';
import { Timesheet } from '../../../../shared/models/timesheet';
import { ActivatedRoute, Router } from '@angular/router';
import { TimesheetService } from '../../../../shared/services/Timesheet/timesheet.service';
import { TimesheetEntry } from '../../../../shared/models/timesheetEntry';

@Component({
  selector: 'app-timesheet-details',
  templateUrl: './timesheet-details.component.html',
  styleUrls: ['./timesheet-details.component.css'],
})
export class TimesheetDetailsComponent {
  totalminutes: any = 0;
  timesheet: Timesheet={
    id: 0,
    status: '',
    createdOn: '',
    modifiedOn: '',
    createdBy: 0,
    totalHours: 0
  };
  timesheetId: number = 0;

  timesheetEntries: TimesheetEntry[] = [];

  constructor(
    private timesheetSvc: TimesheetService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    // this.route.paramMap.subscribe((params) => {
    //   this.timesheetId = Number(params.get('id'));
    this.timesheetId = 3;
    this.timesheetSvc.getTimeSheetById(this.timesheetId).subscribe((res) => {
      this.timesheet = res;
    });
    this.fetchTimeSheetEntries(this.timesheetId);
    // });
  }

  onRemovetimesheetEntry(timesheetEntryId: number) {
    this.timesheetSvc
      .removeTimeSheetEntry(timesheetEntryId)
      .subscribe((res) => {
        if (res) {
          this.fetchTimeSheetEntries(this.timesheetId);
        }
      });
  }

  onRemoveAllTimeSheetEntries(timesheetId: number) {
    this.timesheetSvc.removeAllTimsheetEntries(timesheetId).subscribe((res) => {
      // if (res) {
      // }
    });
  }

  onSubmit() {
    if (this.timesheet) {
      let timesheet: Timesheet = {
        id: this.timesheet?.id,
        createdOn: this.timesheet.createdOn,
        status: 'Submitted',
        createdBy: this.timesheet.createdBy,
        modifiedOn: new Date().toISOString().slice(0, 10),
        totalHours: this.timesheet.totalHours,
      };

      this.timesheetSvc
        .changeTimeSheetStatus(this.timesheet.id, timesheet)
        .subscribe((res) => {
          alert('timesheet added');
        });
    }
  }

  onClickAddTimeSheetEntry() {
    this.router.navigate(['../../addentry', this.timesheetId], {
      relativeTo: this.route,
    });
  }

  fetchTimeSheetEntries(timesheetId: number) {
    this.timesheetSvc.getTimesheetEntries(timesheetId).subscribe((res) => {
      this.timesheetEntries = res;
    });
  }
}
