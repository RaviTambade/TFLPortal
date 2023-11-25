import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { DetailsComponent } from './Components/details/details.component';
import { ListComponent } from './Components/list/list.component';
import { AllProjectsListComponent } from './Components/all-projects-list/all-projects-list.component';



@NgModule({
  declarations: [
    AllProjectsListComponent,
    DetailsComponent,
    ListComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    DetailsComponent,
    ListComponent,
    AllProjectsListComponent
  ]
})
export class ProjectsModule { }
