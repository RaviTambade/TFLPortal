import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { EmployeeWork } from 'src/app/activity/Models/EmployeeWork';
import { ActivityService } from 'src/app/activity/Services/activity.service';
import { Project } from 'src/app/projects/Models/project';
import { LocalStorageKeys } from 'src/app/shared/enums/local-storage-keys';
import { HrService } from 'src/app/shared/services/hr.service';
import { ProjectService } from 'src/app/shared/services/project.service';
import { WorkmgmtService } from 'src/app/shared/services/workmgmt.service';

@Component({
  selector: 'app-add-activity',
  templateUrl: './add-activity.component.html',
  styleUrls: ['./add-activity.component.css']
})
export class AddActivityComponent implements OnInit {
constructor(private projectSvc:ProjectService,private workMgmtSvc:WorkmgmtService) {}
projectId:any;
employees:any[]=[];
projects:Project[]=[];
  ngOnInit(): void {
    this.projectSvc.fetchAllProject().subscribe((res)=>{
    this.projects=res;
    console.log(res);
    })
  }

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




onSubmit(){

  this.activity.projectWorkType=this.activityform.get("activitytype")?.value;
  this.activity.assignDate=new Date().toISOString().slice(0,10);
  this.activity.assignedBy=this.activityform.get("assignedby")?.value;
  this.activity.assignedTo=this.activityform.get("assignedto")?.value;
  this.activity.description=this.activityform.get("description")?.value;
  this.activity.dueDate=this.activityform.get("duedate")?.value;
  this.activity.projectId=this.activityform.get("projectid")?.value;
  this.activity.sprintId=this.activityform.get("sprintid")?.value;
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


onChange(e:any){
 this.projectId= e.target.value;
 console.log(e.target.value);
  this.projectSvc.getAllEmployees(this.projectId).subscribe((res)=>{
    console.log(res);
    this.employees=res;
  })
}
}
