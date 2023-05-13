import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GetEmployeesComponent } from './get-employees/get-employees.component';
import { InsertEmployeeComponent } from './insert-employee/insert-employee.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    GetEmployeesComponent,
    InsertEmployeeComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    
    
  ]
  
})
export class HRModuleModule { }
