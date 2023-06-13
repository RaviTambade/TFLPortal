import { Component, OnInit } from '@angular/core';
import { ManagerviewService } from '../../managerview.service';
import { Timesheet } from '../timesheet';

@Component({
  selector: 'app-timesheet-list',
  templateUrl: './timesheet-list.component.html',
  styleUrls: ['./timesheet-list.component.css']
})
export class TimesheetListComponent implements OnInit{

  timesheets :Timesheet[]|undefined;
  
  constructor (private svc: ManagerviewService){}
  ngOnInit(): void {
    this.svc.getAllTimesheets().subscribe(
      (response) => {
        this.timesheets = response;
        console.log(this.timesheets);
      })
  }

}
