import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Alltasklist } from 'src/app/Models/alltasklist';
import { EmployeeService } from 'src/app/Services/employee.service';
import { ProjectService } from 'src/app/Services/project.service';
import { TaskService } from 'src/app/Services/task.service';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-alltaskslist',
  templateUrl: './alltaskslist.component.html',
  styleUrls: ['./alltaskslist.component.css']
})
export class AlltaskslistComponent {
  selectedProjectId: number | null = null;
  selectedTaskId: number | null = null;
  tasks: Alltasklist[] = [];
  filteredTasks: any[] = [];
  employeeId:number=0
  selectedTimePeriod:string="today"
  constructor(
    private taskService: TaskService,
    private projectService: ProjectService,
    private router:Router,
    private employeeService:EmployeeService,
    private userService:UserService
  ) {}
  ngOnInit(): void {
    let userId = localStorage.getItem('userId');
    this.employeeService.getEmployeeId(Number(userId)).subscribe((res) => {
      this.employeeId = res;
      this.filterAllTasks(this.selectedTimePeriod)

    })
  }
filterAllTasks(timePeriod:string){
  this.selectedTimePeriod=timePeriod
    this.taskService.getAllTaskList(this.employeeId,timePeriod).subscribe((res) => {
      this.tasks = res;
      let distinctTeamMemberUserIds=this.tasks.map((item)=>item.teamMemberUserId)
      .filter((number, index, array) => array.indexOf(number) === index);
      let teamMemberIdsString=distinctTeamMemberUserIds.join(",")
      this.userService
      .getUserNamesWithId(teamMemberIdsString)
      .subscribe((res) => {
        let teamMemberName = res;
        console.log(teamMemberName);
        this.tasks.forEach((item) => {
          let matchingItem = teamMemberName.find(
            (element) => element.id === item.teamMemberUserId
          );
          if (matchingItem != undefined){
            item.employeeName = matchingItem.name;
            item.teamMemberUserId=matchingItem.id
          }
        });
    });
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
  // filterTasksByStatus(status: string) {
  //   console.log(status)
  //   if (status === 'All') {
  //     this.filteredTasks = this.tasks;
  //   } else {
  //     this.filteredTasks = this.tasks.filter((task) => task.status === status)
  //   }
  //   this.selectedTaskId =null;
  //   this.taskService.setSelectedTaskId(this.selectedTaskId)
  // }
  onTeamMemberClick(employeeId:number){
        this.router.navigate(['teammember/employeedetails',employeeId]);
    
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
