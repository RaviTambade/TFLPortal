import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimesheetRegistrationComponent } from './timesheet-registration/timesheet-registration.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { TimesheetListComponent } from './timesheet-list/timesheet-list.component';



@NgModule({
  declarations: [
    TimesheetRegistrationComponent,
    TimesheetListComponent
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
    TimesheetListComponent
  ]
})
export class EmployeeModule { }
