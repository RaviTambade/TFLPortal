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
import { UpdatetaskComponent } from './updatetask/updatetask.component';
import { EmployeelistComponent } from './employeelist/employeelist.component';
import { AddemployeeComponent } from './addemployee/addemployee.component';
import { TeamMemberModule } from '../team-member/team-member.module';
import { TasksofprojectsComponent } from '../team-member/tasksofprojects/tasksofprojects.component';
import { UnassignedtasksComponent } from '../team-member/unassignedtasks/unassignedtasks.component';
import { TimesheetlistComponent } from './timesheetlist/timesheetlist.component';


import { AssignedtasksbymanagerComponent } from './assignedtasksbymanager/assignedtasksbymanager.component';
import { TasksbymanagerComponent } from './tasksbymanager/tasksbymanager.component';
import { UnassignedtasksbymanagerComponent } from './unassignedtasksbymanager/unassignedtasksbymanager.component';
import { AssigntheunassignedtaskComponent } from './assigntheunassignedtask/assigntheunassignedtask.component';
import { UpdatetaskstatusComponent } from './updatetaskstatus/updatetaskstatus.component';


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
  {path:'tasksbymanager',component:TasksbymanagerComponent},
  {path:'unassignedtasks/:projectId',component:UnassignedtasksComponent},
  {path:'timesheetlist', component:TimesheetlistComponent},
  {path:'updatestatus/:taskId',component:UpdatetaskstatusComponent},
  {path:'assigntask/:taskId',component:AssigntheunassignedtaskComponent}
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
    UpdatetaskComponent,
    EmployeelistComponent,
    AddemployeeComponent,
    TimesheetlistComponent,
    AssignedtasksbymanagerComponent,
    TasksbymanagerComponent,
    UnassignedtasksbymanagerComponent,
    AssigntheunassignedtaskComponent,
    UpdatetaskstatusComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    TeamMemberModule,
    ReactiveFormsModule
  ],
  exports:[
    AssigntheunassignedtaskComponent
  ]
})
export class TeamManagerModule { }