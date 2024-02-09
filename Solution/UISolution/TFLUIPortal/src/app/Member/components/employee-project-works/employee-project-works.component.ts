import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmployeeWork } from 'src/app/activity/Models/EmployeeWork';
import { WorkmgmtService } from 'src/app/shared/services/workmgmt.service';
import { EmployeeWorkDetails } from '../../Model/EmployeeWorkDetails';

@Component({
  selector: 'app-employee-project-works',
  templateUrl: './employee-project-works.component.html',
})
export class EmployeeProjectWorksComponent implements OnInit{

  constructor(private router:ActivatedRoute,private workMgmt:WorkmgmtService){}
  employeeworks:EmployeeWorkDetails[]=[];
  projectId:number|any;
  ngOnInit(): void {
  this.router.paramMap.subscribe((res)=>{
    this.projectId=res.get('id');

    this.workMgmt.fetchEmployeeWorkByProject(this.projectId).subscribe((res)=>{
      this.employeeworks=res;
      console.log(res);
    })
  })
  }

}
