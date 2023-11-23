import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InsertComponent } from './Components/Forms/insert/insert.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DetailsComponent } from './Components/details/details.component';
import { ListComponent } from './Components/list/list.component';



@NgModule({
  declarations: [
    InsertComponent,
    DetailsComponent,
    ListComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    InsertComponent,
    DetailsComponent,
    ListComponent
  ]
})
export class ProjectsModule { }
