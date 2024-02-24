import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { RoleLeaveAllocation } from 'src/app/hrmanager/Models/LeaveMgmt/RoleLeaveAllocation';
import { LeaveService } from 'src/app/hrmanager/Services/leave.service';


@Component({
  selector: 'add-role-based-leave',
  templateUrl: './add-role-based-leave.html',
})
export class AddRoleBasedLeave {


 constructor(private service:LeaveService){}

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
      this.service.addNewLeaveAllocationForRole(roleBasedLeave).subscribe((res)=>{
        
    });
  }
}
