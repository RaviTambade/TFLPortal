import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { NewUser } from 'src/app/shared/Entities/UserMgmt/NewUser';
import { MembershipService } from 'src/app/shared/services/Membership/membership.service';

@Component({
  selector: 'new-user',
  templateUrl: './new-user.html',
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
      imageurl: "image.jpg",
      aadharid: this.newUserForm.get("aadharId")?.value,
      firstname: this.newUserForm.get("firstName")?.value,
      lastname: this.newUserForm.get("lastName")?.value,
      birthdate: this.newUserForm.get("birthDate")?.value,
      gender: this.newUserForm.get("gender")?.value,
      email: this.newUserForm.get("email")?.value,
      contactnumber: this.newUserForm.get("contactNumber")?.value,
      password: this.newUserForm.get("password")?.value,
      createdon: new Date().toISOString().slice(0,10),
      modifiedon: new Date().toISOString().slice(0,10),
    };
    this.service.addUser(newUser).subscribe((res) => {
    });
  }
}
