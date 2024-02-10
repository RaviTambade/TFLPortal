import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { MembershipService } from 'src/app/shared/services/Membership/membership.service';

import { Role } from 'src/app/shared/Entities/UserMgmt/Role';
import { LeaveAllocation } from 'src/app/shared/Entities/Leavemgmt/LeaveAllocation';
import { LeaveAllocationService } from 'src/app/shared/services/Leave/leaveallocation.service';


@Component({
  selector: 'update-role-based-leave',
  templateUrl: './update-role-based-leave.html',
})
export class UpdateRoleBasedLeave implements OnInit{
  
  roleBasedLeave:LeaveAllocation |any;
  id:number=1;
  lob:string="PMS";
  roles:Role[]=[];

  constructor(private service:LeaveAllocationService,private membershipService:MembershipService){}

  rolebasedleaveForm=new FormGroup({
    roleId :new FormControl(),
    sick :new FormControl(),
    casual :new FormControl(),
    paid :new FormControl(),
    unpaid :new FormControl(),
    financialYear :new FormControl()
  });
  

  ngOnInit(): void {
    this.membershipService.getAllRoles(this.lob).subscribe((res)=>{
      this.roles=res;
    })
    this.service.getLeaveAllocationOfRole(this.id).subscribe((res)=>{
      this.roleBasedLeave=res;
    }) 
  }

  onSubmit(){
    let roleBasedLeave:LeaveAllocation={
      id: this.id,
      roleId: this.rolebasedleaveForm.get("roleId")?.value,
      sick:this.rolebasedleaveForm.get("sick")?.value,
      casual: this.rolebasedleaveForm.get("casual")?.value,
      paid: this.rolebasedleaveForm.get("paid")?.value,
      unpaid:this.rolebasedleaveForm.get("unpaid")?.value,
      financialYear:this.rolebasedleaveForm.get("financialYear")?.value,
    }
    console.log(roleBasedLeave);
    this.service.updateLeaveAllocation(roleBasedLeave).subscribe((res)=>{
    console.log(res);    
  });
  }
}
