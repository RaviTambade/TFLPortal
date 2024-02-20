import { Component, OnInit } from '@angular/core';

import { MembershipService } from 'src/app/shared/services/Membership/membership.service';

import { ProjectService } from 'src/app/projectmanager/Services/project.service';
import { Member } from 'src/app/Employee/Models/ProjectMgmt/Member';

@Component({
  selector: 'project-members',
  templateUrl: './member-list.html',
})
export class ProjectMemberList implements OnInit {

  projectId: number = 4;
  members: Member[] = [];

  constructor(
    private projectSvc: ProjectService,
    private membersSvc: MembershipService
  ) {}

  ngOnInit(): void {
    //get all members id's belong to project
    this.projectSvc.getAllProjectMembers(this.projectId).subscribe((res) => {
      this.members = res;

      let allIds: number[] = this.members.map((o) => o.employeeId);
      
      let strAllIds: string = allIds.join(',');

      //get each member name
      this.membersSvc.getUserDetails(strAllIds).subscribe((users) => {
        this.members.forEach((member) => {
          let foundUser = users.find((user) => user.id === member.employeeId);
          if (foundUser != undefined) member.fullName = foundUser.fullName;
        });
      });
    });
  }
}
