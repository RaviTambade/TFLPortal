import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Routes } from '@angular/router';
import { EmployeeprojectsComponent } from './employeeprojects/employeeprojects.component';
import { EmployeeprojectdetailsComponent } from './employeeprojectdetails/employeeprojectdetails.component';
import { EmployeeprojectfiltersComponent } from './employeeprojectfilters/employeeprojectfilters.component';
import { TimesheetlistComponent } from './timesheetlist/timesheetlist.component';
import { TimesheetdetailsComponent } from './timesheetdetails/timesheetdetails.component';

export const teammemberRoutes:Routes=[
  {path:'dashboard',component:DashboardComponent},
  {path:'projects',component:EmployeeprojectsComponent},
  {path:'timesheets',component:TimesheetlistComponent}
]

@NgModule({
  declarations: [
    DashboardComponent,
    EmployeeprojectsComponent,
    EmployeeprojectdetailsComponent,
    EmployeeprojectfiltersComponent,
    TimesheetlistComponent,
    TimesheetdetailsComponent,
  ],
  imports: [
    CommonModule
  ]
})
export class TeamMemberModule { }
