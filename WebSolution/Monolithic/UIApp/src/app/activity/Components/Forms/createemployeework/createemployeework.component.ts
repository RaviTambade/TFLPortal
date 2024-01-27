import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { EmployeeWork } from 'src/app/activity/Models/EmployeeWork';
import { employeeRoutes } from 'src/app/employee/employee.module';
import { Project } from 'src/app/projects/Models/project';
import { LocalStorageKeys } from 'src/app/shared/enums/local-storage-keys';
import { ProjectService } from 'src/app/shared/services/project.service';
import { WorkmgmtService } from 'src/app/shared/services/workmgmt.service';

@Component({
  selector: 'app-createemployeework',
  templateUrl: './createemployeework.component.html',
  styleUrls: ['./createemployeework.component.css']
})
export class CreateemployeeworkComponent implements OnInit{
  constructor(private projectSvc:ProjectService,private workMgmtSvc:WorkmgmtService){}
  projects:Project[]=[];
  projectId:number=0;
  createactivityform:boolean=false;

  activity:EmployeeWork={
    id: 0,
    title: '',
    description: '',
    projectWorkType: '',
    projectId: 0,
    assignedBy: 0,
    assignedTo: 0,
    assignDate: '',
    startDate: '',
    dueDate: '',
    status: '',
    projectName: 0,
    sprintId: 0,
    createdDate: ''
  };
  activityform=new FormGroup({
    title:new FormControl(),
    activitytype:new FormControl(),
    description:new FormControl(),
    sprintid:new FormControl(),
    // assigndate:new FormControl(),
    startdate:new FormControl(new Date().toISOString().slice(0,10)),
    duedate:new FormControl(),
    projectid:new FormControl(),
    assignedby:new FormControl(),
    assignedto:new FormControl(),
   // createddate:new FormControl(new Date().toISOString().slice(0,10)),
    status:new FormControl(),
  
  
  });
  ngOnInit(): void {
    this.projectSvc.fetchAllProject().subscribe((res)=>{
    this.projects=res;
    console.log(res);
    })
  }

  onSubmit(){
   console.log(this.activity.projectId);
    this.activity.projectWorkType=this.activityform.get("activitytype")?.value;
    this.activity.assignDate=new Date().toISOString().slice(0,10);
    this.activity.assignedBy=0;
    this.activity.assignedTo=0;
    this.activity.description='';
    this.activity.dueDate=this.activityform.get("duedate")?.value;
   // this.activity.projectId=this.projectId
    this.activity.sprintId=0;
    this.activity.startDate=this.activityform.get("startdate")?.value||"";
    this.activity.title=this.activityform.get("title")?.value;
    this.activity.createdDate=new Date().toISOString().slice(0,10);
    this.activity.assignedBy=Number(localStorage.getItem(LocalStorageKeys.employeeId));
   
    this.activity.status="todo"
    console.log(this.activity);
   this.workMgmtSvc.addActivity(this.activity).subscribe((res)=>{
   });
   console.log(this.activityform.value)
  }
  

  onClick(){

   this.activity.projectId=this.projectId
  }

  showForm(){
    this.createactivityform=true;
  }

}
