import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ProjectsService } from '../../Services/projects.service';
import { Project } from '../../Models/project';

@Component({
  selector: 'project-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  @Output() selectedProjectId = new EventEmitter<Project>();
  constructor(private service: ProjectsService) {}

  projects: Project[] = [];
  employeeId: number = 6;
  ngOnInit(): void {
    this.service.getProjectsList(this.employeeId).subscribe((res) => {
      this.projects = res;
      this.selectedProjectId.emit(this.projects[0]); 
    });
  }

  onClickProject(project: Project) {
    this.selectedProjectId.emit(project);
  }

}
