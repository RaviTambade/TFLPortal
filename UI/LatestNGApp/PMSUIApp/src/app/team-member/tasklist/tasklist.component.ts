import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/Services/task.service';

@Component({
  selector: 'app-tasklist',
  templateUrl: './tasklist.component.html',
  styleUrls: ['./tasklist.component.css']
})
export class TasklistComponent implements OnInit{
  selectedTaskId:number |undefined
  tasks:any[]=[]
  constructor(private taskService:TaskService){}
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

}
