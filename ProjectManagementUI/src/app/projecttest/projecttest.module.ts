import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectlistComponent } from './projectlist/projectlist.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProjectdetailsComponent } from './projectdetails/projectdetails.component';



@NgModule({
  declarations: [
    ProjectlistComponent,
    ProjectdetailsComponent
  ],
  exports: [
    ProjectlistComponent,
    ProjectdetailsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ProjecttestModule { }
