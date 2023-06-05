import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { InsertTaskComponent } from './insert-task/insert-task.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    InsertTaskComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
  
 
  ]
})
export class TaskModule { }
