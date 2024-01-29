import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectManagerLeftSidebarComponent } from './components/project-manager-left-sidebar/project-manager-left-sidebar.component';
import { RouterModule } from '@angular/router';
import { DashboardComponent } from '../employee/components/dashboard/dashboard.component';
import { TimesheetComponent } from '../employee/components/timesheet/timesheet.component';
import { LeavesComponent } from '../hrmanager/components/leaves/leaves.component';
import { MemberTaskListComponent } from './components/ProjectMgmt/member-task-list/member-task-list.component';


@NgModule({
  declarations: [
    DashboardComponent,
    ProjectManagerLeftSidebarComponent,
    LeavesComponent,
    TimesheetComponent,
    MemberTaskListComponent,
  ],
  imports: [CommonModule, RouterModule],
})
export class ProjectManagerModule {}
