import { Component, Input, SimpleChanges } from '@angular/core';
import { TaskService } from 'src/app/Services/task.service';

@Component({
  selector: 'app-taskdetailsinfo',
  templateUrl: './taskdetailsinfo.component.html',
  styleUrls: ['./taskdetailsinfo.component.css']
})
export class TaskdetailsinfoComponent {
  @Input() taskId :number |null =null
  taskDetail:any={}
  constructor(private taskService:TaskService){}
  ngOnChanges(changes: SimpleChanges) {
    if (changes['taskId'] && this.taskId !== null) {
      this.taskService.getMoreTaskDetails(this.taskId).subscribe(details => {
        this.taskDetail = details;
        console.log(details)
      });
    }
  }
}
