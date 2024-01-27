import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailsComponent } from './Components/Employees/details/details.component';
import { EmployeeDetailsComponent } from './Components/Employees/employee-details/employee-details.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EmployeeSalaryStructureComponent } from './Components/forms/employee-salary-structure/employee-salary-structure.component';
import { SalarystructureComponent } from './Components/Employees/salarystructure/salarystructure.component';



@NgModule({
  declarations: [
    DetailsComponent,
    EmployeeDetailsComponent,
    EmployeeSalaryStructureComponent,
    SalarystructureComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    DetailsComponent,
    EmployeeDetailsComponent,
    EmployeeSalaryStructureComponent,
    SalarystructureComponent
  ]
})
export class ResourceManagementModule { }
