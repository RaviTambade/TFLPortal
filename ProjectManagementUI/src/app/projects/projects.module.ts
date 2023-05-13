import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GetallProjectsComponent } from './getall-projects/getall-projects.component';
import { GetProjectByIdComponent } from './get-project-by-id/get-project-by-id.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    GetallProjectsComponent,
    GetProjectByIdComponent,
  ],
  imports: [
    CommonModule,
    FormsModule
  
  ]
})
export class ProjectsModule { }
