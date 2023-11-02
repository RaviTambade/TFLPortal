import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Project } from 'src/app/Models/project';
import { ProjectService } from 'src/app/Services/project.service';
import { UserService } from 'src/app/Services/user.service';

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
    private userService:UserService
  ) {}
  ngOnInit(): void {
    this.projectService.selectedProjectId$.subscribe((res) => {
      console.log(res);
      this.projectId = res;
 
    if(this.projectId!=null){
    this.projectService
        .getProjectDetails(this.projectId)
        .subscribe((details) => {
          this.projectDetails = details;
          // this.selectProject(this.projectDetails.id);
        });
      }
      });
}

  getAllTasksOfProject(projectId: number) {
  const isTeamManager=this.userService.isUserHaveRequiredRole("Team Manager")
  if(isTeamManager){
      this.router.navigate(['teammanager/projecttasks', projectId], { queryParams: { projectName: this.projectDetails.title } });
  }else{
    this.router.navigate(['teammember/projecttasks', projectId], { queryParams: { projectName: this.projectDetails.title } });
  }
  }
  
updateProject(projectId: number) {
    if (projectId) {
      this.router.navigate(['teammanager/updateproject', projectId]);
    }
  }
  unAssignedTask(projectId:number){
    this.router.navigate(['teammanager/unassignedtasks',projectId], { queryParams: { projectName: this.projectDetails.title } });
  }

  canShowButton(){
    return this.userService.isUserHaveRequiredRole("Team Manager");
  }
  onRemoveButton(id: number) {
    const confirmation = window.confirm('Are you sure you want to delete this project?');
  
    if (confirmation) {
    
      this.projectService.deleteProject(id).subscribe((res) => {
        window.location.reload()
      });
    } else {
      console.log('Deletion canceled');
    }
}
}
