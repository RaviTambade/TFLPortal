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
  constructor(private projectService: ProjectService, private router: Router) { }

  ngOnInit() {
    this.projectService.getProjects().subscribe(projects => {
      this.projects = projects;
      this.filteredProjects = projects;
    });
  }

  viewDetails(projectId: number) {
    if (this.selectedProjectId === projectId) {
      this.selectedProjectId = null;
    } else {
      this.selectedProjectId = projectId;
    }
  }
  filterProjectsByStatus(status: string) {
    if (status === 'All') {
      this.filteredProjects = this.projects;
    } else {
      this.filteredProjects = this.projects.filter(project => project.status === status);
    }
  }

}
