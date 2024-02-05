import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { UpdateProfileComponent } from './components/update-profile/update-profile.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes } from '@angular/router';
import { NewUserComponent } from './components/new-user/new-user.component';
import { UsersListComponent } from './components/users-list/users-list.component';

export const userRoutes: Routes = [
  {path: 'profile', component: UserProfileComponent}
]


@NgModule({
  declarations: [
    UpdateProfileComponent,
    UserProfileComponent,
    NewUserComponent,
    UsersListComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports:[UserProfileComponent,
        NewUserComponent        
  ]
})
export class UserModule { }
