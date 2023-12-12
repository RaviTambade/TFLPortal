import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Project } from '../../Models/project';
import { ProjectService } from 'src/app/shared/services/project.service';

@Component({
  selector: 'app-employee-project-list',
  templateUrl: './employee-project-list.component.html',
  styleUrls: ['./employee-project-list.component.css']
})
export class EmployeeProjectListComponent implements OnInit {
 // @Output() selectedProjectId = new EventEmitter<Project>();
  constructor(private service: ProjectService) {}
selectedProject:Project|undefined;
  projects: Project[] = [];
  employeeId: number = 10;
  ngOnInit(): void {
    this.service.getProjectOfEmployee(this.employeeId).subscribe((res) => {
      this.projects = res;
      this.selectedProject=this.projects[0];
    });
  }

  onClickProject(project: Project) {
    this.selectedProject=project;
  }
}
