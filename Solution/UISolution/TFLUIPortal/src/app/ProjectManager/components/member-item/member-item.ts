import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProjectService } from 'src/app/shared/services/ProjectMgmt/project.service';
import { MembershipService } from 'src/app/shared/services/Membership/membership.service';

@Component({
  selector: 'member-item',
  templateUrl: './member-item.html',
})
export class MemberItem{

  constructor(private router:ActivatedRoute,private projectMembership:ProjectService){}

}
