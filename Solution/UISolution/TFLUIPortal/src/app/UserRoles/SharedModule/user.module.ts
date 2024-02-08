import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { UpdateProfileComponent } from './components/update-profile/update-profile.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes } from '@angular/router';
import { NewUserComponent } from './components/new-user/new-user.component';
import { UsersListComponent } from './components/users-list/users-list.component';
import { ChangePasswordComponent } from './components/change-password/change-password.component';
import { NewRoleComponent } from './components/new-role/new-role.component';
import { RolesListComponent } from './components/roles-list/roles-list.component';
import { UpdateContactNumberComponent } from './components/update-contact-number/update-contact-number.component';

export const userRoutes: Routes = [
  {path: 'profile', component: UserProfileComponent}
]

@NgModule({
  declarations: [
    UpdateProfileComponent,
    UserProfileComponent,
    NewUserComponent,
    UsersListComponent,
    ChangePasswordComponent,
    NewRoleComponent,
    RolesListComponent,
    UpdateContactNumberComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports:[UserProfileComponent,
        NewUserComponent ,
        UsersListComponent,
        ChangePasswordComponent,
        NewRoleComponent,
        RolesListComponent,
        UpdateContactNumberComponent
  ]
})
export class UserModule { }