import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectManagerLeftSidebarComponent } from './components/project-manager-left-sidebar/project-manager-left-sidebar.component';
import { RouterModule } from '@angular/router';
// import { TimesheetComponent } from '../employee/components/timesheet/timesheet.component';
import { MemberTaskListComponent } from './components/ProjectMgmt/member-task-list/member-task-list.component';
import { EmployeeProjectWorksComponent } from './components/ProjectMgmt/employee-project-works/employee-project-works.component';
import { EmployeeprojectworkdetailsComponent } from './components/ProjectMgmt/employee-project-works/employeeprojectworkdetails/employeeprojectworkdetails.component';
import { ProjectmanagerComponent } from './components/projectmanager/projectmanager.component';

@NgModule({
  declarations: [
    ProjectManagerLeftSidebarComponent,
    // TimesheetComponent,
    MemberTaskListComponent,
    EmployeeProjectWorksComponent,
    EmployeeprojectworkdetailsComponent,
    ProjectmanagerComponent,
  ],
  imports: [CommonModule, RouterModule],
  exports: [EmployeeProjectWorksComponent, EmployeeprojectworkdetailsComponent,ProjectmanagerComponent],
})
export class ProjectManagerModule {}
