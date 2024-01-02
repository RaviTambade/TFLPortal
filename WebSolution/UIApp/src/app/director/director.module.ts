import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DirectorLeftSidebarComponent } from './components/director-left-sidebar/director-left-sidebar.component';
import { EventsComponent } from './components/events/events.component';
import { LeavesComponent } from './components/leaves/leaves.component';
import { PayrollComponent } from './components/payroll/payroll.component';
import { PerformenceApprisalComponent } from './components/performence-apprisal/performence-apprisal.component';
import { ProjectComponent } from './components/project/project.component';
import { TimesheetComponent } from './components/timesheet/timesheet.component';
import { RouterModule, Routes } from '@angular/router';

export const directorRoutes: Routes = [
  {
    path: '',
    component: DirectorLeftSidebarComponent,
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
    DirectorLeftSidebarComponent,
    LeavesComponent,
    ProjectComponent,
    PayrollComponent,
    EventsComponent,
    PerformenceApprisalComponent,
    TimesheetComponent,
  ],
  imports: [
    CommonModule,RouterModule
  ]
})
export class DirectorModule { }
