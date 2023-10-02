import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Routes } from '@angular/router';
import { EmployeeslistComponent } from './employeeslist/employeeslist.component';
import { ProjectlistComponent } from './projectlist/projectlist.component';


export const hrmanagerRoutes:Routes=[
  {path:'dashboard',component:DashboardComponent},
  {path:'employeeslist',component:EmployeeslistComponent},
]

@NgModule({
  declarations: [
    DashboardComponent,
    EmployeeslistComponent,
    ProjectlistComponent,
   
  ],
  imports: [
    CommonModule
  ]
})
export class HRManagerModule { }
