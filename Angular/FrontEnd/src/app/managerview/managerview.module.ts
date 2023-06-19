import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectListComponent } from './projects/project-list/project-list.component';
import { UpdateComponent } from './projects/update/update.component';
import { DetailComponent } from './projects/detail/detail.component';
import { RouterContainerComponent } from './router-container/router-container.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './projects/add/add.component';
import { EmployeeListComponent } from './employees/employee-list/employee-list.component';
import { HomeComponent } from './home/home.component';
import { TimesheetListComponent } from './timesheets/timesheet-list/timesheet-list.component';
import { AddTimesheetComponent } from './timesheets/add-timesheet/add-timesheet.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditComponent } from './timesheets/edit/edit.component';
import { DetailsTimesheetComponent } from './timesheets/details-timesheet/details-timesheet.component';
import { GetTimesheetComponent } from './timesheets/get-timesheet/get-timesheet.component';




const routes : Routes=
[
  {path: '' , redirectTo:'home', pathMatch:'full'},
  {path: 'home', component:HomeComponent},
   
  {path: 'projectlist', component : ProjectListComponent},
  {path: 'details/:id', component : DetailComponent},
  {path: 'add', component : AddComponent},
  {path: 'update', component : UpdateComponent},

  {path: 'timesheetlist' , component:TimesheetListComponent},
  {path: 'addtimesheet/:timesheetId', component : AddTimesheetComponent},
  {path:'edittimesheet/:timesheetId', component:EditComponent},
  {path:'detailstimesheet/:timesheetId', component:DetailsTimesheetComponent},

  {path: 'employeelist',component:EmployeeListComponent}
];


@NgModule({
  declarations: [
    ProjectListComponent,
    UpdateComponent,
    DetailComponent,
    RouterContainerComponent,
    SignInComponent,
    AddComponent,
    EmployeeListComponent,
    HomeComponent,
    TimesheetListComponent,
    AddTimesheetComponent,
    EditComponent,
    DetailsTimesheetComponent,
    GetTimesheetComponent,
  ],
  exports:[RouterContainerComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ]
})
export class ManagerviewModule { }
