import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NameId } from 'src/app/Models/name-id';
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
  teamMembers:NameId[]=[]
  teamMember:string[]=[]
  selectedUserId:number=0
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
            this.teamMembers=res
            this.teamMember=res.map(res=>res.name)
          })
        });
      });
  }
  onTeamMemberClick(employeeId:number){
// this.selectedUserId=employeeId
    this.router.navigate(['teammember/employeedetails',employeeId]);

  }
}
