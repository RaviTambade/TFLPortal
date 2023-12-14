import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/projects/Models/project';
import { LocalStorageKeys } from 'src/app/shared/Enums/local-storage-keys';
import { ProjectService } from 'src/app/shared/services/project.service';
import { WorkmgmtService } from 'src/app/shared/services/workmgmt.service';
import { Activity } from '../../Models/Activity';

@Component({
  selector: 'app-employee-todays-activities',
  templateUrl: './employee-todays-activities.component.html',
  styleUrls: ['./employee-todays-activities.component.css']
})
export class EmployeeTodaysActivitiesComponent implements OnInit{
  employeeId:number|any;
  isClick:boolean=false;
  activityDetails:boolean=false;
  constructor(private projectSvc:ProjectService,private workMgmt:WorkmgmtService){
    this.employeeId=localStorage.getItem(LocalStorageKeys.employeeId)
  }
  projects:Project[]=[];
  projectId:number|undefined;
  date:string='2023-12-14'
  activities:Activity[]=[];
  ngOnInit(): void {
   this.projectSvc.getProjectOfEmployee(this.employeeId).subscribe((res)=>{
   this.projects=res;
   })
  
  }


  onClick(e:number){
    this.isClick=true;
    this.projectId=e;
     this.workMgmt.fetchTodaysActivities(this.projectId,this.date).subscribe((res)=>{
       this.activities=res;
       console.log(this.activities)
      })
  }


  getDetails(){
    this.activityDetails=true;
  }
}
