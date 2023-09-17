import { Component, Input, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { ProjectService } from 'src/app/Services/project.service';
import { TaskService } from 'src/app/Services/task.service';

@Component({
  selector: 'app-taskdetails',
  templateUrl: './taskdetails.component.html',
  styleUrls: ['./taskdetails.component.css']
})
export class TaskdetailsComponent {

  selectedProjectId:number |null=null
  selectedTaskId:number |null=null
  @Input() taskId :number |null =null
taskDetail:any={}
constructor(private taskService:TaskService,private router:Router,private projectService:ProjectService){}
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
selectProject(id: number | null) {
  if (this.selectedProjectId === id) {
    this.selectedProjectId = null;
  } else {
    this.selectedProjectId = id;
  }
  this.router.navigate(["teammanager/projectdetails"])
  this.projectService.setSelectedProjectId(id);
}

updateTask(taskId: number) {
  if (taskId) {
    this.router.navigate(['teammanager/updatetask', taskId]);
  }
}
}
