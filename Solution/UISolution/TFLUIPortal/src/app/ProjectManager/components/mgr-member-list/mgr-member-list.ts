import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { ProjectService } from 'src/app/shared/services/ProjectMgmt/project.service';
import { MembershipService } from 'src/app/shared/services/Membership/membership.service';
import { Member } from '../../../shared/Models/ResourcePool/Member';

@Component({
  selector: 'mgr-member-list',
  templateUrl: './mgr-member-list.html',
})
export class MgrMemberList implements OnInit{

  projectId:number=4;
  members:Member[]=[];

  constructor(private projectSvc:ProjectService,
              private membershipSvc:MembershipService){     }
 

  ngOnInit(): void {
    
      this.projectSvc.getAllProjectMembers(this.projectId).subscribe((res)=>{
        this.members=res;
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