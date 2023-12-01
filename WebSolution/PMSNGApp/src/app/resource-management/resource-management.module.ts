import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './Components/Members/list/list.component';
import { DetailsComponent } from './Components/Employees/details/details.component';



@NgModule({
  declarations: [
    ListComponent,
    DetailsComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ListComponent,
    DetailsComponent
  ]
})
export class ResourceManagementModule { }
