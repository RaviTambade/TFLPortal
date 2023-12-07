import { Component } from '@angular/core';
import { ProjectsService } from '../../Services/projects.service';
import { Project } from '../../Models/project';

@Component({
  selector: 'app-all-projects-list',
  templateUrl: './all-projects-list.component.html',
  styleUrls: ['./all-projects-list.component.css'],
})
export class AllProjectsListComponent {
  projects: Project[] = [];
  constructor(private service: ProjectsService) {}

  ngOnInit(): void {
    this.service.getAllProjects().subscribe((res) => {
      this.projects = res;
    });
  }
}
