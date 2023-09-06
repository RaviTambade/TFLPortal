import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectListComponent } from './project-list/project-list.component';
import { ProjectRegisterComponent } from './project-register/project-register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { ProjectDetailsComponent } from './project-details/project-details.component';
import { ProjectEditComponent } from './project-edit/project-edit.component';
import { ProjectOveralldetailsComponent } from './project-overalldetails/project-overalldetails.component';
import { EmployeeRegisterComponent } from './employee-register/employee-register.component';



@NgModule({
  declarations: [
    ProjectListComponent,
    ProjectRegisterComponent,
    ProjectDetailsComponent,
    ProjectEditComponent,
    ProjectOveralldetailsComponent,
    EmployeeRegisterComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule,

  ]
})
export class ManagerModule { }
