import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { MembershipService } from 'src/app/shared/services/Membership/membership.service';
import { NewUser } from '../../Models/NewUser';

@Component({
  selector: 'new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css']
})
export class NewUserComponent {
constructor(private service:MembershipService){}
newUserForm = new FormGroup({
  imageUrl: new FormControl(),
  aadharId: new FormControl(),
  firstName: new FormControl(),
  lastName: new FormControl(),
  birthDate: new FormControl(),
  gender: new FormControl(),
  email: new FormControl(),
  contactNumber: new FormControl(),
  password: new FormControl(),
  createdon: new FormControl(),
  modifiedon: new FormControl(),
});



  onSubmit() {
    
    const newUser: NewUser = {
      id: 0,
      imageurl: this.newUserForm.get("imageUrl")?.value,
      aadharid: this.newUserForm.get("aadharId")?.value,
      firstname: this.newUserForm.get("firstName")?.value,
      lastname: this.newUserForm.get("lastName")?.value,
      birthdate: this.newUserForm.get("birthDate")?.value,
      gender: this.newUserForm.get("gender")?.value,
      email: this.newUserForm.get("email")?.value,
      contactnumber: this.newUserForm.get("contactNumber")?.value,
      password: this.newUserForm.get("password")?.value,
      createdon: this.newUserForm.get("createdon")?.value,
      modifiedon: this.newUserForm.get("modifiedon")?.value,
    };
  
    console.log(newUser);
  
    this.service.addUser(newUser).subscribe((res) => {
      console.log(res);
    });
  }
}
