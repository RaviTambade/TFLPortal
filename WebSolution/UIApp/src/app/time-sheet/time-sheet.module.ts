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
import { ChunkPipe } from '../shared/pipes/chunk.pipe';
import { SharedModule } from '../shared/shared.module';
import { TimesheetEmployeeWorkChartComponent } from './components/timesheet-employee-work-chart/timesheet-employee-work-chart.component';
import { TimesheetEmployeeProjectHoursComponent } from './components/timesheet-employee-project-hours/timesheet-employee-project-hours.component';
import { TimesheetEmployeeAnalyticsComponent } from './components/timesheet-employee-analytics/timesheet-employee-analytics.component';

export const timeSheetRoutes: Routes = [
  { path: '', redirectTo:'view',pathMatch:'full' },
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
  ],
  providers: [ChunkPipe],
})
export class TimeSheetModule {}
