import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectListComponent } from './projects/project-list/project-list.component';
import { UpdateComponent } from './projects/update/update.component';
import { DetailComponent } from './projects/detail/detail.component';
import { RouterContainerComponent } from './router-container/router-container.component';
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
import { TimerecordListComponent } from './timerecords/timerecord-list/timerecord-list.component';
import { AddTimerecordComponent } from './timerecords/add-timerecord/add-timerecord.component';
import { DetailsTimerecordComponent } from './timerecords/details-timerecord/details-timerecord.component';
import { EmployeeDetailsComponent } from './employees/employee-details/employee-details.component';
import { EditEmployeeComponent } from './employees/edit-employee/edit-employee.component';
import { ManagerAccessComponent } from './manager-access/manager-access.component';
import { AddEmployeeComponent } from './employees/add-employee/add-employee.component';
import { TaskListComponent } from './task/task-list/task-list.component';
import { TaskDetailsComponent } from './task/task-details/task-details.component';
import { AddTaskComponent } from './task/add-task/add-task.component';
import { EditTaskComponent } from './task/edit-task/edit-task.component';
import { AccountComponent } from './Salery/account/account.component';
import { TotalDetailsComponent } from './projects/total-details/total-details.component';
import { LoginComponent } from './authentication/login/login.component';






const routes: Routes =
  [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },

//Manager Access
     {path: 'managesaccess', component:ManagerAccessComponent},    


//Authentication
    {path: 'login' , component:LoginComponent},      

//project

    { path: 'projectlist', component: ProjectListComponent },
    { path: 'details/:id', component: DetailComponent },
    { path: 'add', component: AddComponent },
    { path: 'update/:id', component: UpdateComponent },
    { path: 'totaldetails/:id', component: TotalDetailsComponent },


//employee
    {path: 'employeelist' , component:EmployeeListComponent},
    { path: 'detailemployee/:empid', component:EmployeeDetailsComponent },
    { path: 'editemployee/:empid', component:EditEmployeeComponent },


//timesheet
    { path: 'timesheetlist', component: TimesheetListComponent },
    { path: 'addtimesheet/:timesheetId', component: AddTimesheetComponent },
    { path: 'edittimesheet/:timesheetId', component: EditComponent },
    { path: 'detailstimesheet/:timesheetId', component: DetailsTimesheetComponent },

//timerecord

    {path : 'timesheetlist/timerecordlist', component:TimerecordListComponent},
    {path : 'timesheetlist/addtimerecord', component:AddTimerecordComponent},
    {path : 'detailstimerecors/:date', component:DetailsTimerecordComponent},


//Task
    {path : 'taskslist', component:TaskListComponent}, 
    {path: 'taskadd', component:AddTaskComponent }, 
    {path: 'edittask/:taskid', component:EditTaskComponent },
    {path : 'taskdetails/:taskid', component:TaskDetailsComponent},   

//Salary     
    {path: 'accounr', component:AccountComponent },
  ];


@NgModule({
  declarations: [
    ProjectListComponent,
    UpdateComponent,
    DetailComponent,
    RouterContainerComponent,
    AddComponent,
    EmployeeListComponent,
    HomeComponent,
    TimesheetListComponent,
    AddTimesheetComponent,
    EditComponent,
    DetailsTimesheetComponent,
    GetTimesheetComponent,
    TimerecordListComponent,
    AddTimerecordComponent,
    DetailsTimerecordComponent,
    EmployeeDetailsComponent,
    EditEmployeeComponent,
    ManagerAccessComponent,
    AddEmployeeComponent,
    TaskListComponent,
    TaskDetailsComponent,
    AddTaskComponent,
    EditTaskComponent,
    AccountComponent,
    TotalDetailsComponent,
    LoginComponent,
    
  ],
  exports: [RouterContainerComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ]
})
export class ManagerviewModule { }
