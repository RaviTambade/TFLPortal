import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LocalStorageKeys } from 'src/app/shared/enums/local-storage-keys';
import { WorkmgmtService } from 'src/app/shared/services/workmgmt.service';

@Component({
  selector: 'app-create-timesheet',
  templateUrl: './create-timesheet.component.html',
  styleUrls: ['./create-timesheet.component.css'],
})
export class CreateTimesheetComponent {
  date: string | undefined;
  constructor(
    private workmgmtSvc: WorkmgmtService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  CreateTimesheet() {
    const timesheetInsertModel = {
      timesheetDate: this.date,
      employeeId: Number(localStorage.getItem(LocalStorageKeys.employeeId)),
    };
    this.workmgmtSvc.addTimeSheet(timesheetInsertModel).subscribe((res) => {
      if (res) {
        this.router.navigate(['../list'] ,{relativeTo:this.route});
      }
    });
  }
  onCancelClick() {
    this.router.navigate(['../list'] ,{relativeTo:this.route});
  }
}
