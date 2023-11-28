import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './components/list/list.component';
import { DetailsComponent } from './components/details/details.component';
import { InsertTimeSheetEntryComponent } from './components/forms/insert-time-sheet-entry/insert-time-sheet-entry.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { InsertTimeSheetComponent } from './components/forms/insert-time-sheet/insert-time-sheet.component';


@NgModule({
  declarations: [
    ListComponent,
    DetailsComponent,
    InsertTimeSheetEntryComponent,
    InsertTimeSheetComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    FormsModule
  ],
  exports: [
    ListComponent,
    DetailsComponent,
    InsertTimeSheetEntryComponent,
    InsertTimeSheetComponent
  ]
})
export class TimeSheetModule { }
