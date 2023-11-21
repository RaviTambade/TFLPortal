import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InsertComponent } from './Components/Forms/insert/insert.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DetailsComponent } from './Components/details/details.component';



@NgModule({
  declarations: [
    InsertComponent,
    DetailsComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    InsertComponent,
    DetailsComponent
  ]
})
export class ProjectsModule { }
