import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { Taskdetail } from 'src/app/Models/taskdetail';
import { ProjectService } from 'src/app/Services/project.service';
import { TaskService } from 'src/app/Services/task.service';

@Component({
  selector: 'app-taskdetails',
  templateUrl: './taskdetails.component.html',
  styleUrls: ['./taskdetails.component.css']
})
export class TaskdetailsComponent  {
  selectedProjectId:number |null=null
  selectedTaskId:number |null=null
  @Input() taskId :number |null =null
taskDetail:Taskdetail={
  taskId: 0,
  task: '',
  status: '',
  projectName: '',
  projectId: 0
}
constructor(private taskService:TaskService,private router:Router,private projectService:ProjectService){}
ngOnChanges(changes: SimpleChanges){
// ngOnInit():void{
  if (changes['taskId'] && this.taskId !== null) {
    if(this.taskId != null){
      console.log(this.taskId)
    this.taskService.getTaskDetails(this.taskId).subscribe(details => {
      console.log(this.taskId)
      this.taskDetail = details;
      console.log(this.taskDetail)
    });
  // }
}
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
  this.router.navigate(["teammember/projectdetails"])
  this.projectService.setSelectedProjectId(id);
}
}