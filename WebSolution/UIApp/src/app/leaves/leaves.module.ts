import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddLeaveComponent } from './Components/forms/add-leave/add-leave.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';


export const leaveRoutes: Routes = [
  { path: '', component: AddLeaveComponent },
  { path: 'leaveform', component: AddLeaveComponent  }
];

@NgModule({
  declarations: [
    AddLeaveComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule
  ],
  exports: [
    AddLeaveComponent
  ]
})
export class LeavesModule { }
