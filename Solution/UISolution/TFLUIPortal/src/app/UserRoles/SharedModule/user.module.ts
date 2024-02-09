import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NewRole } from './components/new-role/new-role';
import { RolesList } from './components/roles-list/roles-list';


@NgModule({
  declarations: [
    NewRole,
    RolesList,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports:[
        NewRole,
        RolesList,
  ]
})
export class UserModule { }
