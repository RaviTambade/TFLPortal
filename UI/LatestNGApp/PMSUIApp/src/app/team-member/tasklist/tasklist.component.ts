import { Component, OnInit } from '@angular/core';
import { ProjectService } from 'src/app/Services/project.service';
import { TaskService } from 'src/app/Services/task.service';

@Component({
  selector: 'app-tasklist',
  templateUrl: './tasklist.component.html',
  styleUrls: ['./tasklist.component.css'],
})
export class TasklistComponent implements OnInit {
  selectedTaskId: number | null = null;
  selectedDate:string='';
  tasks: any[] = [];
  filteredTasks: any[] = [];
  constructor(
    public taskService: TaskService,
    public projectService: ProjectService
  ) {}
  ngOnInit(): void {
    this.taskService.getAllTasks().subscribe((res) => {
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
    console.log(status)
    if (status === 'All') {
      this.filteredTasks = this.tasks;
    } else {
      this.filteredTasks = this.tasks.filter((task) => task.status === status)
    }
    this.selectedTaskId =null;
    this.taskService.setSelectedTaskId(this.selectedTaskId)
  }

  getTasksByDate(date: string) {
    this.filteredTasks = this.taskService.getTasksByDate(date);
  }
  showAllTasks() {
    this.selectedDate = '';
    this.taskService.getAllTasks().subscribe((res) => {
      this.tasks = res;
      this.filteredTasks=res
    });
  }
}
