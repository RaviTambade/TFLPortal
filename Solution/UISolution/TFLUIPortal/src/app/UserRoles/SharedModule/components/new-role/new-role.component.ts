import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MembershipService } from 'src/app/shared/services/Membership/membership.service';
import { Role } from '../../Models/Role';

@Component({
  selector: 'new-role',
  templateUrl: './new-role.component.html',
})
export class NewRoleComponent {

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
    console.log(roles);
    this.service.addNewRole(roles).subscribe((res)=>{
      console.log(res);    
    });
    console.log(this.roleForm.value);
  }
}
