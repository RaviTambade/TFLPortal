import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProjectService } from 'src/app/Services/project.service';

@Component({
  selector: 'app-managerprojects',
  templateUrl: './managerprojects.component.html',
  styleUrls: ['./managerprojects.component.css']
})
export class ManagerprojectsComponent {
  projects: any[] = [];
  selectedProjectId: number | null = null;
  filteredProjects: any[] = [];
  constructor(private projectService: ProjectService, private router: Router) {}

  ngOnInit() {
    this.projectService.getProjects().subscribe((projects) => {
      this.projects = projects;
      this.filteredProjects = projects;
    });
  }

  filterProjectsByStatus(status: string) {
    if (status === 'All') {
      this.filteredProjects = this.projects;
    } else {
      this.filteredProjects = this.projects.filter(
        (project) => project.status === status
      );
    }
    this.selectedProjectId = null;
    this.projectService.setSelectedProjectId(this.selectedProjectId);
  } 
  
  selectProject(id: number | null) {
    if (this.selectedProjectId === id) {
      this.selectedProjectId = null;
    } else {
      this.selectedProjectId = id;
    }
    this.projectService.setSelectedProjectId(id);
  }

}
