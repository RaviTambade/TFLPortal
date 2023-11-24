import { Component, Input, SimpleChanges } from '@angular/core';
import { Project } from '../../Models/project';
import { ProjectsService } from '../../Services/projects.service';

@Component({
  selector: 'project-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
})
export class DetailsComponent {
  constructor(
    private service: ProjectsService,
  ) {}

  @Input() project!: Project;

  ngOnChanges(changes: SimpleChanges) {
    this.project = changes['project'].currentValue;
  }
}
