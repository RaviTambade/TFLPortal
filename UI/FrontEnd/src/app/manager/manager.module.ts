import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectListComponent } from './project-list/project-list.component';
import { ProjectRegisterComponent } from './project-register/project-register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
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
import { HomeComponent } from '../default/home/home.component';
import { ManagerAccessComponent } from './manager-access/manager-access.component';



const routes: Routes =
  [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },

//Manager Access
     {path: 'manager-access', component:ManagerAccessComponent},    

//project
    { path: 'project-list', component: ProjectListComponent },
    { path: 'project-details/:id', component: ProjectDetailsComponent },
    { path: 'project-register', component: ProjectRegisterComponent },
    { path: 'project-edit/:id', component: ProjectEditComponent },
    { path: 'project-overalldetails/:id', component: ProjectOveralldetailsComponent },


//employee
    {path: 'employee-list' , component:EmployeeListComponent},
    { path: 'employee-details/:empid', component:EmployeeDetailsComponent },
    { path: 'employee-edit/:empid', component:EmployeeEditComponent },


//Task
    {path : 'task-list', component:TaskListComponent}, 
    {path: 'task-register', component:TaskRegisterComponent }, 
    {path: 'task-edit/:taskid', component:TaskEditComponent },
    {path : 'task-details/:taskid', component:TaskDetailsComponent},   
  ]


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
    ManagerAccessComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule,
    RouterModule.forRoot(routes)

  ],
  exports:[
    EmployeeDetailsComponent,
    EmployeeEditComponent,
    EmployeeListComponent,
    EmployeeRegisterComponent,
    ProjectDetailsComponent,
    ProjectEditComponent,
    ProjectListComponent,
    ProjectOveralldetailsComponent,
    ProjectRegisterComponent,
    TaskDetailsComponent,
    TaskEditComponent,
    TaskListComponent,
    TaskRegisterComponent
  ]
})
export class ManagerModule { }
