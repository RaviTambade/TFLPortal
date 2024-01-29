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
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    SharedModule,
    FormsModule,
  ],
  exports: [TimesheetDetailsComponent,TimesheetListComponent],
})
export class EmployeeModule {}
