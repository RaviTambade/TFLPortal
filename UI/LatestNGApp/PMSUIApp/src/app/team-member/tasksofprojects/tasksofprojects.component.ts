import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Projecttask } from 'src/app/Models/projecttask';
import { ProjectService } from 'src/app/Services/project.service';
import { TaskService } from 'src/app/Services/task.service';
import { UserService } from 'src/app/Services/user.service';

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
  tasks:Projecttask[]=[]
  selectedTimePeriod:string="today"
  
  constructor(private userService:UserService,private route:ActivatedRoute,private projectService:ProjectService,private router:Router){}
  ngOnInit(): void {
      this.route.params.subscribe(params => {
        this.projectId = +params['projectId'];
      });
      this.route.queryParams.subscribe(queryParams => {
        this.projectName = queryParams['projectName'] || '';
      });
      this.GetfilteredTasksOfProjects(this.selectedTimePeriod);
    }
      GetfilteredTasksOfProjects(timePeriod:string){
        this.selectedTimePeriod=timePeriod
    this.projectService.getTasksOfProject(this.projectId,timePeriod).subscribe((res)=>{
      this.tasks=res
      console.log(this.tasks)
      let distinctTeamMemberUserIds=this.tasks.map((item)=>item.teamMemberUserId)
      .filter((number, index, array) => array.indexOf(number) === index)
      console.log(distinctTeamMemberUserIds)
      let teamMemberIdsString=distinctTeamMemberUserIds.join(",")
      this.userService.getUserNamesWithId(teamMemberIdsString).subscribe((res)=>{
        let teamMemberName=res
        this.tasks.forEach((item)=> {
          let matchingItem = teamMemberName.find(
            (element) => element.id === item.teamMemberUserId
          );
          if (matchingItem != undefined)
            item.employeeName = matchingItem.name;
          console.log(matchingItem);
        });
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
  onTeamMemberClick(employeeId:number){

    this.router.navigate(['teammember/employeedetails',employeeId]);
  
  }

}
