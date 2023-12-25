import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './layout/Components/home/home.component';
import { TimesheetComponent } from './layout/Components/timesheet/timesheet.component';
import { timeSheetRoutes } from './time-sheet/time-sheet.module';
import { authRoutes } from './authentication/authentication.module';
import { leaveRoutes } from './leaves/leaves.module';
import { LeavesComponent } from './layout/Components/leaves/leaves.component';
import { ProjectComponent } from './layout/Components/project/project.component';
import { projectRoutes } from './projects/projects.module';

const routes:Routes=[
  {path:"" ,redirectTo:'home',pathMatch:'full'},
  { path: 'home', component: HomeComponent },
  { path: 'auth', children:authRoutes },
  {path: 'timesheet', component:TimesheetComponent, children:timeSheetRoutes},
  {path: 'leave', component:LeavesComponent, children:leaveRoutes},
  { path: 'projects', component:ProjectComponent ,children:projectRoutes},
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
