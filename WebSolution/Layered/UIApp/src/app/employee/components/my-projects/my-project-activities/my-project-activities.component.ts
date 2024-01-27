import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmployeeWork } from 'src/app/activity/Models/EmployeeWork';
import { LocalStorageKeys } from 'src/app/shared/enums/local-storage-keys';
import { WorkmgmtService } from 'src/app/shared/services/workmgmt.service';

@Component({
  selector: 'app-my-project-activities',
  templateUrl: './my-project-activities.component.html',
  styleUrls: ['./my-project-activities.component.css']
})
export class MyProjectActivitiesComponent implements OnInit{

 projectId:number=0;
  employeeId:number=0;
  employeeWorks:EmployeeWork[]=[];
  constructor(private workMgmtSvc:WorkmgmtService,private router:ActivatedRoute){

  }
  ngOnInit(): void {
    this.employeeId=Number(localStorage.getItem(LocalStorageKeys.employeeId));
    console.log("hiii")
    console.log(this.employeeId);
    
    this.router.paramMap.subscribe((param)=>{
    this.projectId=Number(param.get('id'));
    this.workMgmtSvc.getAllEmployeeWork(this.projectId,this.employeeId).subscribe((res)=>{
      console.log(this.employeeId);
      console.log(this.projectId);
      this.employeeWorks=res;
    })
  })
  }

}
