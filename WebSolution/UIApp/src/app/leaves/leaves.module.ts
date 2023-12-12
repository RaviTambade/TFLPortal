import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddLeaveComponent } from './Components/forms/add-leave/add-leave.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AddLeaveComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    AddLeaveComponent
  ]
})
export class LeavesModule { }
