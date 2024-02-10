import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { RoleLeaveAllocation } from 'src/app/shared/Entities/Leavemgmt/LeaveAllocation';

import { LeavesService } from 'src/app/shared/services/Leave/leavemgmt.service';


@Component({
  selector: 'app-add-role-based-leave',
  templateUrl: './add-role-based-leave.html',
})
export class AddRoleBasedLeave {


 constructor(private service:LeavesService){}

  rolebasedleaveForm=new FormGroup({
  roleId :new FormControl(),
  sick :new FormControl(),
  casual :new FormControl(),
  paid :new FormControl(),
  unpaid :new FormControl(),
  financialYear :new FormControl()
});

onSubmit(){
  let roleBasedLeave:RoleLeaveAllocation={
        id: 0,
        roleId: this.rolebasedleaveForm.get("roleId")?.value,
        sick:this.rolebasedleaveForm.get("sick")?.value,
        casual: this.rolebasedleaveForm.get("casual")?.value,
        paid: this.rolebasedleaveForm.get("paid")?.value,
        unpaid:this.rolebasedleaveForm.get("unpaid")?.value,
        financialYear:this.rolebasedleaveForm.get("financialYear")?.value,
      }
      console.log(roleBasedLeave);
      this.service.addRoleLeaveAllocation(roleBasedLeave).subscribe((res)=>{
      console.log(res);    
    });
  }
}
