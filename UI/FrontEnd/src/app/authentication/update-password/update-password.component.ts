import { Component } from '@angular/core';
import { UpdatePassword } from 'src/app/models/update-password';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-update-password',
  templateUrl: './update-password.component.html',
  styleUrls: ['./update-password.component.css']
})
export class UpdatePasswordComponent {
  credential:UpdatePassword={
    oldPassword: '',
    newPassword: ''
  }
   confirmPassword: any;
   constructor(private svc:AuthService){}
   
   onUpdatePassword(form: any) {
     if( this.credential.newPassword=='' ||this.credential.oldPassword==''  ){
       alert("please give valid contact or password")
       return;
     }
     if(this.credential.newPassword.length < 8 || this.confirmPassword.length < 8){
       alert("password should be minimum 8 characters ")
       return;
     }
   
     if (this.credential.newPassword === this.confirmPassword) {
       console.log(form)
 
  //     this.svc.updatePassword(this.credential).subscribe((response) => {
  //        console.log(response);
  //        if (response) {
  //          alert("Password changed")
  //        }
  //        else {
  //          alert("OldPassword is wrong")
  //        }
  //      })
  //    }  else{
  //      alert("password dosen't match")
     }
    }
     }

