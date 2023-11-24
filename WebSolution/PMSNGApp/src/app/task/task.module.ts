import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import { ListComponent } from './Components/list/list.component';
import { DetailsComponent } from './Components/details/details.component'


@NgModule({
  declarations: [
    ListComponent,
    DetailsComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
  ],
  exports: [
    DetailsComponent,
    ListComponent
  ]
})
export class TaskModule { }
