import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Routes } from '@angular/router';
import { ManagerprojectsComponent } from './managerprojects/managerprojects.component';
import { ManagerprojectfiltersComponent } from './managerprojectfilters/managerprojectfilters.component';
import { ManagerprojectdetailsComponent } from './managerprojectdetails/managerprojectdetails.component';
import { ProjectteammembersComponent } from './projectteammembers/projectteammembers.component';
import { TasklistComponent } from './tasklist/tasklist.component';
import { FormsModule } from '@angular/forms';
import { FilteredtasksComponent } from './filteredtasks/filteredtasks.component';
import { AddprojectComponent } from './addproject/addproject.component';
import { UpdateprojectComponent } from './updateproject/updateproject.component';
import { AddtaskComponent } from './addtask/addtask.component';
import { TaskdetailsComponent } from './taskdetails/taskdetails.component';
import { TaskdetailsinfoComponent } from './taskdetailsinfo/taskdetailsinfo.component';


export const teammanagerRoutes:Routes=[
  {path:'dashboard',component:DashboardComponent},
  {path:'projects',component:ManagerprojectsComponent},
  {path:'tasklist',component:TasklistComponent},
  {path:'addproject', component:AddprojectComponent},
  {path:'updateproject/:projectId',component:UpdateprojectComponent},
  {path:'addtask',component:AddtaskComponent},
  {path:'updatetask/:taskId',component:UpdateprojectComponent},
]

@NgModule({
  declarations: [
    DashboardComponent,
    ManagerprojectsComponent,
    ManagerprojectfiltersComponent,
    ManagerprojectdetailsComponent,
    ProjectteammembersComponent,
    TasklistComponent,
    FilteredtasksComponent,
    AddprojectComponent,
    UpdateprojectComponent,
    AddtaskComponent,
    TaskdetailsComponent,
    TaskdetailsinfoComponent
  ],
  imports: [
    CommonModule,
    FormsModule
    
  ]
})
export class TeamManagerModule { }
