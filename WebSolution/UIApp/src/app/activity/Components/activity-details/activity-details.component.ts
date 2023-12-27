import { Component } from '@angular/core';
import { EmployeeWork } from '../../Models/EmployeeWork';
import { ActivityService } from '../../Services/activity.service';
import { Employee } from '../../Models/Employee';
import { ProjectsService } from 'src/app/projects/Services/projects.service';
import { WorkmgmtService } from 'src/app/shared/services/workmgmt.service';
import { ProjectService } from 'src/app/shared/services/project.service';
import { HrService } from 'src/app/shared/services/hr.service';

@Component({
  selector: 'app-activity-details',
  templateUrl: './activity-details.component.html',
  styleUrls: ['./activity-details.component.css']
})
export class ActivityDetailsComponent{

  constructor(private workMgmtSvc : WorkmgmtService,private projectSvc:ProjectService,private hrSvc:HrService){}

project:any|undefined;
activity:EmployeeWork|undefined;
employee:Employee|undefined;
 getEvent(event:EmployeeWork){
  this.activity=event;
  console.log(event);
  this.hrSvc.getEmployeeDetails(event.assignedBy).subscribe((res)=>{
   this.employee=res;
  })
  this.projectSvc.getProjectDetails(event.projectId).subscribe((res)=>{
    this.project=res;
  })
 }


 
}
