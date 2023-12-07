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


  onTodoChange(e:any):void{
    if (e.target.checked) {
          this.showTodoTasks=true;
    }
    else{
      this.showTodoTasks=false;
    }
    this.filterActivities();
  }

  onInprogressChange(e:any):void{
    if (e.target.checked) {
          this.showInProgressTasks=true;
    }
    else{
      this.showInProgressTasks=false;
    }
    this.filterActivities();
  }


  onCompletedChange(e:any):void{
    if (e.target.checked) {
          this.showCompletedTasks=true;
    }
    else{
      this.showCompletedTasks=false;
    }
    this.filterActivities();
  }


  filterActivities(): void {
     
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
