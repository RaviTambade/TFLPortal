import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeService } from 'src/app/Services/employee.service';
import { ProjectService } from 'src/app/Services/project.service';

@Component({
  selector: 'app-projectteammembers',
  templateUrl: './projectteammembers.component.html',
  styleUrls: ['./projectteammembers.component.css']
})
export class ProjectteammembersComponent {

  projectId: number =0;
  teamMembers: string[];
  constructor(private projectService: ProjectService, private router: Router,private employeeService:EmployeeService) {
    this.teamMembers = [];
  }
  ngOnInit(): void {
      this.projectService.selectedProjectId$.subscribe((response) => {
        this.projectId=response;
        this.projectService.getProjectTeamMembers(this.projectId).subscribe((res) => {
          this.teamMembers = res.teammembers;
          console.log(res);
        });
      });
  }
  onTeamMemberClick(employee:string){
    // this.employeeService.getEmployeeDetails(employee).subscribe((res)=>{
    //   console.log(res)
    this.router.navigate(['teammember/employeedetails',employee]);

  }

}
