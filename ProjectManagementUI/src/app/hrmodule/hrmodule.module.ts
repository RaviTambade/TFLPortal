import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GetEmployeesComponent } from './get-employees/get-employees.component';
import { InsertEmployeeComponent } from './insert-employee/insert-employee.component';
import { FormsModule, NgModel } from '@angular/forms';
import { GetEmployeeComponent } from './get-employee/get-employee.component';
import { EmployeedetailsComponent } from './employeedetails/employeedetails.component';
import { UpdateemployeeComponent } from './updateemployee/updateemployee.component';




@NgModule({
  declarations: [
    GetEmployeesComponent,
    InsertEmployeeComponent,
    GetEmployeeComponent,
    EmployeedetailsComponent,
    UpdateemployeeComponent,
    
  ],
  imports: [
    CommonModule,
    FormsModule,
    
    
    
  ]
  
})
export class HRModuleModule { }
