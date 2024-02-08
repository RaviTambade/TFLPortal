import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmployeeWorkDetails } from 'src/app/project-manager/Model/EmployeeWorkDetails';
import { WorkmgmtService } from 'src/app/shared/services/workmgmt.service';

@Component({
  selector: 'app-employeeprojectworkdetails',
  templateUrl: './employeeprojectworkdetails.component.html',
})
export class EmployeeprojectworkdetailsComponent implements OnInit {
  constructor(private router:ActivatedRoute,private workMgmt:WorkmgmtService){}
  employeeWorkId:number|any;
  employeeWork:EmployeeWorkDetails|undefined;
  ngOnInit(): void {
    this.router.paramMap.subscribe((param)=>{
    this.employeeWorkId=param.get('id')
    console.log(this.employeeWorkId);
    this.workMgmt.fetchEmployeeWorkDetailsById(this.employeeWorkId).subscribe((res)=>{
      this.employeeWork=res;
      console.log(res);
    })
  });
  }

}
