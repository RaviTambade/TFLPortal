import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { Login } from './Components/login/login';
import { UpdateContactNumber } from './Components/update-contact-number/update-contact-number';
import { ChangePassword } from './Components/change-password/change-password';
import { UsersList } from './Components/users-list/users-list';
import { NewUserComponent } from './Components/new-user/new-user';
import { AuthService } from './services/auth.service';


 const authRoutes:Routes=[
  { path: 'login', component: Login },
]

@NgModule({
  declarations: [
    Login,
    UpdateContactNumber,
    ChangePassword,
    UsersList,
    NewUserComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,RouterModule.forChild(authRoutes)
  ],
  exports:[Login],
  
  providers:[
    AuthService
  ]
})

export class AuthenticationModule { }
