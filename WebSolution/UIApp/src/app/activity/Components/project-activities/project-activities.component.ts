import { Component, OnInit } from '@angular/core';
import { ActivityService } from '../../Services/activity.service';
import { Project } from 'src/app/projects/Models/project';
import { Activity } from '../../Models/Activity';
import { ProjectService } from 'src/app/shared/services/project.service';
import { WorkmgmtService } from 'src/app/shared/services/workmgmt.service';

@Component({
  selector: 'project-activities',
  templateUrl: './project-activities.component.html',
  styleUrls: ['./project-activities.component.css'],
})
export class ProjectActivitiesComponent implements OnInit {
  projects: Project[] = [];
  activities: Activity[] = [];
  projectId: number = 0;

  visibleActivities: Activity[]=[];

  checkStatusTodo: boolean = true;
  checkStatusInProgress: boolean = true;
  checkStatusCompleted: boolean = true;
  
  constructor(private projectSvc: ProjectService,private workMgmtSvc:WorkmgmtService) {}

  ngOnInit(): void {
    this.projectSvc.fetchAllProject().subscribe((res) => {
      this.projects = res;
      this.projectId = this.projects[0].id;

      this.populateActivities(this.projectId);
    });
  }

  onChangeProject(e: any) {
    this.projectId = e.target.value;
    this.populateActivities(this.projectId);
  }

  populateActivities(projectId: number) {
    this.workMgmtSvc.fetchActivitiesByProject(projectId).subscribe((res) => {
      this.activities = res;
      this.filterActivities();
    });
  }


  filterActivities(): void {
   
    if(this.checkStatusTodo && this.checkStatusInProgress && this.checkStatusCompleted){
      this.visibleActivities = this.activities;
    }

    else if(this.checkStatusTodo && this.checkStatusInProgress){
      this.visibleActivities = this.activities.filter(item => item.status === 'todo' || item.status==='inprogress');
    }
    else if(this.checkStatusTodo && this.checkStatusCompleted){
      this.visibleActivities = this.activities.filter(item => item.status === 'todo' || item.status==='completed');
    }

    else if(this.checkStatusInProgress && this.checkStatusCompleted){
      this.visibleActivities = this.activities.filter(item => item.status === 'inprogress' || item.status==='completed');
    }

    else if(this.checkStatusTodo){
      this.visibleActivities = this.activities.filter(item => item.status === 'todo');
    }
    else if(this.checkStatusInProgress){
      this.visibleActivities = this.activities.filter(item => item.status === 'inprogress');
    }
    else if(this.checkStatusCompleted){
      this.visibleActivities = this.activities.filter(item => item.status === 'completed');
    }

    else{
      this.visibleActivities=[];
    }
  }
}
