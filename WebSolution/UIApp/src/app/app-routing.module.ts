import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './layout/Components/home/home.component';
import { TimesheetComponent } from './layout/Components/timesheet/timesheet.component';
import { timeSheetRoutes } from './time-sheet/time-sheet.module';
import { authRoutes } from './authentication/authentication.module';

const routes:Routes=[
  { path: 'home', component: HomeComponent },
  { path: 'auth', children:authRoutes },
  {path:'timesheet', component:TimesheetComponent, children:timeSheetRoutes}
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
