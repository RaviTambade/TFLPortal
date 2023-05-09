import { Component, OnInit } from '@angular/core';
import { AuthenticateServiceService } from '../authenticate-service.service';
import { Credential} from '../Credential';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  user : Credential ={email:'',
                      password:''}
  status : boolean  | undefined
 
  constructor(private svc : AuthenticateServiceService) {}
  
  ngOnInit() {
    
  }

  onLogin(form:any){
    console.log(form);
    this.svc.ValidateUser(form).subscribe((response)=>{
          this.status = response;
          console.log(response);
          
          if(response){
            alert("Login sucessfull")
            window.location.reload();
          }
          else
          {
            alert("Login Failed")
          }
        })
}
  
  
} 