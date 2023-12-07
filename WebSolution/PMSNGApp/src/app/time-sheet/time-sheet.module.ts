import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './components/list/list.component';
import { DetailsComponent } from './components/details/details.component';
import { InsertTimeSheetEntryComponent } from './components/forms/insert-time-sheet-entry/insert-time-sheet-entry.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { InsertTimeSheetComponent } from './components/forms/insert-time-sheet/insert-time-sheet.component';
import { PopupComponent } from './components/popup/popup.component';
import { UpdateTimesheetEntryComponent } from './components/forms/update-timesheet-entry/update-timesheet-entry.component';
import { ApproveTimesheetComponent } from './components/forms/approve-timesheet/approve-timesheet.component';


@NgModule({
  declarations: [
    ListComponent,
    DetailsComponent,
    InsertTimeSheetEntryComponent,
    InsertTimeSheetComponent,
    PopupComponent,
    UpdateTimesheetEntryComponent,
    ApproveTimesheetComponent
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
    InsertTimeSheetComponent,
    ApproveTimesheetComponent
  ]
})
export class TimeSheetModule { }
