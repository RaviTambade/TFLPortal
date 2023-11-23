import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../Services/task.service';
import { task } from '../../Models/task';

@Component({
  selector: 'task-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit{
  
  constructor(private service:TaskService){
  }
  taskId:number=5;
  taskdDetails:task|undefined;
  ngOnInit(): void {
   this.service.getTaskDetails(this.taskId).subscribe((res)=>{
    this.taskdDetails=res;
   })
  }

}
