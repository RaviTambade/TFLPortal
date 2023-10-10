import { Component, OnInit } from '@angular/core';
import { Projectname } from 'src/app/Models/projectname';
import { Projectpercentage } from 'src/app/Models/projectpercentage';
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
    private biService: BIserviceService
  ) {}

  ngOnInit(): void {
    let userId = localStorage.getItem('userId');
    this.employeeService.getEmployeeId(Number(userId)).subscribe((res) => {
      this.teamManagerId = res;
      this.projectService.getManagerProjectNames(this.teamManagerId).subscribe((res) => {
        this.projectNames = res;
        this.loadCompletionPercentages();
      });
    });
  }

  loadCompletionPercentages(): void {
    let projectIds = this.projectNames.map((p) => p.projectId);
    console.log(projectIds)
    let projectIdsString = projectIds.join(',');
    console.log(projectIdsString)
    this.biService.getProjectCompletionPercentage(projectIdsString).subscribe((res) => {
      this.percentages = res;
      console.log(this.percentages)
    });
  }

  getCompletionPercentage(projectId: number): number {
    const projectPercentage = this.percentages.find((p) => p.projectId === projectId);
    return projectPercentage ? projectPercentage.completionPercentage : 0;
  }
  
}
