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
  userId:number |any;
  roles:any[];
  status:boolean=false;
  token:any;
  value:any;
  credential:Credential={
    contactNumber: '',
    password: ''
  }  

  constructor(private svc: ManagerviewService, private router: Router) {
    // this.productId=localStorage.getItem("")
    this.roles = [];
    this.status = true;
  }

  onLogin(form: any) {
    console.log(form);
    this.svc.validate(form).subscribe((response) => {
      this.token=response;
      console.log(this.token);
      localStorage.setItem("contactNumber", this.credential.contactNumber);
     localStorage.setItem("jwt",this.token)
    })
    this.svc.getUserId(this.credential.contactNumber).subscribe((response) => {
      this.userId = response;
      console.log(this.userId);
      localStorage.setItem("userId", this.userId);
      this.svc.getRolesOfUser(this.userId).subscribe((res) => {
        this.roles = res;
        console.log(this.roles);


        if (this.roles?.length == 1) {
          const role = this.roles[0];
          this.navigateByRole(role);
        }

        if (this.roles?.length < 1) {
          //  const role=this.roles;
          this.router.navigate(['/router-container/', this.credential.contactNumber])
        }
      })
    })
  }

  navigateByRole(role: string) {
    localStorage.setItem("role", role);
    switch (role) {
      case "Developer":
        this.router.navigate(['/timesheetlist']);
        break;
    }
        // switch (role) {
        //   case "Developer":
        //     this.router.navigate(['home']);
        //     break;
        // }

    }
  

  onFormSubmit() {
    return this.roles.length < 1;
  }

}











