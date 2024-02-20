import { Component, OnInit } from '@angular/core';
import { TasksManagementService } from 'src/app/Employee/Services/tasks-management.service';
import { Task } from 'src/app/projectmanager/Models/task';

@Component({
  selector: 'app-project-board',
  templateUrl: './project-board.component.html',
})
export class ProjectBoardComponent implements OnInit {
   inprogresstasks:Task[]=[];
   todotasks:Task[]=[];
   completedtasks:Task[]=[];
  tasks:Task[]=[];
  constructor(private taskSvc:TasksManagementService){}
  ngOnInit(): void {
   
    this.taskSvc.getAllTasksByStatus(4,'inprogress').subscribe((res)=>{
      this.inprogresstasks=res;
    })
    this.taskSvc.getAllTasksByStatus(4,'todo').subscribe((res)=>{
      this.todotasks=res;
    })
    this.taskSvc.getAllTasksByStatus(4,'completed').subscribe((res)=>{
      this.completedtasks=res;
    })
    }
  }


