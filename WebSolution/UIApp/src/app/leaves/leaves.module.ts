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


export const leaveRoutes: Routes = [
{
  path: '',
  component: LeaveRouterContainerComponent,
  children: [
    // { path: 'leaveform', component: AddLeaveComponent  },
    // { path: 'pendingleave', component: LeaveRoutingComponent},
    // { path: 'appliedleave', component: TeamMemberLeaveRequestComponent},
    { path: 'applied', component: AllEmployeeLeavesComponent},
    { path:'', redirectTo: 'list', pathMatch: 'full' },
    { path: 'list', component: EmployeeLeaveListComponent },
    { path: 'details/:id', component: EmployeeLeaveDetailsComponent },
    { path: 'add', component: AddLeaveComponent },
    { path: 'update/:id', component: UpdateEmployeeLeaveComponent }
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
    AllEmployeeLeavesComponent,
    UpdateEmployeeLeaveComponent
  ]
})
export class LeavesModule { }
