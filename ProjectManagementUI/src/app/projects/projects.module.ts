import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { GetallProjectsComponent } from './getall-projects/getall-projects.component';
import { FormsModule } from '@angular/forms';
import { InsertPrjectComponent } from './insert-prject/insert-prject.component';
import { GetprojectComponent } from './getproject/getproject.component';
import { ProjectdetailsComponent } from './projectdetails/projectdetails.component';
import { UpdateprojectComponent } from './updateproject/updateproject.component';
import { InsertProjectteammemberComponent } from './insert-projectteammember/insert-projectteammember.component';




@NgModule({
  declarations: [
    GetallProjectsComponent,
    InsertPrjectComponent,
    GetprojectComponent,
    ProjectdetailsComponent,
    UpdateprojectComponent,
    InsertProjectteammemberComponent,
    
  ],
  imports: [
    CommonModule,
    FormsModule,
    DatePipe,
  
  ]
})
export class ProjectsModule { }
