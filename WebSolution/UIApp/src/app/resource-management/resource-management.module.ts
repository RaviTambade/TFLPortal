import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './Components/Members/list/list.component';
import { DetailsComponent } from './Components/Employees/details/details.component';
import { InsertMemberComponent } from './Components/Members/forms/insert-member/insert-member.component';
import { EmployeeDetailsComponent } from './Components/Employees/employee-details/employee-details.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EmployeeSalaryStructureComponent } from './Components/forms/employee-salary-structure/employee-salary-structure.component';
import { SalarystructureComponent } from './Components/Employees/salarystructure/salarystructure.component';



@NgModule({
  declarations: [
    ListComponent,
    DetailsComponent,
    InsertMemberComponent,
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
    ListComponent,
    DetailsComponent,
    EmployeeDetailsComponent,
    EmployeeSalaryStructureComponent
  ]
})
export class ResourceManagementModule { }
