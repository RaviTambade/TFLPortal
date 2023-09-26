import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Unassignedtaskbymanager } from 'src/app/Models/unassignedtaskbymanager';
import { EmployeeService } from 'src/app/Services/employee.service';
import { ProjectService } from 'src/app/Services/project.service';
import { TaskService } from 'src/app/Services/task.service';

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
  selectedTaskId2:number| null=null
  constructor(private employeeService:EmployeeService,private taskService:TaskService,private projectService:ProjectService,private router:Router){}
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

selectTask2(id: number | null) {
  {
    if (this.selectedTaskId2 === id) {
      this.selectedTaskId2 = null;
    } else {
      this.selectedTaskId2 = id;
    }
      this.taskService.setSelectedTaskId(id);
    }
}

assignTask(taskId:number){
  this.router.navigate(['teammanager/assigntask/',taskId]);
}


}
