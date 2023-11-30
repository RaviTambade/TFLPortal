import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectUserStoriesComponent } from './Components/project-user-stories/project-user-stories.component';
import { UserStoryDetailsComponent } from './Components/user-story-details/user-story-details.component';



@NgModule({
  declarations: [
    ProjectUserStoriesComponent,
    UserStoryDetailsComponent
  ],
  imports: [
    CommonModule,
    
  ],
  exports: [
    ProjectUserStoriesComponent,
    UserStoryDetailsComponent
    
  ]
})
export class ProjectplanningModule { }
