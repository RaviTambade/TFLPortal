import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MembersListComponent } from './Components/members-list/members-list.component';
import { ListComponent } from './Components/Members/list/list.component';
import { DetailsComponent } from './Components/Members/details/details.component';



@NgModule({
  declarations: [
    MembersListComponent,
    ListComponent,
    DetailsComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ResourceManagementModule { }
