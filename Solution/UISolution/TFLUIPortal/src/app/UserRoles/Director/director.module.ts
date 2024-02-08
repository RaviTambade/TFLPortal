import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DirectorLeftSidebarComponent } from './components/director-left-sidebar/director-left-sidebar.component';
import { RouterModule, Routes } from '@angular/router';
import { LeaveDisplayComponent } from './components/LeaveMgmt/leave-display/leave-display.component';
import { PayDisplayComponent } from './components/Payroll/pay-display/pay-display.component';
import { ProjectsDisplayComponent } from './components/ProjectMgmt/projects-display/projects-display.component';
import { TimesheetDisplayComponent } from './components/timesheet/timesheet-display/timesheet-display.component';
import { DirectorComponent } from './components/director/director.component';

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
    DirectorLeftSidebarComponent,
    LeaveDisplayComponent,
    PayDisplayComponent,
    ProjectsDisplayComponent,
    TimesheetDisplayComponent,
    DirectorComponent,
  ],
  imports: [
    CommonModule,RouterModule
  ],
  exports:[DirectorComponent]
})
export class DirectorModule { }
