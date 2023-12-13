import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivityListComponent } from './Components/activity-list/activity-list.component';
import { ActivityDetailsComponent } from './Components/activity-details/activity-details.component';
import { AddActivityComponent } from './Components/Forms/add-activity/add-activity.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UpdateActivityComponent } from './Components/Forms/update-activity/update-activity.component';
import { ProjectActivitiesComponent } from './Components/project-activities/project-activities.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    ActivityListComponent,
    ActivityDetailsComponent,
    AddActivityComponent,
    UpdateActivityComponent,
    ProjectActivitiesComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule
  ],
  exports: [
    ActivityDetailsComponent,
    ActivityListComponent,
    AddActivityComponent,
    UpdateActivityComponent,
    ProjectActivitiesComponent
    
  ]
})
export class ActivityModule { }
