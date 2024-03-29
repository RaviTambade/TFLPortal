import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Timesheet } from 'src/app/shared/Entities/Timesheetmgmt/timesheet';
import { TimesheetEntry } from 'src/app/shared/Entities/Timesheetmgmt/timesheetEntry';
import { TimesheetService } from 'src/app/shared/services/Timesheet/timesheet.service';

@Component({
  selector: 'timesheet-details',
  templateUrl: './timesheet-details.html',
})
export class TimesheetDetails {
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
    private timesheetService: TimesheetService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    // this.route.paramMap.subscribe((params) => {
    //   this.timesheetId = Number(params.get('id'));
    this.timesheetId = 3;
    this.timesheetService.getTimeSheetById(this.timesheetId).subscribe((res) => {
      this.timesheet = res;
    });
    this.fetchTimeSheetEntries(this.timesheetId);
    // });
  }

  onRemovetimesheetEntry(timesheetEntryId: number) {
    this.timesheetService
      .removeTimeSheetEntry(timesheetEntryId)
      .subscribe((res) => {
        if (res) {
          this.fetchTimeSheetEntries(this.timesheetId);
        }
      });
  }

  onRemoveAllTimeSheetEntries(timesheetId: number) {
    this.timesheetService.removeAllTimsheetEntries(timesheetId).subscribe((res) => {
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

      this.timesheetService
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
    this.timesheetService.getEntriesOfTimesheet(timesheetId).subscribe((res) => {
      this.timesheetEntries = res;
    });
  }
}
