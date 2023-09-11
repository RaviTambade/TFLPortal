import { Component, Input, OnInit } from '@angular/core';
import { TaskService } from 'src/app/Services/task.service';

@Component({
  selector: 'app-taskdetails',
  templateUrl: './taskdetails.component.html',
  styleUrls: ['./taskdetails.component.css']
})
export class TaskdetailsComponent implements OnInit{
  @Input() taskId :any
taskDetail:any={}
constructor(private taskService:TaskService){}
ngOnInit(): void {
  if(this.taskId !== null){
    console.log(this.taskId)
 this.taskService.getTaskDetails(this.taskId).subscribe((res)=>{
  this.taskDetail=res
 })
}
}
}
