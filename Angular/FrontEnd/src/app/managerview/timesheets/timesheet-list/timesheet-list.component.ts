import { Component, OnInit } from '@angular/core';
import { ManagerviewService } from '../../managerview.service';
import { Timesheet } from '../timesheet';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'timesheetlist',
  templateUrl: './timesheet-list.component.html',
  styleUrls: ['./timesheet-list.component.css']
})
export class TimesheetListComponent implements OnInit {

  timesheets: Timesheet[] | undefined;
  id: number = 2;
  timesheetId: any;

  constructor(private svc: ManagerviewService, private router: Router, private route: ActivatedRoute) { }
  ngOnInit(): void {
    this.timesheetId = this.route.snapshot.paramMap.get('timesheetId');
    console.log(this.timesheetId);
    this.svc.getAllTimesheets(this.id).subscribe(
      (response) => {
        this.timesheets = response;
        console.log(this.timesheets);
      })
  }

  OnEdit(id: any) {
    this.router.navigate(['./edittimesheet', id]);
  }

  OnDelete(timesheetId: any) {
    this.svc.deleteTimesheet(this.id).subscribe(
      (response) => {
        this.timesheetId = response;
        console.log(response);
      }
    )
  }




  goToTimesheet(): void {
    this.router.navigate(['./addtimesheet']);
  }
}
