import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimesheetComponent } from './components/timesheet/timesheet.component';
import { ProjectComponent } from './components/project/project.component';
import { EmployeeLeftSidebarComponent } from './components/employee-left-sidebar/employee-left-sidebar.component';
import { PayrollComponent } from './components/payroll/payroll.component';
import { PerformenceApprisalComponent } from './components/performence-apprisal/performence-apprisal.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DashboardComponent } from './components/BI/Dashboard/dashboard.component';
import { TimesheetDetailsComponent } from './components/timesheet/timesheet-details/timesheet-details.component';
import { SharedModule } from '../shared/shared.module';
import { TimesheetListComponent } from './components/timesheet/timesheet-list/timesheet-list.component';
import { CreateTimesheetComponent } from './components/timesheet/create-timesheet/create-timesheet.component';
import { TimesheetEmployeeWorkDataComponent } from './components/timesheet/timesheet-employee-work-chart/timesheet-employee-work-data/timesheet-employee-work-data.component';
import { TimesheetEmployeeWorkChartComponent } from './components/timesheet/timesheet-employee-work-chart/timesheet-employee-work-chart.component';
import { TimesheetEmployeeProjectHoursComponent } from './components/timesheet/timesheet-employee-project-hours/timesheet-employee-project-hours.component';
import { AddTimesheetEntryComponent } from './components/timesheet/add-timesheet-entry/add-timesheet-entry.component';
import { UpdateTimesheetEntryComponent } from './components/timesheet/update-timesheet-entry/update-timesheet-entry.component';

@NgModule({
  declarations: [
    DashboardComponent,
    TimesheetComponent,
    ProjectComponent,
    EmployeeLeftSidebarComponent,
    PayrollComponent,
    PerformenceApprisalComponent,
    TimesheetDetailsComponent,
    TimesheetListComponent,
    CreateTimesheetComponent,
    TimesheetEmployeeWorkDataComponent,
    TimesheetEmployeeWorkChartComponent,
    TimesheetEmployeeProjectHoursComponent,
    AddTimesheetEntryComponent,
    UpdateTimesheetEntryComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    SharedModule,
    FormsModule,
  ],
  exports: [
    TimesheetDetailsComponent,
    TimesheetListComponent,
    TimesheetEmployeeWorkChartComponent,
    TimesheetEmployeeProjectHoursComponent,
    AddTimesheetEntryComponent,
    UpdateTimesheetEntryComponent
  ],
})
export class EmployeeModule {}
