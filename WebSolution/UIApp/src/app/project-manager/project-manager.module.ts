import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectManagerLeftSidebarComponent } from './components/project-manager-left-sidebar/project-manager-left-sidebar.component';
import { Routes, RouterModule } from '@angular/router';
import { EventsComponent } from './components/events/events.component';
import { LeavesComponent } from './components/leaves/leaves.component';
import { PayrollComponent } from './components/payroll/payroll.component';
import { PerformenceApprisalComponent } from './components/performence-apprisal/performence-apprisal.component';
import { ProjectComponent } from './components/project/project.component';
import { TimesheetComponent } from './components/timesheet/timesheet.component';

export const projectManagerRoutes: Routes = [
  {
    path: '',
    component: ProjectManagerLeftSidebarComponent,
    children: [
      {
        path: 'timesheet',
        component: TimesheetComponent,
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
    ProjectManagerLeftSidebarComponent,
    LeavesComponent,
    ProjectComponent,
    PayrollComponent,
    EventsComponent,
    PerformenceApprisalComponent,
    TimesheetComponent,
  ],
  imports: [CommonModule, RouterModule],
})
export class ProjectManagerModule {}
