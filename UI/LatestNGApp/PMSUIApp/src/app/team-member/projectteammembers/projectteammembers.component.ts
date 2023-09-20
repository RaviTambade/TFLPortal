import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeService } from 'src/app/Services/employee.service';
import { ProjectService } from 'src/app/Services/project.service';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-projectteammembers',
  templateUrl: './projectteammembers.component.html',
  styleUrls: ['./projectteammembers.component.css'],
})
export class ProjectteammembersComponent implements OnInit {
projectId: number =0;
  teamMembersUserId: number[];
  teamMembers:string[]=[]
  constructor(private projectService: ProjectService, private router: Router,private employeeService:EmployeeService,private userService:UserService) {
    this.teamMembersUserId = [];
  }
  ngOnInit(): void {
      this.projectService.selectedProjectId$.subscribe((response) => {
        this.projectId=response;
        this.projectService.getProjectMembers(this.projectId).subscribe((res) => {
          this.teamMembersUserId= res
          console.log(res);
          let teamManagerUserIdString=this.teamMembersUserId.join(",")
          this.userService.getUserNamesWithId(teamManagerUserIdString).subscribe((res)=>{
            console.log(res)
            this.teamMembers=res.map(user=>user.name)
          })

        });
      });
  }
  onTeamMemberClick(employee:string){
    // this.employeeService.getEmployeeDetails(employee).subscribe((res)=>{
   + //   console.log(res)
    this.router.navigate(['teammember/employeedetails',employee]);

  }
}
