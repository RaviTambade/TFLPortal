import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ProjectManagerContainer } from './components/container/projectmanager-container';
import { CurrentSprint } from './components/current-sprint/current-sprint';
import { MemberList } from './components/member-list/member-list';
import { ProjectItem } from './components/project-item/project-item';
import { ProjectList } from './components/project-list/project-list';
import { ProjectworkItem } from './components/project-work-Item/project-work-item';
import { ProjectWorkList } from './components/project-work-list/project-work-list';
import { ActivityList } from './components/sprintactivities/activitylist';
 
 


  const projectManagerRoutes: Routes = [
  { path: '', component:ProjectManagerContainer },
  { path: 'projects', component: ProjectList },
  { path: 'projects/:id', component: ProjectItem },
  ];


@NgModule({
  declarations: [
    ProjectManagerContainer,
    ProjectList,
    ProjectItem,
    MemberList,
    ProjectWorkList,
    ProjectworkItem,
    CurrentSprint,
    ActivityList,
  ],
  imports: [
           CommonModule, 
           RouterModule.forChild(projectManagerRoutes)
          ],
  exports: [ProjectWorkList, ProjectworkItem,
            CurrentSprint,ActivityList,
            MemberList],
})
export class ProjectManagerModule {}
