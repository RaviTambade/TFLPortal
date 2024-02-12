import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { RouterModule, Routes } from '@angular/router';
 
import { Payroll } from './components/payroll/payroll';
import { PerformenceApprisal } from './components/performence-apprisal/performence-apprisal';

import { Dashboard } from './components/BI/Dashboard/dashboard';
import { Employeenavbar } from './components/employeenavbar/employeenavbar';
import { TaskWorkUtilization } from './components/BI/task-work-utilization/task-work-utilization';

import { Employee } from './components/employee/employee';

import { TimesheetDetails } from './components/timesheet/EmployeeTimesheet/timesheet-details';
import { TimesheetList } from './components/timesheet/timesheet-list/timesheet-list';
import { CreateTimesheet } from './components/timesheet/create-timesheet/create-timesheet';
import { TimesheetEmployeeProjectHours } from './components/BI/timesheet-employee-project-hours/timesheet-employee-project-hours';
import { WorkList } from './components/timesheet/workList/workList';
import { MyTimesheet } from './components/timesheet/DayTimesheet/day-timesheet';
import { WeekTimesheetList } from './components/timesheet/WeekTimesheeList/weektimesheetlist';
import { ProjectItem } from './components/project-item/projectitem';
import { ProjectList } from './components/project-list/projectlist';
import { ProjectContainer } from './components/projectcontainer/projectcontainer';
import { NewDayTimesheet } from './components/timesheet/new-day-timesheet/new-day-timesheet';
import { UpdateTimesheetEntry } from './components/timesheet/update-timesheet-entry/update-timesheet-entry';
import { WorkItem } from './components/timesheet/workItem/WorkItem';
import { ConsumedLeaves } from './components/leave/consumed-leaves/consumed-leaves';
import { TimesheetEntryDetail } from './components/timesheet/timesheet-entry-detail/timesheet-entry-detail';


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
    ProjectContainer,
    ProjectList,
    ProjectItem,
    WorkList,
    WorkItem,
    MyTimesheet,
    WeekTimesheetList,
    ConsumedLeaves,
    TaskWorkUtilization,
    TimesheetEntryDetail
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
    TaskWorkUtilization,
    MyTimesheet,
    WeekTimesheetList,
    NewDayTimesheet,
    ConsumedLeaves,
    ProjectContainer,
    TimesheetEntryDetail
  ],
})
export class EmployeeModule {}
