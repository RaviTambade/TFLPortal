import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmployeeWork } from 'src/app/activity/Models/EmployeeWork';
import { WorkmgmtService } from 'src/app/shared/services/workmgmt.service';

@Component({
  selector: 'app-my-project-details',
  templateUrl: './my-project-details.component.html',
  styleUrls: ['./my-project-details.component.css']
})
export class MyProjectDetailsComponent implements OnInit{
  constructor(private workMgmtSvc :WorkmgmtService , private route: ActivatedRoute,){}
  employeeworks:EmployeeWork|any;
 employeeworkid:number|any;
  ngOnInit(): void {
   
    this.route.paramMap.subscribe((param)=>{
      this.employeeworkid=param.get("id");
      this.workMgmtSvc.fetchEmployeeWorkDetailsById(this.employeeworkid).subscribe((res)=>{
      this.employeeworks=res;
      console.log(res);
      })
    })
  }
Id:number=0;
onClick(id:number){
  this.Id=id;
  }
}
