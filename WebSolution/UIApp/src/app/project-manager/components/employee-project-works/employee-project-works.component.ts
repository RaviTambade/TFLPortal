import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmployeeWork } from 'src/app/activity/Models/EmployeeWork';
import { WorkmgmtService } from 'src/app/shared/services/workmgmt.service';

@Component({
  selector: 'app-employee-project-works',
  templateUrl: './employee-project-works.component.html',
  styleUrls: ['./employee-project-works.component.css']
})
export class EmployeeProjectWorksComponent implements OnInit{

  constructor(private router:ActivatedRoute,private workMgmt:WorkmgmtService){}
  employeeworks:EmployeeWork[]=[];
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
