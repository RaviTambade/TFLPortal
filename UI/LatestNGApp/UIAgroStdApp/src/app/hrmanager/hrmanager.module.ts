import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Routes } from '@angular/router';

export const hrmanagerRoutes:Routes=[
  {path:'dashboard',component:DashboardComponent},
]

@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule
  ]
})
export class HRManagerModule { }
