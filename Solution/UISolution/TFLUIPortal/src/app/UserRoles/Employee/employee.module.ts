import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';


import { TimesheetComponent } from './components/timesheet/timesheet.component';
 
import { PayrollComponent } from './components/payroll/payroll.component';
import { PerformenceApprisalComponent } from './components/performence-apprisal/performence-apprisal.component';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './components/BI/Dashboard/dashboard.component';
import { EmployeenavbarComponent } from './components/employeenavbar/employeenavbar.component';
import { MontlyworkutilizationComponent } from './components/montlyworkutilization/montlyworkutilization.component';
import { ConsumedLeaveComponent } from './components/LeaveMgmt/components/consumed-leave/consumed-leave.component';



import { EmployeeComponent } from './components/employee/employee.component';


import { TimesheetDetailsComponent } from './components/timesheet/EmployeeTimesheet/timesheet-details.component';
import { TimesheetListComponent } from './components/timesheet/timesheet-list/timesheet-list.component';
import { CreateTimesheetComponent } from './components/timesheet/create-timesheet/create-timesheet.component';
import { TimesheetEmployeeProjectHoursComponent } from './components/timesheet/timesheet-employee-project-hours/timesheet-employee-project-hours.component';
import { AddTimesheetEntryComponent } from './components/timesheet/add-timesheet-entry/add-timesheet-entry.component';
import { UpdateTimesheetEntryComponent } from './components/timesheet/update-timesheet-entry/update-timesheet-entry.component';


import { ProjectItem } from './components/project-item/projectitem';
import { ProjectList } from './components/project-list/projectlist';
import { ProjectContainer } from './components/projectcontainer/projectcontainer';
import { ProjectComponent } from '../Member/components/project/project.component';

 export const employeeRoutes:Routes=[
  {path:'projects', component:ProjectComponent},
  {path:'timesheet', component:TimesheetComponent}
]

@NgModule({
  declarations: [
    DashboardComponent,
    TimesheetComponent,
    ProjectComponent,
    PayrollComponent,
    PerformenceApprisalComponent,
    TimesheetDetailsComponent,
    TimesheetListComponent,
    CreateTimesheetComponent,
    TimesheetEmployeeProjectHoursComponent,
    AddTimesheetEntryComponent,
    UpdateTimesheetEntryComponent,
    EmployeeComponent,
    EmployeenavbarComponent,
    MontlyworkutilizationComponent,
    ProjectContainer,
    ProjectList,
    ProjectItem,
    ConsumedLeaveComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    SharedModule,
    FormsModule,
    RouterModule
  ],
  exports: [
    TimesheetDetailsComponent,
    TimesheetListComponent,
    TimesheetEmployeeProjectHoursComponent,
    AddTimesheetEntryComponent,
    UpdateTimesheetEntryComponent,
    EmployeeComponent,
    MontlyworkutilizationComponent,
    ProjectComponent,
    ConsumedLeaveComponent
  ],
})
export class EmployeeModule {}
