import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Task } from 'src/app/shared/Entities/Projectmgmt/task';
import { TasksManagementService } from 'src/app/shared/services/TaskMgmt/tasks-management.service';

@Component({
  selector: 'employee-project-works',
  templateUrl: './employee-project-works.html',
})
export class EmployeeProjectWorks implements OnInit{

  constructor(private router:ActivatedRoute,private taskService:TasksManagementService){}
  employeeworks:Task[]=[];
  projectId:number=4;
  empId:number=10;
  ngOnInit(): void {
    this.taskService.getAllTasksOfProjectMember(this.projectId,this.empId).subscribe((res)=>{
      this.employeeworks=res;
      console.log(res);
    })
  }


}
