import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/projects/Models/project';
import { LocalStorageKeys } from 'src/app/shared/enums/local-storage-keys';
import { ProjectService } from 'src/app/shared/services/project.service';

@Component({
  selector: 'app-my-projects',
  templateUrl: './my-projects.component.html',
  styleUrls: ['./my-projects.component.css']
})
export class MyProjectsComponent implements OnInit{
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
