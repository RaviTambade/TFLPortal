import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GetallProjectsComponent } from './getall-projects/getall-projects.component';
import { GetProjectByIdComponent } from './get-project-by-id/get-project-by-id.component';
import { FormsModule } from '@angular/forms';
import { InsertPrjectComponent } from './insert-prject/insert-prject.component';



@NgModule({
  declarations: [
    GetallProjectsComponent,
    GetProjectByIdComponent,
    InsertPrjectComponent,
  ],
  imports: [
    CommonModule,
    FormsModule
  
  ]
})
export class ProjectsModule { }
