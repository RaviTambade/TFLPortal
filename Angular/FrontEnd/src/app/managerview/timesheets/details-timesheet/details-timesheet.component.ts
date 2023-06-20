import { Component, Input } from '@angular/core';
import { ManagerviewService } from '../../managerview.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Timesheet } from '../timesheet';

@Component({
  selector: 'detailstimesheet',
  templateUrl: './details-timesheet.component.html',
  styleUrls: ['./details-timesheet.component.css']
})
export class DetailsTimesheetComponent {



  @Input() timesheet: Timesheet | any;
  timesheetId: any | undefined;
  status: boolean | undefined;

  constructor(private svc: ManagerviewService, private route: ActivatedRoute, private router: Router) {

  }
  ngOnInit(): void {

    this.route.paramMap.subscribe((params) => {
      this.timesheetId = params.get('id')
    })
  }
  getById(timesheetId: any): void {
    this.svc.getTimesheet(timesheetId).subscribe(
      (res) => {
        this.timesheet = res;
        console.log(res);
      }
    )

  }
  reciveTimesheet($event: any) {
    this.timesheet = $event.timesheet;
  }


  delete() {
    console.log(this.timesheet.timesheetId);
    this.svc.deleteTimesheet(this.timesheet.timesheetId).subscribe(
      (data) => {
        this.status = data;
        if (data) {
          alert("timesheet Deleted Successfully");
        }
        else {
          { alert("Error") }
        }
        console.log(data);
      }
    )
  }

  onUpdateClick(timesheetId: any) {
    this.router.navigate(['./edittimesheet', timesheetId]);
  }
}
