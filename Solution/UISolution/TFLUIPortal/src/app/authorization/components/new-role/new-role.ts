import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Role } from 'src/app/shared/Entities/UserMgmt/Role';
import { MembershipService } from 'src/app/shared/services/Membership/membership.service';

@Component({
  selector: 'new-role',
  templateUrl: './new-role.html',
})
export class NewRole {

  constructor(private service :MembershipService){}

  roleForm=new FormGroup({
    name:new FormControl,
    lob:new FormControl
  })

  onSubmit(){
    let roles:Role={
      id: 0,
      name: this.roleForm.get("name")?.value,
      lob: this.roleForm.get("lob")?.value,
    }
    this.service.addNewRole(roles).subscribe((res)=>{
    });
  }
}
