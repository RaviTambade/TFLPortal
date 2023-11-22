import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenClaims } from 'src/app/Models/Enums/tokenClaims';
import { Projectlist } from 'src/app/Models/projectlist';
import { Projecttaskcount } from 'src/app/Models/projecttaskcount';
import { AuthenticationService } from 'src/app/Services/authentication.service';
import { EmployeeService } from 'src/app/Services/employee.service';
import { ProjectService } from 'src/app/Services/project.service';
import { TaskService } from 'src/app/Services/task.service';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-managerprojects',
  templateUrl: './managerprojects.component.html',
  styleUrls: ['./managerprojects.component.css']
})
export class ManagerprojectsComponent implements OnInit {
  projectList: Projectlist[] = [];
  selectedProjectId: number | null = null;
  filteredProjects: Projectlist[] = [];
  teamManagerId: number = 0;
  teamManagerUserId: string = '';
  projectTaskCount: Projecttaskcount;
  constructor(
    private projectService: ProjectService,
    private router: Router,
    private employeeService: EmployeeService, private authservice:AuthenticationService ) {
    this.projectTaskCount = {
      completedTaskCount: 0,
      totalTaskCount: 0,
    };
  }
  parseDate(dateString: string): Date {
    const dateParts = dateString.split(' ')[0].split('-');
    const year = parseInt(dateParts[2], 10);
    const month = parseInt(dateParts[1], 10) - 1;
    const day = parseInt(dateParts[0], 10);

    return new Date(year, month, day);
  }
  ngOnInit() {
    let userId = this.authservice.getClaimFromToken(TokenClaims.userId);
    this.employeeService.getEmployeeId(userId).subscribe((res) => {
      this.teamManagerId = res;
      this.projectService
        .getManagerProjects(this.teamManagerId)
        .subscribe((res) => {
          this.projectList = res;
          this.filteredProjects = res;
            });
        });
  }

  filterProjectsByStatus(status: string) {
    if (status === 'All') {
      this.filteredProjects = this.projectList;
    } else {
      this.filteredProjects = this.projectList.filter(
        (project) => project.status === status
      );
    }
    this.selectedProjectId = null;
    this.projectService.setSelectedProjectId(this.selectedProjectId);
  }

  selectProject(id: number | null) {
    if (this.selectedProjectId === id) {
      this.selectedProjectId = null;
    } else {
      this.selectedProjectId = id;
    }
    this.projectService.setSelectedProjectId(id);
  }

addProject() {
    this.router.navigate(['teammanager/addproject']); 
}
addTask(projectId:number){
  this.router.navigate(['teammanager/addtask',projectId])
}

}
