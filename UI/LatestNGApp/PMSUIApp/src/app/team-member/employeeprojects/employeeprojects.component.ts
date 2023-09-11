import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProjectService } from 'src/app/Services/project.service';

@Component({
  selector: 'app-employeeprojects',
  templateUrl: './employeeprojects.component.html',
  styleUrls: ['./employeeprojects.component.css']
})
export class EmployeeprojectsComponent {
  projects: any[]=[]; 
  selectedProjectId: number | null = null;
  filteredProjects: any[] = [];
  activeAction:"details" | null =null
  constructor(private projectService: ProjectService, private router: Router) { }

  ngOnInit() {
    this.projectService.getProjects().subscribe(projects => {
      this.projects = projects;
      this.filteredProjects = projects;
    });
  }
onActionClick(action:"details",projectId:number){
  if(this.activeAction === action && this.selectedProjectId=== projectId){
    this.activeAction =null;
    this.selectedProjectId= null;
  }
    else{
      this.activeAction=action;
      this.selectedProjectId=projectId;
    }
}
  filterProjectsByStatus(status: string) {
    if (status === 'All') {
      this.filteredProjects = this.projects;
    } else {
      this.filteredProjects = this.projects.filter(project => project.status === status);
    }
  }

  getAllTasksOfProject(projectId: number) {
    if (projectId) {
      this.router.navigate(['teammember/projecttasks', projectId]);
    }
}
}
