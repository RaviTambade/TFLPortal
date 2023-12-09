import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './Components/Members/list/list.component';
import { DetailsComponent } from './Components/Employees/details/details.component';
import { InsertMemberComponent } from './Components/Members/forms/insert-member/insert-member.component';
import { EmployeeDetailsComponent } from './Components/Employees/employee-details/employee-details.component';



@NgModule({
  declarations: [
    ListComponent,
    DetailsComponent,
    InsertMemberComponent,
    EmployeeDetailsComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ListComponent,
    DetailsComponent,
    EmployeeDetailsComponent
  ]
})
export class ResourceManagementModule { }
