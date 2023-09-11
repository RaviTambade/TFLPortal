import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/Services/task.service';

@Component({
  selector: 'app-tasklist',
  templateUrl: './tasklist.component.html',
  styleUrls: ['./tasklist.component.css']
})
export class TasklistComponent implements OnInit{
  selectedTaskId:any
  tasks:any[]=[]
  constructor(private taskService:TaskService){}
  ngOnInit(): void {
this.taskService.getAllTasks().subscribe((res)=>{
  console.log(res)
  this.tasks=res
})
}
viewDetails(taskId:number){
  console.log('cl')
  if (this.selectedTaskId === taskId) {
    this.selectedTaskId = null;
  } else {
    this.selectedTaskId = taskId;
  }
}

}
