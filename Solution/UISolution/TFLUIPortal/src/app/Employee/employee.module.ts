import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { RouterModule, Routes } from '@angular/router';
 
import { Payroll } from './components/payroll/payroll';
import { PerformenceApprisal } from './components/performence-apprisal/performence-apprisal';

import { Dashboard } from './components/BI/Dashboard/dashboard';
import { Employeenavbar } from './components/employeenavbar/employeenavbar';
import { Montlyworkutilization } from './components/montlyworkutilization/montlyworkutilization';

import { Employee } from './components/employee/employee';

import { TimesheetDetails } from './components/timesheet/EmployeeTimesheet/timesheet-details';
import { TimesheetList } from './components/timesheet/timesheet-list/timesheet-list';
import { CreateTimesheet } from './components/timesheet/create-timesheet/create-timesheet';
import { TimesheetEmployeeProjectHours } from './components/timesheet/timesheet-employee-project-hours/timesheet-employee-project-hours';
import { WorkList } from './components/timesheet/workList/workList';
import { MyTimesheet } from './components/timesheet/DayTimesheet/mytimesheet';
import { WeekTimesheetList } from './components/timesheet/WeekTimesheeList/weektimesheetlist';
import { ProjectItem } from './components/project-item/projectitem';
import { ProjectList } from './components/project-list/projectlist';
import { ProjectContainer } from './components/projectcontainer/projectcontainer';
import { NewDayTimesheet } from './components/timesheet/new-day-timesheet/new-day-timesheet';
import { UpdateTimesheetEntry } from './components/timesheet/update-timesheet-entry/update-timesheet-entry';
import { WorkItem } from './components/timesheet/workItem/WorkItem';



@NgModule({
  declarations: [
    Dashboard,
    Payroll,
    PerformenceApprisal,
    TimesheetDetails,
    TimesheetList,
    CreateTimesheet,
    TimesheetEmployeeProjectHours,
    NewDayTimesheet,
    UpdateTimesheetEntry,
    Employee,
    Employeenavbar,
    Montlyworkutilization,
    ProjectContainer,
    ProjectList,
    ProjectItem,
    WorkList,
    WorkItem,
    MyTimesheet,
    WeekTimesheetList
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    SharedModule,
    FormsModule,
    RouterModule
  ],
  exports: [
    TimesheetDetails,
    TimesheetList,
    TimesheetEmployeeProjectHours,
    UpdateTimesheetEntry,
    Employee,
    Montlyworkutilization,
    MyTimesheet,
    WeekTimesheetList,
    NewDayTimesheet
  ],
})
export class EmployeeModule {}