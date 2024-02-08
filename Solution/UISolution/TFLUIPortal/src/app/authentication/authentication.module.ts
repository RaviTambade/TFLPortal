import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Components/login/login.component';
import { UpdateContactNumberComponent } from './Components/update-contact-number/update-contact-number.component';
import { ChangePasswordComponent } from './Components/change-password/change-password.component';
import { UsersListComponent } from './Components/users-list/users-list.component';
import { NewUserComponent } from './Components/new-user/new-user.component';
import { AuthService } from './services/auth.service';


 export const authRoutes:Routes=[
  { path: 'login', component: LoginComponent },
]

@NgModule({
  declarations: [
    LoginComponent,
    UpdateContactNumberComponent,
    ChangePasswordComponent,
    UsersListComponent,
    NewUserComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports:[LoginComponent],
  
  providers:[
    AuthService
  ]
})
export class AuthenticationModule { }
