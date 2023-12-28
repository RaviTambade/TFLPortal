import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Project } from 'src/app/projects/Models/project';
import { LocalStorageKeys } from 'src/app/shared/Enums/local-storage-keys';
import { ProjectService } from 'src/app/shared/services/project.service';
import { WorkmgmtService } from 'src/app/shared/services/workmgmt.service';
import { EmployeeWork } from '../../Models/EmployeeWork';

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
  date= new Date().toISOString().slice(0,10);
  employeeWorks:EmployeeWork[]=[];
  activityId:number=0;
  status:string='';
  projectName:string="";
  @Output() activityupdate=new EventEmitter<EmployeeWork>();
  ngOnInit(): void {
   this.projectSvc.getProjectsOfEmployee(this.employeeId).subscribe((res)=>{
   this.projects=res;
   //this.update();
   console.log(this.date);
   console.log(this.employeeId);
   })
  
  }


  onClick(e:Project){
    this.isClick=true;
    this.projectId=e.id;
    this.projectName=e.title;

     this.workMgmt.fetchTodaysEmployeeWork(this.projectId,this.date).subscribe((res)=>{
       this.employeeWorks=res;
       console.log(this.employeeWorks)
      })
  }


  getDetails(){
    this.activityDetails=true;
  }

onRecive(activityId:number){
  console.log(activityId)
  this.activityId=activityId;
}

  update(){
    
    console.log("status"+this.status);
    console.log(this.activityId);
    this.workMgmt.updateEmployeeWork(this.activityId,this.status).subscribe((res)=>{
     if(res){
     this.employeeWorks= this.employeeWorks.filter((activity)=>activity.id!=this.activityId)
     }
     })
  }

}


