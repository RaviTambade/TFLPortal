import { Component, OnInit } from '@angular/core';

import { MembershipService } from 'src/app/shared/services/Membership/membership.service';
import { Member } from '../../../../shared/Models/ResourcePool/Member';
import { ProjectService } from 'src/app/projectmanager/Services/project.service';

@Component({
  selector: 'project-member',
  templateUrl: './member.html',
})
export class ProjectMember implements OnInit {
  projectId: number = 4;
  members: Member[] = [];

  constructor(
    private projectSvc: ProjectService,
    private membershipSvc: MembershipService
  ) {}

  ngOnInit(): void {
    //get all members id's belong to project
    this.projectSvc.getAllProjectMembers(this.projectId).subscribe((res) => {
      this.members = res;
      let allIds: number[] = this.members.map((o) => o.employeeId);
      let strAllIds: string = allIds.join(',');

      //get each members name
      this.membershipSvc.getUserDetails(strAllIds).subscribe((users) => {
        this.members.forEach((member) => {
          let foundUser = users.find((user) => user.id === member.employeeId);
          if (foundUser != undefined) member.fullName = foundUser.fullName;
        });
      });
    });
  }
}
