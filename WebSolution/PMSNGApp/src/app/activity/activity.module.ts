import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivityListComponent } from './Components/activity-list/activity-list.component';
import { ActivityDetailsComponent } from './Components/activity-details/activity-details.component';



@NgModule({
  declarations: [
    ActivityListComponent,
    ActivityDetailsComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ActivityDetailsComponent,
    ActivityListComponent
  ]
})
export class ActivityModule { }
