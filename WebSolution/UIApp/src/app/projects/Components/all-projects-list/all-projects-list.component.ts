import { Component } from '@angular/core';
import { ProjectsService } from '../../Services/projects.service';
import { Project } from '../../Models/project';
import { ProjectService } from 'src/app/shared/services/project.service';

@Component({
  selector: 'app-all-projects-list',
  templateUrl: './all-projects-list.component.html',
  styleUrls: ['./all-projects-list.component.css'],
})
export class AllProjectsListComponent {
  projects: Project[] = [];
  constructor(private service: ProjectService) {}

  ngOnInit(): void {
    this.service.fetchAllProject().subscribe((res) => {
      this.projects = res;
    });
  }
}
