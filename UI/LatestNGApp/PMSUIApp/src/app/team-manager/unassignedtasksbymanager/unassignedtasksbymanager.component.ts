import { Component } from '@angular/core';
import { Unassignedtaskbymanager } from 'src/app/Models/unassignedtaskbymanager';
import { EmployeeService } from 'src/app/Services/employee.service';
import { ProjectService } from 'src/app/Services/project.service';

@Component({
  selector: 'app-unassignedtasksbymanager',
  templateUrl: './unassignedtasksbymanager.component.html',
  styleUrls: ['./unassignedtasksbymanager.component.css']
})
export class UnassignedtasksbymanagerComponent {
  unAssignedTasks:Unassignedtaskbymanager[]=[]
  selectedTimePeriod:string="today"
  projectId:number=0
  teamManagerId:number=0
  projectName:string =''
  selectedTaskId:number| null=null
  constructor(private employeeService:EmployeeService,private projectService:ProjectService){}
  ngOnInit(): void {
    let userId = localStorage.getItem('userId');
    this.employeeService.getEmployeeId(Number(userId)).subscribe((res) => {
      this.teamManagerId = res;
      this.getFilteredUnAssignedTasks(this.selectedTimePeriod)
  })
}
getFilteredUnAssignedTasks(timePeriod:string){
  this.selectedTimePeriod=timePeriod
  this.projectService.unAssignedTasksByManager(this.teamManagerId,timePeriod).subscribe((res)=>{
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
}
