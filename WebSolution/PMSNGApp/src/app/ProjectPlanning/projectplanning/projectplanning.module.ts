import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectUserStoriesComponent } from './Components/project-user-stories/project-user-stories.component';



@NgModule({
  declarations: [
    ProjectUserStoriesComponent
  ],
  imports: [
    CommonModule,
    
  ],
  exports: [
    ProjectUserStoriesComponent,
    
  ]
})
export class ProjectplanningModule { }
