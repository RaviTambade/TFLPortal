import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AllProjectsListComponent } from './Components/all-projects-list/all-projects-list.component';
import { InsertProjectAllocationComponent } from './Components/insert-project-allocation/insert-project-allocation.component';
import { UpdateProjectAllocationComponent } from './Components/update-project-allocation/update-project-allocation.component';
import { AllUnassignedEmployeeComponent } from './Components/all-unassigned-employee/all-unassigned-employee.component';
import { AllAssignedEmployeeComponent } from './Components/all-assigned-employee/all-assigned-employee.component';
import { AllEmployeesOfProjectComponent } from './Components/all-employees-of-project/all-employees-of-project.component';
import { UnassignedEmployeeOfProjectComponent } from './Components/unassigned-employee-of-project/unassigned-employee-of-project.component';
import { AssignEmployeeToProjectComponent } from './Components/assign-employee-to-project/assign-employee-to-project.component';
import { EmployeeProjectListComponent } from './Components/employee-project-list/employee-project-list.component';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeProjectDetailsComponent } from './Components/employee-project-details/employee-project-details.component';
import { BiModule } from '../bi/bi.module';
import { ActivityModule } from '../activity/activity.module';
import { ActivityListComponent } from '../activity/Components/activity-list/activity-list.component';
import { ActivityDetailsComponent } from '../activity/Components/activity-details/activity-details.component';
import { EmployeeTodaysActivitiesComponent } from '../activity/Components/employee-todays-activities/employee-todays-activities.component';


export const projectRoutes: Routes = [
  { path: '', component: EmployeeTodaysActivitiesComponent },
  { path: 'activities', component: EmployeeTodaysActivitiesComponent }
  // { path: 'activityList', component: ActivityDetailsComponent }
];



@NgModule({
  declarations: [
    AllProjectsListComponent,
    InsertProjectAllocationComponent,
    UpdateProjectAllocationComponent,
    AllUnassignedEmployeeComponent,
    AllAssignedEmployeeComponent,
    AllEmployeesOfProjectComponent,
    UnassignedEmployeeOfProjectComponent,
    AssignEmployeeToProjectComponent,
    EmployeeProjectListComponent,
    EmployeeProjectDetailsComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    BiModule,
    ActivityModule,
    FormsModule
  ],
  exports: [
    AllProjectsListComponent,
    InsertProjectAllocationComponent,
    UpdateProjectAllocationComponent,
    AllUnassignedEmployeeComponent,
    AllAssignedEmployeeComponent,
    AllEmployeesOfProjectComponent,
    UnassignedEmployeeOfProjectComponent,
    AssignEmployeeToProjectComponent,
    EmployeeProjectListComponent,
    EmployeeProjectDetailsComponent
  ]
})
export class ProjectsModule { }
