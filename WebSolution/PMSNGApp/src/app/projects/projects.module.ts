import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DetailsComponent } from './Components/details/details.component';
import { ListComponent } from './Components/list/list.component';
import { AllProjectsListComponent } from './Components/all-projects-list/all-projects-list.component';
import { InsertProjectAllocationComponent } from './Components/insert-project-allocation/insert-project-allocation.component';
import { UpdateProjectAllocationComponent } from './Components/update-project-allocation/update-project-allocation.component';
import { AllUnassignedEmployeeComponent } from './Components/all-unassigned-employee/all-unassigned-employee.component';
import { AllAssignedEmployeeComponent } from './Components/all-assigned-employee/all-assigned-employee.component';
import { AllEmployeesOfProjectComponent } from './Components/all-employees-of-project/all-employees-of-project.component';
import { UnassignedEmployeeOfProjectComponent } from './Components/unassigned-employee-of-project/unassigned-employee-of-project.component';
import { AssignEmployeeToProjectComponent } from './Components/assign-employee-to-project/assign-employee-to-project.component';



@NgModule({
  declarations: [
    AllProjectsListComponent,
    DetailsComponent,
    ListComponent,
    InsertProjectAllocationComponent,
    UpdateProjectAllocationComponent,
    AllUnassignedEmployeeComponent,
    AllAssignedEmployeeComponent,
    AllEmployeesOfProjectComponent,
    UnassignedEmployeeOfProjectComponent,
    AssignEmployeeToProjectComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports: [
    DetailsComponent,
    ListComponent,
    AllProjectsListComponent,
    InsertProjectAllocationComponent,
    UpdateProjectAllocationComponent,
    AllUnassignedEmployeeComponent,
    AllAssignedEmployeeComponent,
    AllEmployeesOfProjectComponent,
    UnassignedEmployeeOfProjectComponent,
    AssignEmployeeToProjectComponent
  ]
})
export class ProjectsModule { }
