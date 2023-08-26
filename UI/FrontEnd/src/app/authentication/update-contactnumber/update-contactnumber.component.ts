import { Component } from '@angular/core';
import { UpdateContactnumber } from 'src/app/models/update-contactnumber';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-update-contactnumber',
  templateUrl: './update-contactnumber.component.html',
  styleUrls: ['./update-contactnumber.component.css']
})
export class UpdateContactnumberComponent {
  credential: UpdateContactnumber = {
    oldContactNumber: '',
    newContactNumber: '',
    password: ''
  }
  confirmPassword: any;

  constructor(private svc: AuthService) { }

  onUpdateContact(form: any) {
    if (this.credential.oldContactNumber == '' || this.credential.password == '') {
      alert("please give valid contact or password")
      return;
    }

    this.svc.updateContact(this.credential).subscribe((response) => {
      console.log(response);
      if (response) {
        alert("Contact Number changed")
      }
      else {
        alert("Password is wrong")
      }
   })
  }
}

