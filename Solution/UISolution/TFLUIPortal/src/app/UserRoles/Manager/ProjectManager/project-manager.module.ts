import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { Projectmanager } from './components/projectmanager/projectmanager';
import { ProjectList } from './components/ProjectMgmt/project-list/project-list';
import { MembersList } from './components/ProjectMgmt/members-list/members-list';
import { ProjectItem } from '../../Employee/components/project-item/projectitem';
import { Employeeprojectworkdetails } from './components/ProjectMgmt/employee-project-works/employeeprojectworkdetails/employeeprojectworkdetails.component';
import { EmployeeProjectWorks } from './components/ProjectMgmt/employee-project-works/employee-project-works';

 export const projectManagerRoutes: Routes = [
  { path: '', component:Projectmanager },
  { path: 'myProject', component: ProjectList },
  { path: 'members/:id', component:MembersList}
  ];


@NgModule({
  declarations: [
    // TimesheetComponent,
    EmployeeProjectWorks,
    Employeeprojectworkdetails,
    Projectmanager,
    ProjectList,
   ProjectItem,
    MembersList,
  ],
  imports: [CommonModule, RouterModule],
  exports: [EmployeeProjectWorks, Employeeprojectworkdetails,Projectmanager],
})
export class ProjectManagerModule {}
