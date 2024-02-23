import { Component, OnInit } from '@angular/core';

import { MembershipService } from 'src/app/shared/services/Membership/membership.service';
import { User } from 'src/app/shared/Entities/UserMgmt/User';
import { ProjectService } from 'src/app/employee/Services/project.service';
import { Member } from 'src/app/employee/Models/ProjectMgmt/Member';

@Component({
  selector: 'project-member',
  templateUrl: './member.html',
})
export class ProjectMember implements OnInit {
  memberId: number = 7;
  projectId: number = 4;
  user: User |undefined;
  member: Member |undefined;

  constructor(
    private projectSvc: ProjectService,
    private membershipSvc: MembershipService
  ) {}

  ngOnInit(): void {
      //get each members name
      this.membershipSvc.getUser(this.memberId).subscribe((res)=>{
      this.user=res;
      this.projectSvc.getAllProjectMember(this.projectId,this.memberId).subscribe((res)=>{
        this.member=res;
      })
    })     
  }
}
