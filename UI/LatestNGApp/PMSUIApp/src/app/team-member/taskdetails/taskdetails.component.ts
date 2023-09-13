import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { TaskService } from 'src/app/Services/task.service';

@Component({
  selector: 'app-taskdetails',
  templateUrl: './taskdetails.component.html',
  styleUrls: ['./taskdetails.component.css']
})
export class TaskdetailsComponent {
  selectedTaskId:number |null=null
  @Input() taskId :number |null =null
taskDetail:any={}
constructor(private taskService:TaskService,private router:Router){}
ngOnChanges(changes: SimpleChanges) {
  if (changes['taskId'] && this.taskId !== null) {
    this.taskService.getTaskDetails(this.taskId).subscribe(details => {
      this.taskDetail = details;
    });
  }
}
selectTask(id: number | null) {
  {
    if (this.selectedTaskId === id) {
      this.selectedTaskId = null;
    } else {
      this.selectedTaskId = id;
    }
      this.taskService.setSelectedTaskId(id);
    }
}
}
