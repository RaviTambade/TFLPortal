import { Component, Input} from '@angular/core';
import { Project } from 'src/app/shared/Entities/Projectmgmt/Project';
@Component({
  selector: 'project-item',
  templateUrl: './projectitem.html',
})
export class ProjectItem  {
 
  @Input() project: Project | undefined;
 
}
