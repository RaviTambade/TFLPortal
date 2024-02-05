import { Component } from '@angular/core';
import { Task } from 'src/app/Entities/task';
import { TasksManagementService } from 'src/app/shared/services/TaskMgmt/tasks-management.service';

@Component({
  selector: 'app-member-task-list',
  templateUrl: './member-task-list.component.html',
  styleUrls: ['./member-task-list.component.css']
})
export class MemberTaskListComponent {
  constructor(private taskService:TasksManagementService){}
  employeeworks:Task[]=[];
  projectId:number|any;
  ngOnInit(): void {
 this.taskService.getAllTasks(this.projectId).subscribe((res)=>{
      this.employeeworks=res;
      console.log(res);
    })
  }
}