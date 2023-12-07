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
  filteredActivities: Activity[]=[];

  showTodoTasks: boolean = true;
  showInProgressTasks: boolean = true;
  showCompletedTasks: boolean = true;
  
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
      this.filterActivities();
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

  OnProgressChange(e:any):void{
    if (e.target.checked) {
          this.showInProgressTasks=true;
    }
    else{
      this.showInProgressTasks=false;
    }
    this.filterActivities();
  }


  OnCompletedChange(e:any):void{
    if (e.target.checked) {
          this.showCompletedTasks=true;
    }
    else{
      this.showCompletedTasks=false;
    }
    this.filterActivities();
  }


  filterActivities(): void {
    this.isFalse=false; 
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

    else{
      this.isFalse=true;
      this.filteredActivities=[];
    }
  }

  
}
