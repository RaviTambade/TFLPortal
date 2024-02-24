import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TasksManagementService } from 'src/app/shared/services/TaskMgmt/tasks-management.service';
import { Task } from '../../Models/task';

@Component({
  selector: 'mgr-project-work-list',
  templateUrl: './mgr-project-work-list.html',
})
export class MgrProjectWorkList implements OnInit{

  constructor(private router:ActivatedRoute,private taskService:TasksManagementService){}
  employeeworks:Task[]=[];
  projectId:number=4;
  empId:number=10;
  ngOnInit(): void {
    this.taskService.getAllTasksOfProjectMember(this.projectId,this.empId).subscribe((res)=>{
      this.employeeworks=res;
    })
  }


}
