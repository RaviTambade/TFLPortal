import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
 
 
import { ProjectItem } from '../../Employee/components/project-item/projectitem';
 
import { Projectmanager } from './components/projectmanager/projectmanager';
import { ProjectList } from './components/project-list/project-list';

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
