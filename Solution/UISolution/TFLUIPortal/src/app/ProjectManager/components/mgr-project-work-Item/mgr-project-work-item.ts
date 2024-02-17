import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Task } from 'src/app/shared/Entities/Projectmgmt/task';
import { TasksManagementService } from 'src/app/shared/services/TaskMgmt/tasks-management.service';

@Component({
  selector: 'project-work-item',
  templateUrl: './mgr-project-work-item.html',
})
export class MgrProjectworkItem implements OnInit {
   taskId:number=51;
  task:Task|undefined;
  
  constructor(private router:ActivatedRoute,private taskService:TasksManagementService){}
 

  ngOnInit(): void {
    console.log(this.taskId);
    this.taskService.getTaskDetails(this.taskId).subscribe((res)=>{
      this.task=res;
       console.log(res);
    })
  }
}
