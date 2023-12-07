import { Component, OnInit } from '@angular/core';
import { ActivityService } from '../../Services/activity.service';
import { Project } from 'src/app/projects/Models/project';
import { Activity } from '../../Models/Activity';

@Component({
  selector: 'app-project-activities',
  templateUrl: './project-activities.component.html',
  styleUrls: ['./project-activities.component.css'],
})
export class ProjectActivitiesComponent implements OnInit {
  projects: Project[] = [];
  activities: Activity[] = [];
  projectId: number = 0;
  isFalse:boolean=false;
  todoTasks: Activity[] = []; // Replace 'any' with the actual type of your tasks
  inprogressTasks: Activity[] = [];
  completedTasks: Activity[] = [];
  filteredActivities: Activity[]=[];

  showTodoTasks: boolean = false;
  showInProgressTasks: boolean = false;
  showCompletedTasks: boolean = false;
  
  constructor(private service: ActivityService) {}

  ngOnInit(): void {
    this.service.getAllProjects().subscribe((res) => {
      this.projects = res;
      this.projectId = this.projects[0].id;
      this.getActivitiesOfSelectedProject(this.projectId);
    });
  }

  getSelectedProjectId(e: any) {
    this.projectId = e.target.value;
    console.log(this.projectId);
    this.getActivitiesOfSelectedProject(this.projectId);
  }

  getActivitiesOfSelectedProject(projectId: number) {
    this.service.getAllActivitiesByProject(projectId).subscribe((res) => {
      this.activities = res;
      console.log(res);
    });
  }


  // filterTasks() {
  //   // Logic to filter tasks and populate todoTasks, inprogressTasks, and completedTasks
   
  //   this.todoTasks= this.activities.filter((p) => p.status.includes('todo'));
  //   this.inprogressTasks= this.activities.filter((p) =>p.status.includes('inprogress'));
  //   this.completedTasks=this.activities.filter((p) =>p.status.includes('completed'));
  // }
 
  // filterArray(status: string): void {
  //   switch (status) {
  //     case 'A':
  //       this.activities = this.activities.filter(item => item.status === 'todo');
  //       break;
  //     case 'B':
  //       this.activities = this.activities.filter(item => item.status === 'inprogress');
  //       break;

  //     case 'B':
  //         this.activities = this.activities.filter(item => item.status === 'completed');
  //      break;
  //     // Add more cases as needed
  //     default:
  //       this.activities = this.activities;
  //       break;
  //   }
  // }
  

  filterArray(status: string): void {
    switch (status) {
      case 'todo':
        this.showTodoTasks=true;
        // this.filteredActivities = this.activities.filter(item => item.status === 'todo');
        break;
      case 'inprogress':
        this.showInProgressTasks=true;
        // this.filteredActivities = this.activities.filter(item => item.status === 'inprogress');
        break;
      case 'completed':
        this.showCompletedTasks=true;
        // this.filteredActivities = this.activities.filter(item => item.status === 'completed');
        break;
      // Add more cases as needed
      default:
        this.filteredActivities = this.activities;
        break;
    }

    if(this.showTodoTasks && this.showInProgressTasks && this.showCompletedTasks){
      this.filteredActivities = this.activities;
    }

    else if(this.showTodoTasks && this.showInProgressTasks){
      this.filteredActivities = this.activities.filter(item => item.status === 'todo' || item.status==='inprogress');
    }
    else if(this.showTodoTasks && this.showCompletedTasks){
      this.filteredActivities = this.activities.filter(item => item.status === 'todo' || item.status==='completed');
    }

    else if(this.showInProgressTasks && this.showCompletedTasks){
      this.filteredActivities = this.activities.filter(item => item.status === 'inprogress' || item.status==='completed');
    }

    else if(this.showTodoTasks){
      this.filteredActivities = this.activities.filter(item => item.status === 'todo');
    }
    else if(this.showInProgressTasks){
      this.filteredActivities = this.activities.filter(item => item.status === 'inprogress');
    }
    else if(this.showCompletedTasks){
      this.filteredActivities = this.activities.filter(item => item.status === 'completed');
    }
  }

  
  
}
