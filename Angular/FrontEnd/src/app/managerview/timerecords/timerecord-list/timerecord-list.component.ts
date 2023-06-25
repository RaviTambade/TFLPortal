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
  timerecordId: any;
  employee: any;
  totalWorkingHRS: any;
  empid: any;
  fromDate: string;
  toDate: string;
  timesheetId:any;

  constructor(private svc: ManagerviewService, private router: Router, private route: ActivatedRoute, public fb: FormBuilder) {
    this.empid=0;
    this.fromDate = '';
    this.toDate = '';   
  }

  ngOnInit(): void {
    // this.timesheetId = this.route.snapshot.paramMap.get('timesheetId');
    // console.log(this.timesheetId);
    // this.svc.getAllTimeRecords(this.timesheetId).subscribe((response) => {
    //   this.timerecords = response;
    //   console.log(this.timerecords);
    // });


    // this.timesheetId = this.route.snapshot.paramMap.get('timesheetId');
    this.timerecordId = localStorage.getItem("id");
    console.log(this.timerecordId);
    this.svc.getAllTimeRecords(this.timerecordId).subscribe((response) => {
      this.timerecords = response;
      console.log(this.timerecords);
    });

    this.svc.getEmployee(this.timerecordId).subscribe((response) => {
      this.employee = response;
      console.log(this.employee)

    });
  }

  getTotalTime() {
    this.empid = localStorage.getItem("id");
    this.svc.getTotalWorkingTime(this.empid, this.fromDate, this.toDate).subscribe((response) => {
      this.totalWorkingHRS = response;
      console.log(this.totalWorkingHRS);
    })
  };


  onSubmit() {
    this.getTotalTime();
  };

  onDetails(timesheetId: any) {
    this.router.navigate(['./detailstimesheet', timesheetId]);
  };


}
