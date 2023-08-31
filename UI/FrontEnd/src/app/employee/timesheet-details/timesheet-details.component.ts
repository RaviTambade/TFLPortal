import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Timesheet } from 'src/app/models/timesheet';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-timesheet-details',
  templateUrl: './timesheet-details.component.html',
  styleUrls: ['./timesheet-details.component.css']
})
export class TimesheetDetailsComponent {
  @Input() timesheet: Timesheet | any;
  timesheetId: any | undefined;
  status: boolean | undefined;

  constructor(private svc: EmployeeService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.timesheetId = params.get('timesheetId')
    })
    this.svc.getTimesheet(this.timesheetId).subscribe((res) => {
      this.timesheet = res;
      console.log(res);
    })

  };

  delete() {
    console.log(this.timesheet.timesheetId);
    this.svc.deleteTimesheet(this.timesheet.timesheetId).subscribe((data) => {
      this.status = data;
      if (data) { alert("timesheet Deleted Successfully") }
      else {
        { alert("Error") }
      }
      console.log(data);
    })
  };

  onUpdateClick(timesheetId: number) {
    console.log(timesheetId);
    this.router.navigate(['./timesheet-edit', timesheetId]);
  };


}
