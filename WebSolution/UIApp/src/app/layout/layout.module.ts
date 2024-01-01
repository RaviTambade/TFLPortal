import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './Components/main/main.component';
import { LeftSidebarComponent } from './Components/left-sidebar/left-sidebar.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { TimesheetComponent } from './Components/employee-left-sidebar/timesheet/timesheet.component';
import { LeavesComponent } from './Components/employee-left-sidebar/leaves/leaves.component';
import { ProjectComponent } from './Components/employee-left-sidebar/project/project.component';
import { SharedModule } from '../shared/shared.module';
import { EmployeeLeftSidebarComponent } from './Components/employee-left-sidebar/employee-left-sidebar.component';
import { HrmanagerLeftSidebarComponent } from './Components/hrmanager-left-sidebar/hrmanager-left-sidebar.component';
import { PayrollComponent } from './Components/employee-left-sidebar/payroll/payroll.component';
import { EventsComponent } from './Components/employee-left-sidebar/events/events.component';




@NgModule({
  declarations: [
    MainComponent,
    LeftSidebarComponent,
    HomeComponent,
    TimesheetComponent,
    LeavesComponent,
    ProjectComponent,
    EmployeeLeftSidebarComponent,
    HrmanagerLeftSidebarComponent,
    PayrollComponent,
    EventsComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule
  ],
  exports:[MainComponent,
  ProjectComponent]
})
export class LayoutModule { }
