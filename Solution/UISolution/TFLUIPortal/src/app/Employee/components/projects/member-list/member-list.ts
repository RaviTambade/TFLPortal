import { Component, OnInit } from '@angular/core';
import { Member } from 'src/app/employee/Models/ProjectMgmt/Member';
import { ProjectService } from 'src/app/employee/Services/project.service';
import { MembershipService } from 'src/app/shared/services/Membership/membership.service';

@Component({
  selector: 'project-members',
  templateUrl: './member-list.html',
})
export class ProjectMemberList implements OnInit {
  projectId:number=4;
  members:Member[]=[];

  constructor(private projectSvc:ProjectService,
              private membershipSvc:MembershipService){     }
 
  ngOnInit(): void { 
      this.projectSvc.getAllProjectMembers(this.projectId).subscribe((res)=>{
        this.members=res;
        console.log(res);

        let allIds:number[] = this.members.map(o => o.employeeId);
        let strAllIds:string= allIds.join(",");

        this.membershipSvc.getUserDetails(strAllIds).subscribe((users)=>{
          this.members.forEach(member => {
            let foundUser = users.find(user => user.id === member.employeeId);
            if (foundUser != undefined)
            member.fullName = foundUser.fullName;
        });
      })
    }) 
  }
}
