import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Project } from 'src/app/Models/project';
import { ProjectService } from 'src/app/Services/project.service';

@Component({
  selector: 'app-employeeprojectdetails',
  templateUrl: './employeeprojectdetails.component.html',
  styleUrls: ['./employeeprojectdetails.component.css'],
})
export class EmployeeprojectdetailsComponent {
  @Input() projectId: number | null = null;
  projectDetails: Project = {
    id: 0,
    title: '',
    startDate: '',
    endDate: 0,
    description: '',
    status: '',
    teamManagerUserId: 0
  };

  constructor(
    private projectService: ProjectService,
    private router: Router,
    private route: ActivatedRoute
  ) {}
  ngOnInit(): void {
    this.projectService.selectedProjectId$.subscribe((res) => {
      console.log(res);
      this.projectId = res;
    });
    if(this.projectId!=null){
    this.projectService
        .getProjectDetails(this.projectId)
        .subscribe((details) => {
          console.log(details)
          console.log(this.projectId)
          this.projectDetails = details;
          this.selectProject(this.projectDetails.id);
        });

  }
}

  ngOnChanges(changes: SimpleChanges) {
    if (this.projectId !== null) {
      this.projectService
        .getProjectDetails(this.projectId)
        .subscribe((details) => {
          this.projectDetails = details;
          this.selectProject(this.projectDetails.id);
        });
    }
  }
  selectProject(id: number | null) {
    if (this.projectId === id) {
      this.projectId = null;
    } else {
      this.projectId = id;
    }
    this.projectService.setSelectedProjectId(id);
  }
  getAllTasksOfProject(projectId: number) {
    if (projectId) {
      this.router.navigate(['teammember/projecttasks', projectId]);
    }
  }
}
