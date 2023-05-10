import { Component } from '@angular/core';
import { Users } from '../users';
import { LoginserviceService } from '../login-service.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  providers:[ LoginserviceService ]
})
export class RegisterComponent   {
  user: Users = {
    email: '',
    contactNumber:'',
    password: ''
  }
  confirmPassword: any;

  registered: boolean =false;

  constructor(private svc: LoginserviceService) { }

  onRegister( form:any) {
    if(this.user.email=='' || this.user.password==''){
      alert("please give valid email or password")
      return;
    }
    if(this.user.password.length < 8 || this.confirmPassword.length < 8){
      alert("password should be minimum 8 characters ")
      return;
    }

    if (this.user.password === this.confirmPassword) {
      this.svc.Register(form).subscribe((response) => {
        this.registered = response;
        console.log(response);
        alert("User Registered successfully")
      })
    }
    else{
      alert("password dosen't match")
    }
  }

}
