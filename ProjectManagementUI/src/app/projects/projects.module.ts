import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { GetallProjectsComponent } from './getall-projects/getall-projects.component';
import { GetProjectByIdComponent } from './get-project-by-id/get-project-by-id.component';
import { FormsModule } from '@angular/forms';
import { InsertPrjectComponent } from './insert-prject/insert-prject.component';
import { UpdateProjectComponent } from './update-project/update-project.component';



@NgModule({
  declarations: [
    GetallProjectsComponent,
    GetProjectByIdComponent,
    InsertPrjectComponent,
    UpdateProjectComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    DatePipe,
  
  ]
})
export class ProjectsModule { }
