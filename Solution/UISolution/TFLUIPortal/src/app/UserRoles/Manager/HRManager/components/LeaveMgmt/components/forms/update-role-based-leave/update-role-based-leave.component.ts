import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { LeavesService } from 'src/app/shared/services/Leave/leaves.service';
import { MembershipService } from 'src/app/shared/services/Membership/membership.service';
import { RoleLeaveAllocation } from 'src/app/shared/Entities/Leavemgmt/LeaveAllocation';
import { UserRole } from 'src/app/shared/Entities/UserRole';


@Component({
  selector: 'app-update-role-based-leave',
  templateUrl: './update-role-based-leave.component.html',
})
export class UpdateRoleBasedLeaveComponent implements OnInit{
  
  roleBasedLeave:RoleLeaveAllocation |any;
  id:number=1;
  lob:string="PMS";
  roles:UserRole[]=[];

  constructor(private service:LeavesService,private membershipService:MembershipService){}

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
    this.service.getRoleBasedLeaveDetails(this.id).subscribe((res)=>{
      this.roleBasedLeave=res;
    }) 
  }

  onSubmit(){
    let roleBasedLeave:RoleLeaveAllocation={
      id: this.id,
      roleId: this.rolebasedleaveForm.get("roleId")?.value,
      sick:this.rolebasedleaveForm.get("sick")?.value,
      casual: this.rolebasedleaveForm.get("casual")?.value,
      paid: this.rolebasedleaveForm.get("paid")?.value,
      unpaid:this.rolebasedleaveForm.get("unpaid")?.value,
      financialYear:this.rolebasedleaveForm.get("financialYear")?.value,
    }
    console.log(roleBasedLeave);
    this.service.updateRoleBasedLeave(roleBasedLeave).subscribe((res)=>{
    console.log(res);    
  });
  }
}
