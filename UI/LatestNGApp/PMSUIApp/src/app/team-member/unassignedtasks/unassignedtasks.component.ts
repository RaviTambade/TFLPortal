import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Unassignedtask } from 'src/app/Models/unassignedtask';
import { ProjectService } from 'src/app/Services/project.service';

@Component({
  selector: 'app-unassignedtasks',
  templateUrl: './unassignedtasks.component.html',
  styleUrls: ['./unassignedtasks.component.css']
})
export class UnassignedtasksComponent implements OnInit {
unAssignedTasks:Unassignedtask[]=[]
selectedTimePeriod:string="today"
projectId:number=0
projectName:string =''
selectedTaskId:number| null=null
constructor(private projectService:ProjectService,private route:ActivatedRoute){}

ngOnInit(): void {
  this.route.params.subscribe(params => {
    this.projectId = +params['projectId'];
  });
  this.route.queryParams.subscribe(queryParams => {
    this.projectName = queryParams['projectName'] || '';
  });
  this.GetfilteredTasksOfProjects(this.selectedTimePeriod)
  
}
GetfilteredTasksOfProjects(timePeriod:string){
  this.selectedTimePeriod=timePeriod
  this.projectService.unAssignedTask(this.projectId,timePeriod).subscribe((res)=>{
    this.unAssignedTasks=res  

  })
}
viewDetails(taskId:number){
  if (this.selectedTaskId === taskId) {
    this.selectedTaskId = null;
  } else {
    this.selectedTaskId = taskId;
  }
}

clearUnassignedTasks() {
  this.unAssignedTasks = [];
}
}
