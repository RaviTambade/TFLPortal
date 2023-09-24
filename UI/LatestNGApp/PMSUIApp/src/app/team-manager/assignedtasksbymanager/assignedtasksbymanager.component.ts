import { Component, OnInit } from '@angular/core';
import { Assignedtaskbymanager } from 'src/app/Models/assignedtaskbymanager';
import { EmployeeService } from 'src/app/Services/employee.service';
import { ProjectService } from 'src/app/Services/project.service';
import { UserService } from 'src/app/Services/user.service';

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
  constructor(private employeeService:EmployeeService,private projectService:ProjectService,private userService:UserService){}
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
    let distinctTeamMemberUserIds = this.assignedTasks
    .map((item) => item.teamMemberUserId)
    .filter((number, index, array) => array.indexOf(number) === index);
  console.log(distinctTeamMemberUserIds);
  let teamMemberUserIdString = distinctTeamMemberUserIds.join(',');
  this.userService
    .getUserNamesWithId(teamMemberUserIdString)
    .subscribe((res) => {
      let teamMemberName = res;
      console.log(teamMemberName);
      this.assignedTasks.forEach((item) => {
        let matchingItem = teamMemberName.find(
          (element) => element.id === item.teamMemberUserId
        );
        if (matchingItem != undefined)
          item.teamMember = matchingItem.name;
        console.log(matchingItem);
  })
})
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
