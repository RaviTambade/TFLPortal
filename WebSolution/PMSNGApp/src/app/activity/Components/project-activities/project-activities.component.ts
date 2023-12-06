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

  tasks: Activity[] = [];

  showTasks(status: string): void {
    this.isFalse=true;
    switch (status) {
      case 'todo':
        this.tasks = this.activities.filter((p) => p.status.includes('todo'));
        break;
      case 'inprogress':
        this.tasks = this.activities.filter((p) =>
          p.status.includes('inprogress')
        );
        break;
      case 'completed':
        this.tasks = this.activities.filter((p) =>
          p.status.includes('completed')
        );
        break;
      default:
        this.tasks = [];
        break;
    }
  }
}
