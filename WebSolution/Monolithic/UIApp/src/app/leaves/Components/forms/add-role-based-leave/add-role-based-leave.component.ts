import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { RoleBasedLeave } from 'src/app/leaves/Models/RoleBasedLeave';
import { LeavesService } from 'src/app/leaves/Services/leaves.service';

@Component({
  selector: 'app-add-role-based-leave',
  templateUrl: './add-role-based-leave.component.html',
  styleUrls: ['./add-role-based-leave.component.css']
})
export class AddRoleBasedLeaveComponent {


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
  let roleBasedLeave:RoleBasedLeave={
        id: 0,
        roleId: this.rolebasedleaveForm.get("roleId")?.value,
        sick:this.rolebasedleaveForm.get("sick")?.value,
        casual: this.rolebasedleaveForm.get("casual")?.value,
        paid: this.rolebasedleaveForm.get("paid")?.value,
        unpaid:this.rolebasedleaveForm.get("unpaid")?.value,
        financialYear:this.rolebasedleaveForm.get("financialYear")?.value,
      }
      console.log(roleBasedLeave);
      this.service.addRoleBasedLeave(roleBasedLeave).subscribe((res)=>{
      console.log(res);    
    });
  }
}
