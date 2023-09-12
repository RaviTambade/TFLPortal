import { Component, Input, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { ProjectService } from 'src/app/Services/project.service';

@Component({
  selector: 'app-employeeprojectdetails',
  templateUrl: './employeeprojectdetails.component.html',
  styleUrls: ['./employeeprojectdetails.component.css']
})
export class EmployeeprojectdetailsComponent {
  @Input() projectId: number | undefined=undefined;
  projectDetails: any = {};

  constructor(private projectService: ProjectService,private router:Router) { }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['projectId'] && this.projectId !== undefined) {
      this.projectService.getProjectDetails(this.projectId).subscribe(details => {
        this.projectDetails = details;
        this.selectProject(this.projectDetails.id)
      });
    }
  }
  selectProject(id:number){
    this.projectId=id
    console.log(id)
    this.projectService.setSelectedProjectId(id);
  }
  getAllTasksOfProject(projectId: number) {
    if (projectId) {
      this.router.navigate(['teammember/projecttasks', projectId]);
    }
  }
}
