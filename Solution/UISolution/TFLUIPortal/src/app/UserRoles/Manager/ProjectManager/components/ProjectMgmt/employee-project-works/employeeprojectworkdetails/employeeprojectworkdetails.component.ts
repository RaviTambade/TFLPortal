import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Task } from 'src/app/Entities/task';
import { TasksManagementService } from 'src/app/shared/services/TaskMgmt/tasks-management.service';

@Component({
  selector: 'app-employeeprojectworkdetails',
  templateUrl: './employeeprojectworkdetails.component.html',
})
export class EmployeeprojectworkdetailsComponent implements OnInit {
  constructor(private router:ActivatedRoute,private taskService:TasksManagementService){}
  taskId:number=51;
  task:Task|undefined;
  ngOnInit(): void {
    
    console.log(this.taskId);
    this.taskService.getTaskDetails(this.taskId).subscribe((res)=>{
      this.task=res;
       console.log(res);
    })
  }

}
