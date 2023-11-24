import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { DetailsComponent } from './Components/details/details.component';
import { ListComponent } from './Components/list/list.component';



@NgModule({
  declarations: [
    DetailsComponent,
    ListComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    DetailsComponent,
    ListComponent
  ]
})
export class ProjectsModule { }
