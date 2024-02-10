import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { LeaveAllocation } from 'src/app/shared/Entities/Leavemgmt/LeaveAllocation';
import { LeaveAllocationService } from 'src/app/shared/services/Leave/leaveallocation.service';


@Component({
  selector: 'add-role-based-leave',
  templateUrl: './add-role-based-leave.html',
})
export class AddRoleBasedLeave {


 constructor(private service:LeaveAllocationService){}

  rolebasedleaveForm=new FormGroup({
  roleId :new FormControl(),
  sick :new FormControl(),
  casual :new FormControl(),
  paid :new FormControl(),
  unpaid :new FormControl(),
  financialYear :new FormControl()
});

onSubmit(){
  let roleBasedLeave:LeaveAllocation={
        id: 0,
        roleId: this.rolebasedleaveForm.get("roleId")?.value,
        sick:this.rolebasedleaveForm.get("sick")?.value,
        casual: this.rolebasedleaveForm.get("casual")?.value,
        paid: this.rolebasedleaveForm.get("paid")?.value,
        unpaid:this.rolebasedleaveForm.get("unpaid")?.value,
        financialYear:this.rolebasedleaveForm.get("financialYear")?.value,
      }
      console.log(roleBasedLeave);
      this.service.addNewLeaveAllocationForRole(roleBasedLeave).subscribe((res)=>{
      console.log(res);    
    });
  }
}
