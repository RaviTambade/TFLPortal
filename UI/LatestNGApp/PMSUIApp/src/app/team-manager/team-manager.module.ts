import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Routes } from '@angular/router';
import { ManagerprojectsComponent } from './managerprojects/managerprojects.component';
import { ManagerprojectfiltersComponent } from './managerprojectfilters/managerprojectfilters.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FilteredtasksComponent } from './filteredtasks/filteredtasks.component';
import { AddprojectComponent } from './addproject/addproject.component';
import { UpdateprojectComponent } from './updateproject/updateproject.component';
import { AddtaskComponent } from './addtask/addtask.component';
import { TaskdetailsComponent } from './taskdetails/taskdetails.component';
import { TaskdetailsinfoComponent } from './taskdetailsinfo/taskdetailsinfo.component';
import { UpdatetaskComponent } from './updatetask/updatetask.component';
import { EmployeelistComponent } from './employeelist/employeelist.component';
import { AddemployeeComponent } from './addemployee/addemployee.component';
import { TeamMemberModule } from '../team-member/team-member.module';
import { TasksofprojectsComponent } from '../team-member/tasksofprojects/tasksofprojects.component';
import { UnassignedtasksComponent } from '../team-member/unassignedtasks/unassignedtasks.component';
import { TimesheetlistComponent } from './timesheetlist/timesheetlist.component';
import { TimesheetdetailsComponent } from './timesheetdetails/timesheetdetails.component';



export const teammanagerRoutes:Routes=[
  {path:'dashboard',component:DashboardComponent},
  {path:'projects',component:ManagerprojectsComponent},
  {path:'projecttasks/:projectId',component:TasksofprojectsComponent},
  {path:'addproject', component:AddprojectComponent},
  {path:'updateproject/:projectId',component:UpdateprojectComponent},
  {path:'addtask/:projectId',component:AddtaskComponent},
  {path:'updateproject/:projectId',component:UpdateprojectComponent},
  {path:'updatetask',component:UpdatetaskComponent},
  {path:'employeelist',component:EmployeelistComponent},
  {path:'addemployee',component:AddemployeeComponent},
  {path:'unassignedtasks/:projectId',component:UnassignedtasksComponent},
  {path:'timesheetlist', component:TimesheetlistComponent},
  {path:'timesheetdetails',component: TimesheetdetailsComponent},

]

@NgModule({
  declarations: [
    DashboardComponent,
    ManagerprojectsComponent,
    ManagerprojectfiltersComponent,
    FilteredtasksComponent,
    AddprojectComponent,
    UpdateprojectComponent,
    AddtaskComponent,
    TaskdetailsComponent,
    TaskdetailsinfoComponent,
    UpdatetaskComponent,
    EmployeelistComponent,
    AddemployeeComponent,
    TimesheetlistComponent,
    TimesheetdetailsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    TeamMemberModule,
    ReactiveFormsModule
    
  ]
})
export class TeamManagerModule { }
