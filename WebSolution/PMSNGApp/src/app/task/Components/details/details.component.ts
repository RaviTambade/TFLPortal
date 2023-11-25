import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { TaskService } from '../../Services/task.service';
import { task } from '../../Models/task';

@Component({
  selector: 'task-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent{
  
  constructor(private service:TaskService){
  }
  
  
  @Input() taskId!:number;
    tasks:task|undefined;
  ngOnChanges(changes: SimpleChanges) {
    this.service.getTaskDetails(changes['taskId'].currentValue).subscribe((res)=>{
      this.tasks=res;
    })
  }

}
