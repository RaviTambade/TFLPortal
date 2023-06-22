import { Component, OnInit } from '@angular/core';
import { ManagerviewService } from '../../managerview.service';
import { Timesheet } from '../timesheet';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'timesheetlist',
  templateUrl: './timesheet-list.component.html',
  styleUrls: ['./timesheet-list.component.css']
})
export class TimesheetListComponent implements OnInit {

  timesheets: Timesheet[] | undefined;
  id: number = 2;
  date: string;
  timesheetId: any | undefined;
  employee: any;
  totalWorkingHRS:any;

  project: any | undefined;
  name: string | undefined;

  constructor(private svc: ManagerviewService, private router: Router, private route: ActivatedRoute, public fb: FormBuilder) {
    this.date = '';
  }

  ngOnInit(): void {
    // this.timesheetId = this.route.snapshot.paramMap.get('timesheetId');
    // console.log(this.timesheetId);
    // this.svc.getAllTimesheets(this.id,this.date).subscribe((response) => {
    //     this.timesheets = response;
    //     console.log(this.timesheets);
        
    //   });

    this.svc.getEmployee(this.id).subscribe((response) =>{
        this.employee = response;
        console.log(this.employee)
      
      });
      

  };

  onSubmit() {
    this.svc.getAllTimesheets(this.id, this.date).subscribe((response) => {
        this.timesheets = response;
        console.log(this.timesheets)
        this.getTotalTime();
      });
  };
  onDetails(timesheetId: any) {
    this.router.navigate(['./detailstimesheet', timesheetId]);
  };

  getTotalTime() {
    this.svc.getTotalTime(this.id,this.date).subscribe((response)=>{
      this.totalWorkingHRS=response;
      console.log(this.totalWorkingHRS);
    })
  };

  toTimeRecord(timesheetId: any) {
    this.router.navigate(['./timerecordlist', timesheetId]);
  };


  // onTimeRecord(id:any) {
  //   console.log(id);
  //   this.router.navigate(['./timerecordlist',id],{relativeTo:this.route});        //navigation without localstorage
  // };

  onTimeRecord(id:any) {
    console.log(id);
    localStorage.setItem("id",id);
    this.router.navigate(['./timerecordlist'],{relativeTo:this.route});              //navigation with localstorage
  };

  addTimeRecord() {
    this.router.navigate(['./addtimerecord'],{relativeTo:this.route});         
  };


 

}


