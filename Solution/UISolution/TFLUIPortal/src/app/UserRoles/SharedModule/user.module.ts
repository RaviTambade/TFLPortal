import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes } from '@angular/router';
import { NewRoleComponent } from './components/new-role/new-role.component';
import { RolesListComponent } from './components/roles-list/roles-list.component';

// export const userRoutes: Routes = [
//   {path: 'profile', component: UserProfileComponent}
// ]

@NgModule({
  declarations: [
    NewRoleComponent,
    RolesListComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports:[
        NewRoleComponent,
        RolesListComponent,
  ]
})
export class UserModule { }
