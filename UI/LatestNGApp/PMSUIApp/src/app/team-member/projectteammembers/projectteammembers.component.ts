import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { NameId } from 'src/app/Models/name-id';
import { EmployeeService } from 'src/app/Services/employee.service';
import { ProjectService } from 'src/app/Services/project.service';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-projectteammembers',
  templateUrl: './projectteammembers.component.html',
  styleUrls: ['./projectteammembers.component.css'],
})
export class ProjectteammembersComponent implements OnInit,OnDestroy {
projectId: number =0;
  teamMembersUserId: number[];
  teamMembers:NameId[]=[]
  teamMember:string[]=[]
  selectedUserId:number=0
  private projectSubscription:Subscription |undefined;
  constructor(private projectService: ProjectService, private router: Router,private employeeService:EmployeeService,private userService:UserService) {
    this.teamMembersUserId = [];
  }
  ngOnInit(): void {
    this.projectSubscription= this.projectService.selectedProjectId$.subscribe((response) => {
        this.projectId=response;
        this.projectService.getProjectMembers(this.projectId).subscribe((res) => {
          this.teamMembersUserId= res
          if (this.teamMembersUserId.length > 0) {
          let teamManagerUserIdString=this.teamMembersUserId.join(",")
          this.userService.getUserNamesWithId(teamManagerUserIdString).subscribe((res)=>{
            this.teamMembers=res
           return this.teamMember=res.map(res=>res.name)
            
          })
        }
        else{
          this.teamMembers = [];
  this.teamMember = [];
        }
        });
      });
  }
  onTeamMemberClick(employeeId:number){

    this.router.navigate(['teammember/employeedetails',employeeId]);

  }
  ngOnDestroy():void{
this.projectSubscription?.unsubscribe()
  }
}
