import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivityListComponent } from './Components/activity-list/activity-list.component';
import { ActivityDetailsComponent } from './Components/activity-details/activity-details.component';
import { AddActivityComponent } from './Components/Forms/add-activity/add-activity.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ActivityListComponent,
    ActivityDetailsComponent,
    AddActivityComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    ActivityDetailsComponent,
    ActivityListComponent,
    AddActivityComponent
    
  ]
})
export class ActivityModule { }
