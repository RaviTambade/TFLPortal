import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Activity } from 'src/app/activity/Models/Activity';
import { ActivityService } from 'src/app/activity/Services/activity.service';
import { Project } from 'src/app/projects/Models/project';

@Component({
  selector: 'app-add-activity',
  templateUrl: './add-activity.component.html',
  styleUrls: ['./add-activity.component.css']
})
export class AddActivityComponent implements OnInit {
constructor(private service:ActivityService) {}
projectId:any;
employees:any[]=[];
projects:Project[]=[];
  ngOnInit(): void {
    this.service.getAllProject().subscribe((res)=>{
    this.projects=res;
    console.log(res);
    })
  }

activity:Activity={
  id: 0,
  title: '',
  description: '',
  activityType: '',
  projectId: 0,
  assignedBy: 0,
  assignedTo: 0,
  assignDate: '',
  startDate: '',
  dueDate: '',
  status: ''
};
activityform=new FormGroup({
  title:new FormControl(),
  activitytype:new FormControl(),
  description:new FormControl(),
  assigndate:new FormControl(),
  startdate:new FormControl(),
  duedate:new FormControl(),
  projectid:new FormControl(),
  assignedby:new FormControl(),
  assignedto:new FormControl(),
  createddate:new FormControl(),
  status:new FormControl(),


});




onSubmit(){
 activitytype: "task"
assigndate: "2023-12-21"
assignedby: null
assignedto: "6"
createddate: null
description: "gcvnbjmn"
duedate: "2023-12-27"
projectid: "1"
startdate: null
status: null
title: "cgcb"
  this.activity.activityType=this.activityform.get("activitytype")?.value;
  this.activity.assignDate=this.activityform.get("assigndate")?.value;
  this.activity.assignedBy=this.activityform.get("assignedby")?.value;
  this.activity.assignedTo=this.activityform.get("assignedto")?.value;
  this.activity.description=this.activityform.get("description")?.value;
  this.activity.dueDate=this.activityform.get("duedate")?.value;
  this.activity.projectId=this.activityform.get("projectid")?.value;
  this.activity.startDate=this.activityform.get("startdate")?.value;
  this.activity.title=this.activityform.get("title")?.value;

  // this.activity.activityType="task";
  // this.activity.assignDate="2023-12-21";
  this.activity.assignedBy=1;
  // this.activity.assignedTo=6
  // this.activity.description="gcvnbjmn"
  // this.activity.dueDate="2023-12-27"
  // this.activity.projectId= 1
  this.activity.startDate="2023-12-28"
  // this.activity.title="cgcb"
  this.activity.status="todo"
  console.log(this.activity);
 this.service.addActivity(this.activity).subscribe((res)=>{
 });
 console.log(this.activityform.value)
}


onChange(e:any){
 this.projectId= e.target.value;
  this.service.getAllEmployees(this.projectId).subscribe((res)=>{
    console.log(res);
    this.employees=res;
  })
}



}
