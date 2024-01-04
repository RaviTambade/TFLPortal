import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HrmanagerLeftSidebarComponent } from './components/hrmanager-left-sidebar/hrmanager-left-sidebar.component';
import { RouterModule, Routes } from '@angular/router';
import { EventsComponent } from './components/events/events.component';
import { LeavesComponent } from './components/leaves/leaves.component';
import { PayrollComponent } from './components/payroll/payroll.component';
import { PerformenceApprisalComponent } from './components/performence-apprisal/performence-apprisal.component';
import { ProjectComponent } from './components/project/project.component';
import { TimesheetComponent } from './components/timesheet/timesheet.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { timeSheetRoutes } from '../time-sheet/time-sheet.module';
import { HRRouteGaurd } from './Gaurds/gaurd';

export const hrRoutes: Routes = [
  {
    path: '',
    component: HrmanagerLeftSidebarComponent,
    children: [
      {path:'dashboard', component:DashboardComponent},
      {
        path: 'timesheet',
        component: TimesheetComponent, children:timeSheetRoutes
      },
      { path: 'leave', component: LeavesComponent },
      {
        path: 'projects',
        component: ProjectComponent,
      },
      { path: 'events', component: EventsComponent },
      { path: 'payroll', component: PayrollComponent },
      { path: 'performance', component: PerformenceApprisalComponent },
    ],
  },
];

@NgModule({
  declarations: [
    HrmanagerLeftSidebarComponent,
    DashboardComponent,
    LeavesComponent,
    ProjectComponent,
    PayrollComponent,
    EventsComponent,
    PerformenceApprisalComponent,
    TimesheetComponent,
  ],
  imports: [CommonModule, RouterModule],
})
export class HrmanagerModule {}
