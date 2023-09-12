import { Component, OnInit } from '@angular/core';
import { ProjectService } from 'src/app/Services/project.service';
import { TaskService } from 'src/app/Services/task.service';

@Component({
  selector: 'app-tasklist',
  templateUrl: './tasklist.component.html',
  styleUrls: ['./tasklist.component.css']
})
export class TasklistComponent implements OnInit{
  selectedTaskId:number |undefined
  tasks:any[]=[]
  filteredTasks:any[]=[]
  constructor(public taskService:TaskService,public projectService:ProjectService){}
  ngOnInit(): void {
this.taskService.getAllTasks().subscribe((res)=>{
  console.log(res)
  this.tasks=res
})
}
selectTask(id:number){
  this.selectedTaskId=id
  console.log(id)
  this.taskService.setSelectedTaskId(id);
}
filterTasksByStatus(status:string){
  if(status === "All"){
    this.filteredTasks=this.tasks
  }
  else{
    this.filteredTasks=this.tasks.filter((task)=>task.status === status)
  }

}

}
