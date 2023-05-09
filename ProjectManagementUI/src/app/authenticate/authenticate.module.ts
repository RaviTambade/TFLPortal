import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from '../authenticate/login/login.component';


@NgModule({
  declarations: [
    LoginComponent
  ],
  exports:[
    AuthenticateModule
  ],
  imports: [
    CommonModule
  ]
})
export class AuthenticateModule { }
