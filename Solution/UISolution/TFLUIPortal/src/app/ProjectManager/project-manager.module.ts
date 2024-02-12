import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
 
 
import { ProjectManagerContainer } from './components/container/projectmanager-container';
import { ProjectList } from './components/project-list/project-list';
import { MemberList } from './components/member-list/member-list';
import {ProjectworkItem } from './components/project-work-Item/project-work-item';
import { ProjectWorkList } from './components/project-work-list/project-work-list';
import { ProjectItem } from './components/project-item/project-item';
import { CurrentSprint } from './components/current-sprint/current-sprint';
import { SprintDetails } from './components/sprint-details/sprint-details';
import { ActivityList } from './components/sprintactivities/activitylist';
import { MemberItem } from './components/member-item/member-item';

 export const projectManagerRoutes: Routes = [
  { path: '', component:ProjectManagerContainer },
  { path: 'projects', component: ProjectList },
  { path: 'projects/:id', component: ProjectItem },
  { path: 'members/:id', component:MemberItem}
  ];


@NgModule({
  declarations: [
    ProjectManagerContainer,
    ProjectList,
    ProjectItem,
    MemberList,
    MemberItem,
    ProjectWorkList,
    ProjectworkItem,
    CurrentSprint,
    SprintDetails,
    ActivityList,
  ],
  imports: [CommonModule, RouterModule],
  exports: [ProjectWorkList, ProjectworkItem,
            CurrentSprint,ActivityList,
            SprintDetails,
            MemberList,MemberItem],
})
export class ProjectManagerModule {}
