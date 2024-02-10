import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LeaveDisplay } from './components/LeaveMgmt/leave-display/leave-display';
import { PayDisplay } from './components/Payroll/pay-display/pay-display';
import { ProjectsDisplay } from './components/ProjectMgmt/projects-display/projects-display';
import { TimesheetDisplay } from './components/timesheet/timesheet-display/timesheet-display';
import { Director } from './components/director/director';

// export const directorRoutes: Routes = [
//   {
//     path: '',
//     component: DirectorLeftSidebarComponent,
//     children: [
//       {path:'dashboard', component:DashboardComponent},
//       {
//         path: 'timesheet',
//         component: TimesheetComponent,
//       },
//       { path: 'leave', component: LeavesComponent },
//       {
//         path: 'projects',
//         component: ProjectComponent,
//       },
//       { path: 'events', component: EventsComponent },
//       { path: 'payroll', component: PayrollComponent },
//       { path: 'performance', component: PerformenceApprisalComponent },
//     ],
//   },
// ];

@NgModule({
  declarations: [
    LeaveDisplay,
    PayDisplay,
    ProjectsDisplay,
    TimesheetDisplay,
    Director,
  ],
  imports: [
    CommonModule,RouterModule
  ],
  exports:[Director]
})
export class DirectorModule { }
