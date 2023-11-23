import { Component, Input, SimpleChanges } from '@angular/core';
import { Project } from '../../Models/project';
import { ProjectsService } from '../../Services/projects.service';
import { ResourceManagementService } from 'src/app/resource-management/Services/resource-management.service';

@Component({
  selector: 'project-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
})
export class DetailsComponent {
  constructor(
    private service: ProjectsService,
    private resourceSvc: ResourceManagementService
  ) {}

  @Input() project!: Project;

  ngOnChanges(changes: SimpleChanges) {
    this.project = changes['project'].currentValue;
  }
}
