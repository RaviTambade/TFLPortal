import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Project } from '../../Models/project';
import { ProjectService } from 'src/app/shared/services/project.service';
import { LocalStorageKeys } from 'src/app/shared/Enums/local-storage-keys';

@Component({
  selector: 'app-employee-project-list',
  templateUrl: './employee-project-list.component.html',
  styleUrls: ['./employee-project-list.component.css']
})
export class EmployeeProjectListComponent implements OnInit {
 // @Output() selectedProjectId = new EventEmitter<Project>();
 employeeId: any;
  constructor(private service: ProjectService) {this.employeeId=localStorage.getItem(LocalStorageKeys.employeeId)}
selectedProject:Project|undefined;
  projects: Project[] = [];
  
  ngOnInit(): void {
    this.service.getProjectsOfEmployee(this.employeeId).subscribe((res) => {
      this.projects = res;
      this.selectedProject=this.projects[0];
    });
  }

  onClickProject(project: Project) {
    this.selectedProject=project;
  }
}
