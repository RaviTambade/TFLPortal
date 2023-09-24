import { Component, OnInit } from '@angular/core';
import { Assignedtaskbymanager } from 'src/app/Models/assignedtaskbymanager';
import { EmployeeService } from 'src/app/Services/employee.service';
import { ProjectService } from 'src/app/Services/project.service';

@Component({
  selector: 'app-assignedtasksbymanager',
  templateUrl: './assignedtasksbymanager.component.html',
  styleUrls: ['./assignedtasksbymanager.component.css']
})
export class AssignedtasksbymanagerComponent implements OnInit {
  assignedTasks:Assignedtaskbymanager[]=[]
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
      this.getFilteredAssignedTasks(this.selectedTimePeriod)
  })
}
getFilteredAssignedTasks(timePeriod:string){
  this.selectedTimePeriod=timePeriod
  this.projectService.assignedTasksByManager(this.teamManagerId,timePeriod).subscribe((res)=>{
    this.assignedTasks=res
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
