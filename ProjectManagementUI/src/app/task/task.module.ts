import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { ListComponent } from './list/list.component';
import { InsertTaskComponent } from './insert-task/insert-task.component';
import { UpdateTaskComponent } from './update-task/update-task.component';
import { GettaskComponent } from './gettask/gettask.component';
import { GetallTaskListComponent } from './getall-task-list/getall-task-list.component';
import { FormsModule } from '@angular/forms';
import { SearchComponent } from './search/search.component';



@NgModule({
  declarations: [
    ListComponent,
    InsertTaskComponent,
    UpdateTaskComponent,
    GettaskComponent,
    GetallTaskListComponent,
    SearchComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    DatePipe,
  ]
})
export class TaskModule { }
