import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimesheetRegistrationComponent } from './timesheet-registration/timesheet-registration.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { TimesheetListComponent } from './timesheet-list/timesheet-list.component';
import { AddToTimerecordComponent } from './add-to-timerecord/add-to-timerecord.component';
import { TimesheetDetailsComponent } from './timesheet-details/timesheet-details.component';
import { TimesheetEditComponent } from './timesheet-edit/timesheet-edit.component';
import { TimesheetGetComponent } from './timesheet-get/timesheet-get.component';
import { TimerecordRegistrationComponent } from './timerecord-registration/timerecord-registration.component';
import { TimerecordListComponent } from './timerecord-list/timerecord-list.component';
import { TimerecordsDetailsComponent } from './timerecords-details/timerecords-details.component';






const routes: Routes =
  [

//timesheet
    { path: 'timesheet-list', component: TimesheetListComponent },
    { path: 'timesheet-registration/:timesheetId', component: TimesheetRegistrationComponent },
    { path: 'timesheet-edit/:timesheetId', component: TimesheetEditComponent },
    { path: 'timesheet-details/:timesheetId', component: TimesheetDetailsComponent },

//timerecord

    {path : 'timesheet-list/timerecord-list', component:TimerecordListComponent},
    {path : 'timesheet-list/add-to-timerecord', component:AddToTimerecordComponent},
    {path : 'timerecords-details/:date', component:TimerecordsDetailsComponent},

  ]









@NgModule({
  declarations: [
    TimesheetRegistrationComponent,
    TimesheetListComponent,
    AddToTimerecordComponent,
    TimesheetDetailsComponent,
    TimesheetEditComponent,
    TimesheetGetComponent,
    TimerecordRegistrationComponent,
    TimerecordListComponent,
    TimerecordsDetailsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule,
    RouterModule.forRoot(routes)

  ],
  exports:[
    TimesheetRegistrationComponent,
    TimesheetDetailsComponent,
    TimesheetListComponent,
    TimesheetEditComponent,
    TimesheetGetComponent,
    AddToTimerecordComponent,
    TimerecordListComponent,
    TimerecordRegistrationComponent,
    TimerecordsDetailsComponent
  ]
})
export class EmployeeModule { }
