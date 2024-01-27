import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { RoleBasedLeave } from 'src/app/leaves/Models/RoleBasedLeave';
import { LeavesService } from 'src/app/leaves/Services/leaves.service';
import { UserRole } from 'src/app/shared/models/UserRole';
import { MembershipService } from 'src/app/shared/services/membership.service';

@Component({
  selector: 'app-update-role-based-leave',
  templateUrl: './update-role-based-leave.component.html',
  styleUrls: ['./update-role-based-leave.component.css']
})
export class UpdateRoleBasedLeaveComponent implements OnInit{
  
  roleBasedLeave:RoleBasedLeave |any;
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
    let roleBasedLeave:RoleBasedLeave={
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
