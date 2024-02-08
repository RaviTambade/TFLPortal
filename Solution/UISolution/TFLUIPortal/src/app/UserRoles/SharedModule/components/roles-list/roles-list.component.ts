import { Component, OnInit } from '@angular/core';
import { Role } from 'src/app/shared/Entities/UserMgmt/Role';
import { MembershipService } from 'src/app/shared/services/Membership/membership.service';

@Component({
  selector: 'roles-list',
  templateUrl: './roles-list.component.html',
})
export class RolesListComponent implements OnInit{

  constructor(private service:MembershipService){}
  lob:string="PMS";
  roles:Role[]=[];

  ngOnInit(): void {
    this.service.getAllRoles(this.lob).subscribe((res)=>{
    this.roles=res;
    })
  }
}
