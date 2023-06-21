import { Component, OnInit } from '@angular/core';
import { ManagerviewService } from '../../managerview.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { Timerecord } from '../timerecord';


@Component({
  selector: 'timerecord-list',
  templateUrl: './timerecord-list.component.html',
  styleUrls: ['./timerecord-list.component.css']
})
export class TimerecordListComponent implements OnInit {

  timerecords: Timerecord[] | undefined;
  timesheetId: any;
  employee: any;


  constructor(private svc: ManagerviewService, private router: Router, private route: ActivatedRoute, public fb: FormBuilder) {

  }

  ngOnInit(): void {
    // this.timesheetId = this.route.snapshot.paramMap.get('timesheetId');
    // console.log(this.timesheetId);
    // this.svc.getAllTimeRecords(this.timesheetId).subscribe((response) => {
    //   this.timerecords = response;
    //   console.log(this.timerecords);
    // });



    // this.timesheetId = this.route.snapshot.paramMap.get('timesheetId');
    this.timesheetId = localStorage.getItem("id");
    console.log(this.timesheetId);
    this.svc.getAllTimeRecords(this.timesheetId).subscribe((response) => {
      this.timerecords = response;
      console.log(this.timerecords);
    });




    this.svc.getEmployee(this.timesheetId).subscribe((response) => {
      this.employee = response;
      console.log(this.employee)

    });
  }



}
