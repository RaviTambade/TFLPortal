import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
 
 
import { ProjectItem } from '../../Employee/components/project-item/projectitem';
 
import { Projectmanager } from './components/projectmanager/projectmanager';
import { ProjectList } from './components/project-list/project-list';
import { MembersList } from './components/members-list/members-list';
import { Employeeprojectworkdetails } from './components/employeeprojectworkdetails/employeeprojectworkdetails';
import { EmployeeProjectWorks } from './components/employee-project-works/employee-project-works';
import { MemberTaskList } from './components/member-task-list/member-task-list';

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
