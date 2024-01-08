import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LocalStorageKeys } from 'src/app/shared/enums/local-storage-keys';
import { WorkmgmtService } from 'src/app/shared/services/workmgmt.service';

@Component({
  selector: 'app-create-timesheet',
  templateUrl: './create-timesheet.component.html',
  styleUrls: ['./create-timesheet.component.css'],
})
export class CreateTimesheetComponent implements OnInit {
  date: string | undefined;
  employeeId: number | undefined;
  constructor(
    private workmgmtSvc: WorkmgmtService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.employeeId = Number(localStorage.getItem(LocalStorageKeys.employeeId));
    this.date = new Date().toISOString().slice(0, 10);
    this.getTimeSheetId();
  }

  CreateTimesheet() {
    const timesheetInsertModel = {
      timesheetDate: this.date,
      employeeId:this.employeeId,
    };
    this.workmgmtSvc.addTimeSheet(timesheetInsertModel).subscribe({
      next: (res) => {
        console.log(res);
      },
      complete:()=> this.getTimeSheetId()
    });
  }


  getTimeSheetId() {
    if (this.employeeId && this.date)
      this.workmgmtSvc
        .getTimeSheetId(this.employeeId, this.date)
        .subscribe((res) => {
          console.log(res);
          if ( res && res!= 0) {
            this.router.navigate(['../details', res], {
              relativeTo: this.route,
            });
          } else {
            this.CreateTimesheet();
          }
        });
  }
}
