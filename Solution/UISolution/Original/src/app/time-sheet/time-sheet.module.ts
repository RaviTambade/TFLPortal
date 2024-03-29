import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './components/list/list.component';
import { DetailsComponent } from './components/details/details.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UpdateTimesheetEntryComponent } from './components/update-timesheet-entry/update-timesheet-entry.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { TimesheetEmployeeWorkChartComponent } from './components/timesheet-employee-work-chart/timesheet-employee-work-chart.component';
import { TimesheetEmployeeProjectHoursComponent } from './components/timesheet-employee-project-hours/timesheet-employee-project-hours.component';
import { TimesheetEmployeeAnalyticsComponent } from './components/timesheet-employee-analytics/timesheet-employee-analytics.component';
import { CreateTimesheetComponent } from './components/create-timesheet/create-timesheet.component';
import { AddTimesheetEntryComponent } from './components/add-timesheet-entry/add-timesheet-entry.component';
import { EmployeeGuard } from '../shared/Gaurds/employee.guard';
import { TimesheetApprovalComponent } from './components/timesheet-approval/timesheet-approval.component';
import { HRRouteGaurd } from '../shared/Gaurds/gaurd';
import { TimesheetDashboardComponent } from './components/timesheet-dashboard/timesheet-dashboard.component';
import { TimesheetEmployeeWorkDataComponent } from './components/timesheet-employee-work-chart/timesheet-employee-work-data/timesheet-employee-work-data.component';

export const timeSheetRoutes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'dashboard', component:TimesheetDashboardComponent },
  { path: 'list', component: ListComponent },
  {
    path: 'create',
    component: CreateTimesheetComponent,
    // canActivate: [EmployeeGuard],
  },
  {
    path: 'details/:id',
    component: DetailsComponent,
    // canActivate: [EmployeeGuard],
  },
  {
    path: 'addentry/:id',
    component: AddTimesheetEntryComponent,
    // canActivate: [EmployeeGuard],
  },
  {
    path: 'update/:id',
    component: UpdateTimesheetEntryComponent,
    // canActivate: [EmployeeGuard],
  },

  { path: 'analytics', component: TimesheetEmployeeAnalyticsComponent },
  { path: 'approval', component: TimesheetApprovalComponent, /*canActivate:[HRRouteGaurd()]*/ },

];

@NgModule({
  declarations: [
    ListComponent,
    DetailsComponent,
    TimesheetEmployeeWorkChartComponent,
    TimesheetEmployeeWorkChartComponent,
    TimesheetEmployeeProjectHoursComponent,
    TimesheetEmployeeAnalyticsComponent,
    CreateTimesheetComponent,
    AddTimesheetEntryComponent,
    TimesheetApprovalComponent,
    TimesheetDashboardComponent,
    TimesheetEmployeeWorkDataComponent,
    UpdateTimesheetEntryComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    SharedModule,
    RouterModule,
  ],
  exports: [
    ListComponent,
    DetailsComponent,
    TimesheetEmployeeWorkChartComponent,
  ],
  providers: [],
})
export class TimeSheetModule {}
