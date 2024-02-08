import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MemberTaskListComponent } from './components/ProjectMgmt/member-task-list/member-task-list.component';
import { EmployeeProjectWorksComponent } from './components/ProjectMgmt/employee-project-works/employee-project-works.component';
import { EmployeeprojectworkdetailsComponent } from './components/ProjectMgmt/employee-project-works/employeeprojectworkdetails/employeeprojectworkdetails.component';
import { ProjectmanagerComponent } from './components/projectmanager/projectmanager.component';
import { ProjectListComponent } from './components/ProjectMgmt/project-list/project-list.component';
import { ProjectdetailsComponent } from './components/ProjectMgmt/project-list/projectdetails/projectdetails.component';
import { MembersListComponent } from './components/ProjectMgmt/members-list/members-list.component';

 export const projectManagerRoutes: Routes = [
  { path: '', component:ProjectmanagerComponent },
  { path: 'myProject', component: ProjectListComponent },
  { path: 'members/:id', component: MembersListComponent},
  ];


@NgModule({
  declarations: [
    // TimesheetComponent,
    MemberTaskListComponent,
    EmployeeProjectWorksComponent,
    EmployeeprojectworkdetailsComponent,
    ProjectmanagerComponent,
    ProjectListComponent,
    ProjectdetailsComponent,
    MembersListComponent
  ],
  imports: [CommonModule, RouterModule],
  exports: [EmployeeProjectWorksComponent, EmployeeprojectworkdetailsComponent,ProjectmanagerComponent],
})
export class ProjectManagerModule {}
