import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TaskService } from 'src/app/Services/task.service';

@Component({
  selector: 'app-tasksofprojects',
  templateUrl: './tasksofprojects.component.html',
  styleUrls: ['./tasksofprojects.component.css']
})
export class TasksofprojectsComponent implements OnInit {
  selectedTaskId:any
  projectId:any
  projectNames:any[] =[]
  projectName:string=''
  tasks:any[]=[]
  constructor(private taskService:TaskService,private route:ActivatedRoute){}
  ngOnInit(): void {
      this.route.params.subscribe(params => {
        this.projectId = +params['projectId'];
      });
    this.taskService.getAllTasksOfProject(this.projectId).subscribe((res)=>{
      this.tasks=res
      console.log(this.tasks)
     this.projectNames= this.tasks.map((task)=>task.projectName)
     this.projectName=this.projectNames[0]
      
    })
  }
  viewDetails(taskId:number){
    if (this.selectedTaskId === taskId) {
      this.selectedTaskId = null;
    } else {
      this.selectedTaskId = taskId;
    }
  }
}
