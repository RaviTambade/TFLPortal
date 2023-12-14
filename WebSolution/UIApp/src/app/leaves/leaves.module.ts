import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddLeaveComponent } from './Components/forms/add-leave/add-leave.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { PendingLeaveComponent } from './Components/pending-leave/pending-leave.component';
import { EmployeeLeavesComponent } from './Components/employee-leaves/employee-leaves.component';
import { LeaveRoutingComponent } from './Components/leave-routing/leave-routing.component';


export const leaveRoutes: Routes = [
  { path: '', component: AddLeaveComponent },
  // { path: 'leaveform', component: AddLeaveComponent  },
  { path: 'pendingleave', component: LeaveRoutingComponent},
];

@NgModule({
  declarations: [
    AddLeaveComponent,
    PendingLeaveComponent,
    EmployeeLeavesComponent,
    LeaveRoutingComponent
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
