import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LocalStorageKeys } from 'src/app/shared/enums/local-storage-keys';
import { TimesheetService } from 'src/app/shared/services/Timesheet/timesheet.service';


@Component({
  selector: 'app-create-timesheet',
  templateUrl: './create-timesheet.component.html',
})
export class CreateTimesheetComponent implements OnInit {
  date: string | undefined;
  employeeId: number | undefined;
  constructor(
    private timesheetService: TimesheetService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.employeeId = Number(localStorage.getItem(LocalStorageKeys.employeeId));
    this.date = new Date().toISOString().slice(0, 10);
    this.getOrCreateTimesheet();
  }

  CreateTimesheet() {
    const timesheetInsertModel = {
      timesheetDate: this.date,
      employeeId:this.employeeId,
    };
    this.timesheetService.addTimeSheet(timesheetInsertModel).subscribe({
      next: (res) => {
        console.log(res);
      },
      complete:()=> this.getOrCreateTimesheet()
    });
  }


  getOrCreateTimesheet() {
    if (this.employeeId && this.date)
      this.timesheetService
        .getTimeSheetOfEmployee(this.employeeId, this.date)
        .subscribe((res) => {
          console.log(res);
          if ( res && res.id!= 0) {
            this.router.navigate(['../details', res], {
              relativeTo: this.route,
            });
          } else {
            this.CreateTimesheet();
          }
        });
  }
}
