import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivityListComponent } from './Components/activity-list/activity-list.component';
import { ActivityDetailsComponent } from './Components/activity-details/activity-details.component';
import { AddActivityComponent } from './Components/Forms/add-activity/add-activity.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UpdateActivityComponent } from './Components/Forms/update-activity/update-activity.component';
import { ProjectActivitiesComponent } from './Components/project-activities/project-activities.component';
import { RouterModule } from '@angular/router';
import { EmployeeTodaysActivitiesComponent } from './Components/employee-todays-activities/employee-todays-activities.component';
import { EmployeeAllActivitiesComponent } from './Components/employee-all-activities/employee-all-activities.component';
import { EmployeeworksComponent } from './Components/employeeworks/employeeworks.component';
import { EmployeeworksdetailsComponent } from './Components/employeeworksdetails/employeeworksdetails.component';
import { EmployeeworkrouteroutletComponent } from './Components/employeeworkrouteroutlet/employeeworkrouteroutlet.component';

@NgModule({
  declarations: [
    ActivityListComponent,
    ActivityDetailsComponent,
    AddActivityComponent,
    UpdateActivityComponent,
    ProjectActivitiesComponent,
    EmployeeTodaysActivitiesComponent,
    EmployeeAllActivitiesComponent,
    EmployeeworksComponent,
    EmployeeworksdetailsComponent,
    EmployeeworkrouteroutletComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule
  ],
  exports: [
    ActivityDetailsComponent,
    ActivityListComponent,
    AddActivityComponent,
    UpdateActivityComponent,
    ProjectActivitiesComponent,
    EmployeeTodaysActivitiesComponent,
    EmployeeAllActivitiesComponent,
    EmployeeworksComponent,
    EmployeeworksdetailsComponent,
    EmployeeworksdetailsComponent
    
  ]
})
export class ActivityModule { }
