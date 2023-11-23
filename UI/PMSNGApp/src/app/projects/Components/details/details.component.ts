import { Component, Input, SimpleChanges } from '@angular/core';
import { Project } from '../../Models/project';
import { ProjectsService } from '../../Services/projects.service';
import { ResourceManagementService } from 'src/app/resource-management/Services/resource-management.service';

@Component({
  selector: 'project-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
})
export class DetailsComponent  {
  projectDetails: Project = {
    id: 0,
    title: '',
    startDate: '',
    status: '',
    teamManagerUserId: 0,
    teamManagerId: 0,
  };

  constructor(private service: ProjectsService,private resourceSvc:ResourceManagementService) {}

  @Input() projectId!: number;

  ngOnChanges(changes: SimpleChanges) {
    this.service.getProjectDetailsById(changes["projectId"].currentValue).subscribe((res) => {
      this.projectDetails = res;
      console.log("🚀 ~ this.service.getProjectDetailsById ~ res:", res);
    });
  }
}
