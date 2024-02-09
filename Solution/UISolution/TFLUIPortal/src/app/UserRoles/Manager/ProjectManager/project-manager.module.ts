import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ProjectList } from './components/ProjectMgmt/project-list/project-list';
import { MembersList } from './components/ProjectMgmt/members-list/members-list';
import { Employeeprojectworkdetails } from './components/ProjectMgmt/employee-project-works/employeeprojectworkdetails/employeeprojectworkdetails.component';
import { EmployeeProjectWorks } from './components/ProjectMgmt/employee-project-works/employee-project-works';
import { ProjectItem } from './components/ProjectMgmt/project-list/project-item/project-item';
import { Projectmanager } from './components/projectmanager/projectmanager';
import { MemberTaskList } from './components/ProjectMgmt/member-task-list/member-task-list';
import { MemberDetails } from './Model/MemberDetails';

 export const projectManagerRoutes: Routes = [
  { path: '', component:Projectmanager },
  { path: 'myProject', component: ProjectList },
  { path: 'members/:id', component:MembersList}
  ];


@NgModule({
  declarations: [
    // TimesheetComponent,
    Projectmanager,
    EmployeeProjectWorks,
    Employeeprojectworkdetails,
    ProjectList,
    ProjectItem,
    MembersList,
    EmployeeProjectWorks,
    MemberTaskList,
    MembersList
  ],
  imports: [CommonModule, RouterModule],
  exports: [EmployeeProjectWorks, Employeeprojectworkdetails],
})
export class ProjectManagerModule {}
