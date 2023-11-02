import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Mytasklist } from 'src/app/Models/mytasklist';
import { EmployeeService } from 'src/app/Services/employee.service';
import { ProjectService } from 'src/app/Services/project.service';
import { TaskService } from 'src/app/Services/task.service';

@Component({
  selector: 'app-tasklist',
  templateUrl: './tasklist.component.html',
  styleUrls: ['./tasklist.component.css'],
})
export class TasklistComponent implements OnInit {
  selectedProjectId: number | null = null;
  taskId: number | null = null;
  selectedTaskId: number | null = null;
  selectedDate:string='';
  tasks: Mytasklist[] = [];
  filteredTasks: any[] = [];
  teamMemberId: number = 0;
  selectedTimePeriod:string="today"
  constructor(
    public taskService: TaskService,
    public projectService: ProjectService,
    public employeeService:EmployeeService,
    private router:Router
  ) {}
  ngOnInit(): void {
    this.taskService.selectedTaskId$.subscribe((taskId) => {
      this.taskId = taskId;
    let userId = localStorage.getItem('userId');
    this.employeeService.getEmployeeId(Number(userId)).subscribe((res) => {
      this.teamMemberId = res;
      this.filterMyTasks(this.selectedTimePeriod) 
   
  })
})
  }
filterMyTasks(timePeriod:string){
  this.selectedTimePeriod=timePeriod
  this.taskService.GetMyTaskList(this.teamMemberId,timePeriod).subscribe((res) => {
    this.tasks = res;
    this.filteredTasks=res
  });
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
  filterTasksByStatus(status: string) {
    if (status === 'All') {
      this.filteredTasks = this.tasks;
    } else {
      this.filteredTasks = this.tasks.filter((task) => task.status === status)
    }
    this.selectedTaskId =null;
    this.taskService.setSelectedTaskId(this.selectedTaskId)
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