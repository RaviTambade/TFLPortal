import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TasksManagementService } from 'src/app/shared/services/TaskMgmt/tasks-management.service';
import { Task } from 'src/app/shared/models/task';

@Component({
  selector: 'app-employee-project-works',
  templateUrl: './employee-project-works.component.html',
  styleUrls: ['./employee-project-works.component.css']
})
export class EmployeeProjectWorksComponent implements OnInit{

  constructor(private router:ActivatedRoute,private taskService:TasksManagementService){}
  employeeworks:Task[]=[];
  projectId:number|any;
  ngOnInit(): void {
  this.router.paramMap.subscribe((res)=>{
    this.projectId=res.get('id');

    this.taskService.getAllTasks(this.projectId).subscribe((res)=>{
      this.employeeworks=res;
      console.log(res);
    })
  })
  }

}
