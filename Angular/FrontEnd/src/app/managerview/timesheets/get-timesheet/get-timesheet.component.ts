import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Timesheet } from '../timesheet';
import { ManagerviewService } from '../../managerview.service';
@Component({
  selector: 'gettimesheet',
  templateUrl: './get-timesheet.component.html',
  styleUrls: ['./get-timesheet.component.css']
})
export class GetTimesheetComponent implements OnInit {
  @Input() timesheetId: number | undefined;
  timesheet: Timesheet | undefined;

  @Output() sendTimesheet = new EventEmitter();
  constructor(private svc: ManagerviewService) { }

  ngOnInit(): void {
    if (this.timesheetId != undefined) {
      this.svc.getTimesheet(this.timesheetId).subscribe((response) => {
        this.timesheet = response;
        this.sendTimesheet.emit({ timesheet: this.timesheet });
        console.log(this.timesheet);

      })
    }
  }
  getTimesheetById(id: any) {
    this.svc.getTimesheet(id).subscribe((response) => {
      this.timesheet = response;
      this.sendTimesheet.emit({ timesheet: this.timesheet });
      console.log(this.timesheet);
    })
  }
}


