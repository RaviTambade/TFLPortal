import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { UpdatePasswordComponent } from './update-password/update-password.component';
import { UpdateContactnumberComponent } from './update-contactnumber/update-contactnumber.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';



const routes: Routes =
  [
//Authentication
{path: 'login' , component:LoginComponent},   
{path: 'register' , component:RegistrationComponent},

  ]

@NgModule({
  declarations: [
    LoginComponent,
    RegistrationComponent,
    UpdatePasswordComponent,
    UpdateContactnumberComponent
  ],
  exports: [
    LoginComponent,
    RegistrationComponent,
    UpdateContactnumberComponent,
    UpdatePasswordComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],

})
export class AuthenticationModule { }
