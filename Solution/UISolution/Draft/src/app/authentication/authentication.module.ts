import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Components/login/login.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
// import { LoggingInterceptor } from '../../services/Authentication/logging.interceptor';

 export const authRoutes:Routes=[
  { path: 'login', component: LoginComponent },
]

@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports:[LoginComponent],
  
  // providers:[
  //   { provide: HTTP_INTERCEPTORS, useClass: LoggingInterceptor, multi: true }
  // ]
})
export class AuthenticationModule { }
