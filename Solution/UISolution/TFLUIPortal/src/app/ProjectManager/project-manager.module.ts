import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { ProjectManagerContainer } from './components/container/projectmanager-container';
import { CurrentSprint } from './components/current-sprint/current-sprint';

import { ActivityList } from './components/sprintactivities/activitylist';

import { MgrProjectList} from './components/mgr-project-list/mgr-project-list';
import { MgrProjectItem } from './components/mgr-project-item/mgr-project-item';
import { MgrProjectWorkList } from './components/mgr-project-work-list/mgr-project-work-list';
import { MgrProjectworkItem } from './components/mgr-project-work-Item/mgr-project-work-item';
import { MgrMemberList } from './components/mgr-member-list/mgr-member-list';
import { SprintList } from './components/sprint-list/sprint-list';
 
 


  const projectManagerRoutes: Routes = [
  { path: '', component:ProjectManagerContainer },
  { path: 'projects', component: MgrProjectList },
  { path: 'projects/:id', component: MgrProjectItem },
  ];


@NgModule({
  declarations: [
    ProjectManagerContainer,
    MgrProjectWorkList,
    MgrProjectworkItem,
    CurrentSprint,
    MgrProjectList,
    MgrProjectItem,
    ActivityList,
    SprintList,
    
  ],
  imports: [
           CommonModule, 
           RouterModule.forChild(projectManagerRoutes)
          ],
  exports: [MgrProjectWorkList, MgrProjectworkItem,
            CurrentSprint,ActivityList,SprintList],
})
export class ProjectManagerModule {}
