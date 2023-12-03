import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DetailsComponent } from './Components/details/details.component';
import { ListComponent } from './Components/list/list.component';
import { AllProjectsListComponent } from './Components/all-projects-list/all-projects-list.component';
import { InsertProjectAllocationComponent } from './Components/insert-project-allocation/insert-project-allocation.component';
import { UpdateProjectAllocationComponent } from './Components/update-project-allocation/update-project-allocation.component';



@NgModule({
  declarations: [
    AllProjectsListComponent,
    DetailsComponent,
    ListComponent,
    InsertProjectAllocationComponent,
    UpdateProjectAllocationComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports: [
    DetailsComponent,
    ListComponent,
    AllProjectsListComponent,
    InsertProjectAllocationComponent,
    UpdateProjectAllocationComponent
  ]
})
export class ProjectsModule { }
