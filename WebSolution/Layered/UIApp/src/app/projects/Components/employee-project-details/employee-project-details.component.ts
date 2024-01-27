import { Component, Input, SimpleChanges } from '@angular/core';
import { ProjectsService } from '../../Services/projects.service';
import { Project } from '../../Models/project';

@Component({
  selector: 'app-employee-project-details',
  templateUrl: './employee-project-details.component.html',
  styleUrls: ['./employee-project-details.component.css']
})
export class EmployeeProjectDetailsComponent {
  constructor(
    private service: ProjectsService,
  ) {}

  @Input() project!: Project;

  ngOnChanges(changes: SimpleChanges) {
    this.project =changes['project'].currentValue;
    console.log(changes['project'].currentValue);
  }
}
