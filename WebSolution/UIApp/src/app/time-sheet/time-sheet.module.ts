import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './components/list/list.component';
import { DetailsComponent } from './components/details/details.component';
import { InsertTimeSheetEntryComponent } from './components/forms/insert-time-sheet-entry/insert-time-sheet-entry.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InsertTimeSheetComponent } from './components/forms/insert-time-sheet/insert-time-sheet.component';
import { PopupComponent } from './components/popup/popup.component';
import { UpdateTimesheetEntryComponent } from './components/forms/update-timesheet-entry/update-timesheet-entry.component';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeTimesheetComponent } from './components/employee-timesheet/employee-timesheet.component';
import { TimesheetEmployeeCalenderComponent } from './components/timesheet-employee-calender/timesheet-employee-calender.component';
import { SharedModule } from '../shared/shared.module';
import { TimesheetEmployeeWorkChartComponent } from './components/timesheet-employee-work-chart/timesheet-employee-work-chart.component';
import { TimesheetEmployeeProjectHoursComponent } from './components/timesheet-employee-project-hours/timesheet-employee-project-hours.component';
import { TimesheetEmployeeAnalyticsComponent } from './components/timesheet-employee-analytics/timesheet-employee-analytics.component';
import { CreateTimesheetComponent } from './components/forms/create-timesheet/create-timesheet.component';
import { AddTimesheetEntryComponent } from './components/forms/add-timesheet-entry/add-timesheet-entry.component';
import { EmployeeGuard } from './Gaurds/employee.guard';
import { TimesheetApprovalComponent } from './components/timesheet-approval/timesheet-approval.component';
import { HRRouteGaurd } from '../hrmanager/Gaurds/gaurd';
import { TimesheetDashboardComponent } from './components/timesheet-dashboard/timesheet-dashboard.component';

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

  {
    path: 'view',
    component: EmployeeTimesheetComponent,
    children: [
      {
        path: 'add/:date',
        component: InsertTimeSheetComponent,
      },
      {
        path: 'update/:id/date/:date',
        component: UpdateTimesheetEntryComponent,
      },
    ],
  },
  { path: 'analytics', component: TimesheetEmployeeAnalyticsComponent },
  { path: 'approval', component: TimesheetApprovalComponent, canActivate:[HRRouteGaurd()] },

];

@NgModule({
  declarations: [
    ListComponent,
    DetailsComponent,
    InsertTimeSheetEntryComponent,
    InsertTimeSheetComponent,
    PopupComponent,
    UpdateTimesheetEntryComponent,
    EmployeeTimesheetComponent,
    TimesheetEmployeeCalenderComponent,
    TimesheetEmployeeWorkChartComponent,
    TimesheetEmployeeProjectHoursComponent,
    TimesheetEmployeeAnalyticsComponent,
    CreateTimesheetComponent,
    AddTimesheetEntryComponent,
    TimesheetApprovalComponent,
    TimesheetDashboardComponent
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
    InsertTimeSheetEntryComponent,
    InsertTimeSheetComponent,
    TimesheetEmployeeWorkChartComponent,
  ],
  providers: [],
})
export class TimeSheetModule {}
