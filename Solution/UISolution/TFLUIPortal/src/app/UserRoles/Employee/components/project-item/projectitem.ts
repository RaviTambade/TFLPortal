import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Project } from 'src/app/shared/Entities/Projectmgmt/Project';
import { ProjectService } from 'src/app/shared/services/ProjectMgmt/project.service';
@Component({
  selector: 'project-item',
  templateUrl: './projectitem.html',
})
export class ProjectItem  {
 
  @Input() project: Project | undefined;
 
}
