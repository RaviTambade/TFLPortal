import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { MembershipService } from 'src/app/shared/services/Membership/membership.service';

@Component({
  selector: 'new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css']
})
export class NewUserComponent {
constructor(private service:MembershipService){}
  newUserForm = new FormGroup({
    imageurl: new FormControl(''),
    addharid: new FormControl(''),
    firstname: new FormControl(''),
    lastname: new FormControl(''),
    birthdate: new FormControl(''),
    gender: new FormControl(''),
    email: new FormControl(''),
    contactnumber: new FormControl(''),
    password: new FormControl(''),
    createdon: new FormControl(''),
    modifiedon: new FormControl(''),
  });




  onSubmit() {
    
   // console.warn(this.newUserForm.value);

    this.service.addUser(this.newUserForm.value).subscribe((res)=>{
      console.log(res);
    })
  }
}
