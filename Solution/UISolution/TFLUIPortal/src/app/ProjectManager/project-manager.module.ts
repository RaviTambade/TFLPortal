import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
 
 
import { Projectmanager } from './components/projectmanager/projectmanager';
import { ProjectList } from './components/project-list/project-list';
import { MembersList } from './components/members-list/members-list';
import { Employeeprojectworkdetails } from './components/employeeprojectworkdetails/employeeprojectworkdetails';
import { EmployeeProjectWorks } from './components/employee-project-works/employee-project-works';
import { ProjectItem } from './components/project-item/project-item';
import { CurrentSprint } from './components/current-sprint/current-sprint';
import { SprintDetails } from './components/sprint-details/sprint-details';
import { ActivityList } from './components/sprintactivities/activitylist';

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
    MembersList,
    CurrentSprint,
    ActivityList,
    SprintDetails,

  ],
  imports: [CommonModule, RouterModule],
  exports: [EmployeeProjectWorks, Employeeprojectworkdetails,
            CurrentSprint,ActivityList,
            SprintDetails,
            MembersList],
})
export class ProjectManagerModule {}
