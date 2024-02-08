import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Project } from 'src/app/Entities/Project';
import { LocalStorageKeys } from 'src/app/shared/enums/local-storage-keys';
import { ProjectService } from 'src/app/shared/services/ProjectMgmt/project.service';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
})
export class ProjectListComponent implements OnInit {
  projects: Project[] | undefined;
  employeeId: number = 0;
  constructor(private projectSvc: ProjectService) {}
  ngOnInit(): void {
    this.employeeId = 10;
    this.projectSvc.getProjects(this.employeeId).subscribe((res) => {
      this.projects = res;
      console.log('🚀 ~ ngOnInit ~ res:', res);
    });
  }
}
