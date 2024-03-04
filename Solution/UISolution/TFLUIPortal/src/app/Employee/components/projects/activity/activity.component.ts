import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TasksManagementService } from 'src/app/Employee/Services/tasks-management.service';
import { TaskModel } from 'src/app/employee/Models/ProjectMgmt/taskModel';
import { Task } from 'src/app/projectmanager/Models/task';
import { SprintService } from 'src/app/projectmanager/Services/sprint.service';
import { MembershipService } from 'src/app/shared/services/Membership/membership.service';

@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
})
export class ActivityComponent implements OnInit{
  constructor(private taskSvc:TasksManagementService){}
  
  task:Task|undefined;
  ngOnInit(): void {
    
    this.taskSvc.getTaskDetails(1).subscribe(res=>{
      this.task=res;
      console.log("task details" ,res);
    })
    

 }
}
