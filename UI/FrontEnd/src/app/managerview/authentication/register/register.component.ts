import { Component } from '@angular/core';
import { ManagerviewService } from '../../managerview.service';
import { Credential } from '../credential';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

//   // confirmPassword: any;

//   // registered: boolean =false;

//   // credential:Credential={
//   //   contactNumber: '',
//   //   password: ''
//   // }
  
//   // constructor(private svc:ManagerviewService){}
//   // onRegister( form:any) {
//   //   if(this.credential.contactNumber=='' || this.credential.password==''){
//   //     alert("please give valid email or password")
//   //     return;
//   //   }
//   //   if(this.credential.password.length < 8 || this.confirmPassword.length < 8){
//   //     alert("password should be minimum 8 characters ")
//   //     return;
//   //   }

//   //   if (this.credential.password === this.confirmPassword) {
//   //     console.log(this.credential)
//   //     this.svc.register(this.credential).subscribe((response) => {
//   //       this.registered = response;
//   //       console.log(response);
//   //       alert("User Registered successfully")
//   //     })
//   //   }
//   //   else{
//   //     alert("password dosen't match")
//   //   }
//   // }
}
