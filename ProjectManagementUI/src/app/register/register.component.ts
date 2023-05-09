import { Component, OnInit } from '@angular/core';
import { Users } from '../users';
import { LoginserviceService } from '../login-service.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  user : Users ={email:'',
                password:'',
                contactNumber:''}
  status : boolean  | undefined

  constructor(private svc : LoginserviceService) { }

  ngOnInit() {

  }

  Register(user:Users){
    console.log(user);
    this.svc.Register(user).subscribe((response)=>{
      this.status = response;
      console.log(response);
      
      if(response){
        alert("Registration sucessfull")
        window.location.reload();
      }
      else
      {
        alert("Registration failed")
      }
    })

  }

}
