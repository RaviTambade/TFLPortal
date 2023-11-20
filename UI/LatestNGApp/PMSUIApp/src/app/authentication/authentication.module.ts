import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { MembershipLibModule } from 'membership-lib';



@NgModule({
  declarations: [
    LoginComponent

  ],
  imports: [
    CommonModule,
    FormsModule,
    MembershipLibModule
  ]
})
export class AuthenticationModule { }
