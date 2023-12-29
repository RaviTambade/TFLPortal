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
import { EmployeeLeaveListComponent } from './Components/employee-leave-list/employee-leave-list.component';
import { EmployeeLeaveDetailsComponent } from './Components/employee-leave-details/employee-leave-details.component';
import { LeaveRouterContainerComponent } from './Components/leave-router-container/leave-router-container.component';


export const leaveRoutes: Routes = [
  // { path: '', component: AddLeaveComponent },
  // { path: 'leaveform', component: AddLeaveComponent  },
//   { path: 'pendingleave', component: LeaveRoutingComponent},
//   { path: 'appliedleave', component: TeamMemberLeaveRequestComponent}
// ];



{
  path: '',
  component: LeaveRouterContainerComponent,
  children: [
    {path:'', redirectTo: 'list', pathMatch: 'full' },
    { path: 'list', component: EmployeeLeaveListComponent },
    { path: 'details/:id', component: EmployeeLeaveDetailsComponent },
    // { path: 'addentry/:id', component: AddTimesheetEntryComponent },
    // { path: 'details/:id', component: DetailsComponent },
  ],
},
]

@NgModule({
  declarations: [
    AddLeaveComponent,
    PendingLeaveComponent,
    EmployeeLeavesComponent,
    LeaveRoutingComponent,
    TeamMemberLeaveRequestComponent,
    EmployeeLeaveListComponent,
    EmployeeLeaveDetailsComponent,
    LeaveRouterContainerComponent,
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
    EmployeeLeavesComponent,
    EmployeeLeaveListComponent,
    EmployeeLeaveDetailsComponent,
  ]
})
export class LeavesModule { }
