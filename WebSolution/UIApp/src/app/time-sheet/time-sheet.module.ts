import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './components/list/list.component';
import { DetailsComponent } from './components/details/details.component';
import { InsertTimeSheetEntryComponent } from './components/forms/insert-time-sheet-entry/insert-time-sheet-entry.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InsertTimeSheetComponent } from './components/forms/insert-time-sheet/insert-time-sheet.component';
import { PopupComponent } from './components/popup/popup.component';
import { UpdateTimesheetEntryComponent } from './components/forms/update-timesheet-entry/update-timesheet-entry.component';
import { ApproveTimesheetComponent } from './components/forms/approve-timesheet/approve-timesheet.component';
import { TotalWorkDurationOfEmployeeComponent } from './components/total-work-duration-of-employee/total-work-duration-of-employee.component';
import { WorkDurationComponent } from './components/work-duration/work-duration.component';
import { RouterModule, Routes } from '@angular/router';

export const timeSheetRoutes: Routes = [
  { path: '', component: ListComponent },
  { path: 'view', component: ListComponent  },
  { path: 'analytics', component: WorkDurationComponent },
];

@NgModule({
  declarations: [
    ListComponent,
    DetailsComponent,
    InsertTimeSheetEntryComponent,
    InsertTimeSheetComponent,
    PopupComponent,
    UpdateTimesheetEntryComponent,
    ApproveTimesheetComponent,
    TotalWorkDurationOfEmployeeComponent,
    WorkDurationComponent,
  ],
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  exports: [
    ListComponent,
    DetailsComponent,
    InsertTimeSheetEntryComponent,
    InsertTimeSheetComponent,
    ApproveTimesheetComponent,
    TotalWorkDurationOfEmployeeComponent,
    WorkDurationComponent,
  ],
})
export class TimeSheetModule {}
