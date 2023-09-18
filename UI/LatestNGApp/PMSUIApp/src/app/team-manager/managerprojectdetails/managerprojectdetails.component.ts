import { Component, Input, SimpleChanges } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProjectService } from 'src/app/Services/project.service';

@Component({
  selector: 'app-managerprojectdetails',
  templateUrl: './managerprojectdetails.component.html',
  styleUrls: ['./managerprojectdetails.component.css']
})
export class ManagerprojectdetailsComponent {
  
  @Input() projectId: number | null = null;
  projectDetails: any = {};

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

    if(this.projectId!=null)
    this.projectService
        .getProjectDetails(this.projectId)
        .subscribe((details) => {
          this.projectDetails = details;
          this.selectProject(this.projectDetails.id);
        });

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

  updateProject(projectId: number) {
    if (projectId) {
      this.router.navigate(['teammanager/updateproject', projectId]);
    }
  }

}
