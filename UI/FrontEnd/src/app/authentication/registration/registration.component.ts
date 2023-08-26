import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Credential } from 'src/app/models/credential';
@Component({
  selector: 'registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
  confirmPassword: any;

  registered: boolean =false;

  credential:Credential={
    contactNumber: '',
    password: ''
  }
  
  constructor(private svc:AuthService){}
  onRegister( form:any) {
    if(this.credential.contactNumber=='' || this.credential.password==''){
      alert("please give valid email or password")
      return;
    }
    if(this.credential.password.length < 8 || this.confirmPassword.length < 8){
      alert("password should be minimum 8 characters ")
      return;
    }

    if (this.credential.password === this.confirmPassword) {
      console.log(this.credential)
      this.svc.register(form).subscribe((response) => {
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

