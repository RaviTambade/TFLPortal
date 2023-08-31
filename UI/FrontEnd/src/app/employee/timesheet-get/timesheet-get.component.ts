import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Timesheet } from 'src/app/models/timesheet';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-timesheet-get',
  templateUrl: './timesheet-get.component.html',
  styleUrls: ['./timesheet-get.component.css']
})
export class TimesheetGetComponent implements OnInit {
  @Input() timesheetId: number | undefined;
  timesheet: Timesheet | undefined;

  @Output() sendTimesheet = new EventEmitter();
  constructor(private svc: EmployeeService) { }


  ngOnInit(): void {
    if (this.timesheetId != undefined) {
      this.svc.getTimesheet(this.timesheetId).subscribe((response) => {
        this.timesheet = response;
        this.sendTimesheet.emit({ timesheet: this.timesheet });
        console.log(this.timesheet)
      })
    };

  }

  getTimesheetById(id: any) {
    this.svc.getTimesheet(id).subscribe((response) => {
      this.timesheet = response;
      this.sendTimesheet.emit({ timesheet: this.timesheet });
      console.log(this.timesheet);
    })
  }
}


