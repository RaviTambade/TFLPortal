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
import { AllEmployeeLeavesComponent } from './Components/all-employee-leaves/all-employee-leaves.component';
import { UpdateEmployeeLeaveComponent } from './Components/forms/update-employee-leave/update-employee-leave.component';
import { AllRoleBasedLeavesComponent } from './Components/all-role-based-leaves/all-role-based-leaves.component';
import { AddRoleBasedLeaveComponent } from './Components/forms/add-role-based-leave/add-role-based-leave.component';
import { UpdateRoleBasedLeaveComponent } from './Components/forms/update-role-based-leave/update-role-based-leave.component';
import { ConsumedLeaveComponent } from './Components/consumed-leave/consumed-leave.component';
import { TotalLeaveComponent } from './Components/total-leave/total-leave.component';
import { AllLeaveCountComponent } from './Components/all-leave-count/all-leave-count.component';
import { UpdateStatusComponent } from './Components/forms/update-status/update-status.component';
import { LeaveDetailsComponent } from './Components/leave-details/leave-details.component';


export const leaveRoutes: Routes = [
{
  path: '',
  component: LeaveRouterContainerComponent,
  children: [
    // { path: 'leaveform', component: AddLeaveComponent  },
    { path: 'pendingleave', component: LeaveRoutingComponent},
    { path: 'updateleave/:id', component: UpdateStatusComponent},
    { path: 'employeedetails/:id', component: LeaveDetailsComponent},
    { path: 'appliedleave', component: TeamMemberLeaveRequestComponent},
    { path: 'applied', component: AllEmployeeLeavesComponent},
    { path: '', redirectTo: 'list', pathMatch: 'full' },
    { path: 'list', component: EmployeeLeaveListComponent },
    { path: 'leavecount', component: AllLeaveCountComponent },
    { path: 'details/:id', component: EmployeeLeaveDetailsComponent },
    { path: 'add', component: AddLeaveComponent },
    { path: 'update/:id', component: UpdateEmployeeLeaveComponent },
    { path: 'employeeleave', component: EmployeeLeavesComponent }
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
    AllEmployeeLeavesComponent,
    UpdateEmployeeLeaveComponent,
    AllRoleBasedLeavesComponent,
    AddRoleBasedLeaveComponent,
    UpdateRoleBasedLeaveComponent,
    ConsumedLeaveComponent,
    TotalLeaveComponent,
    AllLeaveCountComponent,
    UpdateStatusComponent,
    LeaveDetailsComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forRoot(leaveRoutes),
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
    AllEmployeeLeavesComponent,
    UpdateEmployeeLeaveComponent,
    AllRoleBasedLeavesComponent,
    UpdateRoleBasedLeaveComponent
  ]
})
export class LeavesModule { }
