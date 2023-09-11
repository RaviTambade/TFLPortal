import { Component, Input, SimpleChanges } from '@angular/core';
import { ProjectService } from 'src/app/Services/project.service';

@Component({
  selector: 'app-employeeprojectdetails',
  templateUrl: './employeeprojectdetails.component.html',
  styleUrls: ['./employeeprojectdetails.component.css']
})
export class EmployeeprojectdetailsComponent {
  @Input() projectId: number | null=null;
  projectDetails: any = {};

  constructor(private projectService: ProjectService) { }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['projectId'] && this.projectId !== null) {
      this.projectService.getProjectDetails(this.projectId).subscribe(details => {
        this.projectDetails = details;
      });
    }
  }
  selectProject(id:number){
    this.projectId=id
    console.log(id)
    this.projectService.setSelectedProjectId(id);
  }

}
