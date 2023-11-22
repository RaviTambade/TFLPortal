import { Component, OnInit } from '@angular/core';
import { TokenClaims } from 'src/app/Models/Enums/tokenClaims';
import { Projectname } from 'src/app/Models/projectname';
import { Projectpercentage } from 'src/app/Models/projectpercentage';
import { AuthenticationService } from 'src/app/Services/authentication.service';
import { BIserviceService } from 'src/app/Services/biservice.service';
import { EmployeeService } from 'src/app/Services/employee.service';
import { ProjectService } from 'src/app/Services/project.service';

@Component({
  selector: 'app-projectcompletion',
  templateUrl: './projectcompletion.component.html',
  styleUrls: ['./projectcompletion.component.css']
})
export class ProjectcompletionComponent implements OnInit {
  teamManagerId: number = 0;
  projectNames: Projectname[] = [];
  percentages: Projectpercentage[] = [];

  constructor(
    private employeeService: EmployeeService,
    private projectService: ProjectService,
    private biService: BIserviceService,
    private authservice:AuthenticationService
  ) {}

  ngOnInit(): void {
    let userId = Number(this.authservice.getClaimFromToken(TokenClaims.userId));
    this.employeeService.getEmployeeId(userId).subscribe((res) => {
      this.teamManagerId = res;
      this.projectService.getManagerProjectNames(this.teamManagerId).subscribe((res) => {
        this.projectNames = res;
        this.loadCompletionPercentages();
      });
    });
  }

  loadCompletionPercentages(): void {
    let projectIds = this.projectNames.map((p) => p.projectId);
    
    let projectIdsString = projectIds.join(',');
     this.biService.getProjectCompletionPercentage(projectIdsString).subscribe((res) => {
      this.percentages = res;
    });
  }

  getCompletionPercentage(projectId: number): number {
    const projectPercentage = this.percentages.find((p) => p.projectId === projectId);
    return projectPercentage ? projectPercentage.completionPercentage : 0;
  }
  

}
