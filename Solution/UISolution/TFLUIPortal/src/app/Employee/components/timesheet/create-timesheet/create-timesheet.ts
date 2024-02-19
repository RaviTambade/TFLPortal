import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LocalStorageKeys } from 'src/app/shared/enums/local-storage-keys';
import { TimesheetService } from 'src/app/shared/services/Timesheet/timesheet.service';


@Component({
  selector: 'create-timesheet',
  templateUrl: './create-timesheet.html',
})
export class CreateTimesheet implements OnInit {
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
  }

  onClickAdd() {
    const timesheetInsertModel = {
      timesheetDate: this.date,
      employeeId:this.employeeId,
    };
    this.timesheetService.addTimeSheet(timesheetInsertModel).subscribe({
      next: (res) => {
        console.log(res);
      },
    });
  }

  onClickCancel(){

  }

  
}
