import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddLeaveComponent } from './Components/forms/add-leave/add-leave.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { PendingLeaveComponent } from './Components/pending-leave/pending-leave.component';
import { EmployeeLeavesComponent } from './Components/employee-leaves/employee-leaves.component';
import { LeaveRoutingComponent } from './Components/leave-routing/leave-routing.component';
import { TeamMemberLeaveRequestComponent } from './Components/team-member-leave-request/team-member-leave-request.component';
import { BiModule } from '../bi/bi.module';


export const leaveRoutes: Routes = [
  // { path: '', component: AddLeaveComponent },
  // { path: 'leaveform', component: AddLeaveComponent  },
  { path: 'pendingleave', component: LeaveRoutingComponent},
  { path: 'appliedleave', component: TeamMemberLeaveRequestComponent}
];

@NgModule({
  declarations: [
    AddLeaveComponent,
    PendingLeaveComponent,
    EmployeeLeavesComponent,
    LeaveRoutingComponent,
    TeamMemberLeaveRequestComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
    BiModule
  ],
  exports: [
    AddLeaveComponent,
    TeamMemberLeaveRequestComponent,
    PendingLeaveComponent,
    EmployeeLeavesComponent
  ]
})
export class LeavesModule { }
