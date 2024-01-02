import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './layout/Components/home/home.component';
import { TimesheetComponent } from './layout/Components/employee-left-sidebar/timesheet/timesheet.component';
import { timeSheetRoutes } from './time-sheet/time-sheet.module';
import { authRoutes } from './authentication/authentication.module';
import { leaveRoutes } from './leaves/leaves.module';
import { LeavesComponent } from './layout/Components/employee-left-sidebar/leaves/leaves.component';
import { ProjectComponent } from './layout/Components/employee-left-sidebar/project/project.component';
import { projectRoutes } from './projects/projects.module';
import { EmployeeLeftSidebarComponent } from './layout/Components/employee-left-sidebar/employee-left-sidebar.component';
import { HrmanagerLeftSidebarComponent } from './layout/Components/hrmanager-left-sidebar/hrmanager-left-sidebar.component';
import { EventsComponent } from './layout/Components/employee-left-sidebar/events/events.component';
import { PayrollComponent } from './layout/Components/employee-left-sidebar/payroll/payroll.component';

const employeeRoutes: Routes = [
  // {path:"" ,redirectTo:'home',pathMatch:'full'},
  // { path: 'home', component: HomeComponent },
  // { path: 'auth', children:authRoutes },
  {
    path: 'timesheet',
    component: TimesheetComponent,
    children: timeSheetRoutes,
  },
  { path: 'leave', component: LeavesComponent, children: leaveRoutes },
  { path: 'projects', component: ProjectComponent, children: projectRoutes },
  { path: 'events', component: EventsComponent,  },
  { path: 'payroll', component: PayrollComponent, },
];

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'auth', children: authRoutes },
  {
    path: 'employee',
    component: EmployeeLeftSidebarComponent,
    children: employeeRoutes,
  },
  {
    path: 'hrmanager',
    component: HrmanagerLeftSidebarComponent,
  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
