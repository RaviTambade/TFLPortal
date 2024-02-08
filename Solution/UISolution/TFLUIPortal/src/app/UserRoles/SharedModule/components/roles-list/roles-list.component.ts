import { Component, OnInit } from '@angular/core';
import { UserRole } from 'src/app/Entities/UserRole';
import { MembershipService } from 'src/app/shared/services/Membership/membership.service';

@Component({
  selector: 'roles-list',
  templateUrl: './roles-list.component.html',
})
export class RolesListComponent implements OnInit{

  constructor(private service:MembershipService){}
  lob:string="PMS";
  roles:UserRole[]=[];

  ngOnInit(): void {
    this.service.getAllRoles(this.lob).subscribe((res)=>{
    this.roles=res;
    })
  }
}
