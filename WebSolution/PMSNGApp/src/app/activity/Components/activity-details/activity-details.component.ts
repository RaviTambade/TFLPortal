import { Component } from '@angular/core';
import { Activity } from '../../Models/Activity';
import { ActivityService } from '../../Services/activity.service';
import { Employee } from '../../Models/Employee';

@Component({
  selector: 'app-activity-details',
  templateUrl: './activity-details.component.html',
  styleUrls: ['./activity-details.component.css']
})
export class ActivityDetailsComponent{

  constructor(private service :ActivityService){}

project:any|undefined;
activity:Activity|undefined;
employee:Employee|undefined;
 getEvent(event:Activity){
  this.activity=event;
  console.log(event);
  this.service.getEmployeeDetails(event.assignedBy).subscribe((res)=>{
   this.employee=res;
  })
  this.service.getProjectDetails(event.projectId).subscribe((res)=>{
    this.project=res;
  })
 }


 
}
