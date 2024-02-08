import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimesheetComponent } from './components/timesheet/timesheet.component';
import { ProjectComponent } from './components/project/project.component';
import { PayrollComponent } from './components/payroll/payroll.component';
import { PerformenceApprisalComponent } from './components/performence-apprisal/performence-apprisal.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DashboardComponent } from './components/BI/Dashboard/dashboard.component';
import { TimesheetDetailsComponent } from './components/timesheet/timesheet-details/timesheet-details.component';
import { TimesheetListComponent } from './components/timesheet/timesheet-list/timesheet-list.component';
import { CreateTimesheetComponent } from './components/timesheet/create-timesheet/create-timesheet.component';
import { TimesheetEmployeeProjectHoursComponent } from './components/timesheet/timesheet-employee-project-hours/timesheet-employee-project-hours.component';
import { AddTimesheetEntryComponent } from './components/timesheet/add-timesheet-entry/add-timesheet-entry.component';
import { UpdateTimesheetEntryComponent } from './components/timesheet/update-timesheet-entry/update-timesheet-entry.component';
import { EmployeeComponent } from './components/employee/employee.component';
import { EmployeenavbarComponent } from './components/employeenavbar/employeenavbar.component';
import { MontlyworkutilizationComponent } from './components/montlyworkutilization/montlyworkutilization.component';
import { ProjectListComponent } from './components/project/project-list/project-list.component';
import { ProjectdetailsComponent } from './components/project/project-list/projectdetails/projectdetails.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ConsumedLeaveComponent } from './components/LeaveMgmt/components/consumed-leave/consumed-leave.component';

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
    ProjectListComponent,
    ProjectdetailsComponent,
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
