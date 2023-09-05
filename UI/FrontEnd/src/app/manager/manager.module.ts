import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectListComponent } from './project-list/project-list.component';
import { ProjectRegisterComponent } from './project-register/project-register.component';



@NgModule({
  declarations: [
    ProjectListComponent,
    ProjectRegisterComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ManagerModule { }
