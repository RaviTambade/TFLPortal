import { Component, Input} from '@angular/core';
import { ProjectService } from 'src/app/employee/Services/project.service';
import { Project } from 'src/app/projectmanager/Models/Project';
@Component({
  selector: 'project-item',
  templateUrl: './projectitem.html',
})
export class ProjectItem  {
 
  //@Input() project: Project | undefined;
  project: Project | undefined;
  projectId: number = 0;
  
  constructor(private projectSvc: ProjectService) {}
  
  ngOnInit(): void {
    this.projectId = 10;
    this.projectSvc.getProject(this.projectId).subscribe((res) => {
      this.project = res;
    });
  }
}
