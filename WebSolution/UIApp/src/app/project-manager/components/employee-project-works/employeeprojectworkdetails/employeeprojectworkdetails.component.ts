import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmployeeWork } from 'src/app/activity/Models/EmployeeWork';
import { WorkmgmtService } from 'src/app/shared/services/workmgmt.service';

@Component({
  selector: 'app-employeeprojectworkdetails',
  templateUrl: './employeeprojectworkdetails.component.html',
  styleUrls: ['./employeeprojectworkdetails.component.css']
})
export class EmployeeprojectworkdetailsComponent implements OnInit {
  constructor(private router:ActivatedRoute,private workMgmt:WorkmgmtService){}
  employeeWorkId:number|any;
  employeeWork:EmployeeWork|undefined;
  ngOnInit(): void {
    this.router.paramMap.subscribe((param)=>{
    this.employeeWorkId=param.get('id')
    console.log(this.employeeWorkId);
    this.workMgmt.fetchEmployeeWorkDetailsById(this.employeeWorkId).subscribe((res)=>{
      this.employeeWork=res;
    })
  });
  }

}
