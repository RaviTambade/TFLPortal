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
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { EmployeeEditComponent } from './employee-edit/employee-edit.component';
import { TaskRegisterComponent } from './task-register/task-register.component';
import { TaskEditComponent } from './task-edit/task-edit.component';
import { TaskDetailsComponent } from './task-details/task-details.component';
import { TaskListComponent } from './task-list/task-list.component';



@NgModule({
  declarations: [
    ProjectListComponent,
    ProjectRegisterComponent,
    ProjectDetailsComponent,
    ProjectEditComponent,
    ProjectOveralldetailsComponent,
    EmployeeRegisterComponent,
    EmployeeListComponent,
    EmployeeDetailsComponent,
    EmployeeEditComponent,
    TaskRegisterComponent,
    TaskEditComponent,
    TaskDetailsComponent,
    TaskListComponent,
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
