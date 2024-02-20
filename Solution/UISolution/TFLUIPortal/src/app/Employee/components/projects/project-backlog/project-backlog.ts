import { Component, Input, OnInit} from '@angular/core';
import { Project } from 'src/app/projectmanager/Models/Project';
import { Task } from 'src/app/projectmanager/Models/task';
import { TasksManagementService } from 'src/app/Employee/Services/tasks-management.service';
@Component({
  selector: 'project-backlog',
  templateUrl: './project-backlog.html',
})
export class ProjectBacklog implements OnInit {

  todotasks:Task[]=[];
  tasks:Task[]=[];
  pageSize=10;
  pageNumber=1;
  maxPages=0;
  priviousStatus:boolean=false;
  nextStatus:boolean=false;
  constructor(private taskSvc:TasksManagementService){}
  ngOnInit(): void {
    this.taskSvc.getAllTasksByStatus(4,'todo').subscribe((res)=>{
      this.todotasks=res;
      this.tasks=this.todotasks.slice(0,this.pageSize);
    })
  }
 
   
  onClickNext(){
    this.nextStatus=true;
    this.pageNumber=this.pageNumber+1;
    let statrtFrom=(this.pageNumber-1)*this.pageSize;
    this.tasks =this.todotasks.slice(statrtFrom, (statrtFrom+this.pageSize) );
  }
 

  onClickPrevious(){
    this.priviousStatus=true;
    this.pageNumber=this.pageNumber-1;
    let statrtFrom=(this.pageNumber-1)*this.pageSize;
    this.tasks =this.todotasks.slice(statrtFrom, (statrtFrom+this.pageSize) );
  }
}
