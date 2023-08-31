import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimesheetRegistrationComponent } from './timesheet-registration/timesheet-registration.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { TimesheetListComponent } from './timesheet-list/timesheet-list.component';
import { AddToTimerecordComponent } from './add-to-timerecord/add-to-timerecord.component';
import { TimesheetDetailsComponent } from './timesheet-details/timesheet-details.component';
import { TimesheetEditComponent } from './timesheet-edit/timesheet-edit.component';
import { TimesheetGetComponent } from './timesheet-get/timesheet-get.component';
import { TimerecordRegistrationComponent } from './timerecord-registration/timerecord-registration.component';



@NgModule({
  declarations: [
    TimesheetRegistrationComponent,
    TimesheetListComponent,
    AddToTimerecordComponent,
    TimesheetDetailsComponent,
    TimesheetEditComponent,
    TimesheetGetComponent,
    TimerecordRegistrationComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule,

  ],
  exports:[
    TimesheetRegistrationComponent,
    TimesheetDetailsComponent,
    TimesheetListComponent,
    TimesheetEditComponent,
    TimesheetGetComponent,
    AddToTimerecordComponent
  ]
})
export class EmployeeModule { }
