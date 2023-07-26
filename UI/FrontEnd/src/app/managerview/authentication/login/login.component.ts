import { Component } from '@angular/core';
import { ManagerviewService } from '../../managerview.service';
import { Credential } from '../credential';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  credential:Credential={
    contactNumber: '',
    password: ''
  }  

  constructor(private svc:ManagerviewService,private router:Router){}

  onLogin(form:any){
    console.log(form);
    this.svc.validate(form).subscribe((response)=>{
          console.log(response);
          
          if(response){
            alert("Login sucessfull")
            window.location.reload();
          }
          else
          {
            alert("Login Failed")
          }

          // localStorage.setItem("jwt",response.token)
          // if(response){
          //   this.router.navigate(['home']);
          // } 
        })
      }
    }