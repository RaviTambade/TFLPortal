import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { TaskService } from 'src/app/Services/task.service';

@Component({
  selector: 'app-taskdetails',
  templateUrl: './taskdetails.component.html',
  styleUrls: ['./taskdetails.component.css']
})
export class TaskdetailsComponent {
  @Input() taskId :number |null =null
taskDetail:any={}
constructor(private taskService:TaskService){}
ngOnChanges(changes: SimpleChanges) {
  if (changes['taskId'] && this.taskId !== null) {
    this.taskService.getTaskDetails(this.taskId).subscribe(details => {
      this.taskDetail = details;
    });
  }
}
}
