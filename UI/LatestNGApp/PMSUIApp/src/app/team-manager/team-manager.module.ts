import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Routes } from '@angular/router';
import { ManagerprojectsComponent } from './managerprojects/managerprojects.component';
import { ManagerprojectfiltersComponent } from './managerprojectfilters/managerprojectfilters.component';
import { ManagerprojectdetailsComponent } from './managerprojectdetails/managerprojectdetails.component';

export const teammanagerRoutes:Routes=[
  {path:'dashboard',component:DashboardComponent},
  {path:'projects',component:ManagerprojectsComponent},
]

@NgModule({
  declarations: [
    DashboardComponent,
    ManagerprojectsComponent,
    ManagerprojectfiltersComponent,
    ManagerprojectdetailsComponent
  ],
  imports: [
    CommonModule
  ]
})
export class TeamManagerModule { }
