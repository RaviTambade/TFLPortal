import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { RouterModule, Routes } from '@angular/router';
 
import { EmployeeContainer } from './components/container/employee-container';
import { Dashboard } from './components/BI/Dashboard/dashboard';
import { Employeenavbar } from './components/employeenavbar/employeenavbar';

import { TimesheetEmployeeProjectHours } from './components/BI/timesheet-employee-project-hours/timesheet-employee-project-hours';
import { TaskWorkUtilization } from './components/BI/task-work-utilization/task-work-utilization';


import { Payroll } from './components/payroll/payroll';
import { PerformenceApprisal } from './components/performence-apprisal/performence-apprisal';

import { ProjectContainer } from './components/projectcontainer/projectcontainer';
import { ProjectList } from './components/project-list/projectlist';
import { ProjectItem } from './components/project-item/projectitem';



import { TimesheetList } from './components/timesheet/timesheet-list/timesheet-list';
import { TimesheetDetails } from './components/timesheet/EmployeeTimesheet/timesheet-details';
import { TimesheetEntryDetail } from './components/timesheet/timesheet-entry-detail/timesheet-entry-detail';

import { MyTimesheet } from './components/timesheet/DayTimesheet/day-timesheet';
import { NewDayTimesheet } from './components/timesheet/new-day-timesheet/new-day-timesheet';
import { CreateTimesheet } from './components/timesheet/create-timesheet/create-timesheet';
import { UpdateTimesheetEntry } from './components/timesheet/update-timesheet-entry/update-timesheet-entry';
import { WeekTimesheetList } from './components/timesheet/WeekTimesheeList/weektimesheetlist';
import { WorkList } from './components/timesheet/workList/workList';
import { WorkItem } from './components/timesheet/workItem/WorkItem';


import { MemberList } from './components/member-list/member-list';
import { MemberItem } from './components/member-item/member-item';
import { ConsumedLeaves } from './components/leavemgmt/components/consumed-leaves/consumed-leaves';


const employeeRoutes: Routes = [
  { path: '', component:EmployeeContainer },
  { path: 'members', component: MemberList },
  { path: 'members/:id', component:MemberItem}
  ];


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
    EmployeeContainer,
    Employeenavbar,
    ProjectContainer,
    ProjectList,
    ProjectItem,
    MemberList,
    MemberItem,
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
    RouterModule.forChild(employeeRoutes)
  ],
  exports: [
    TimesheetDetails,
    TimesheetList,
    TimesheetEmployeeProjectHours,
    UpdateTimesheetEntry,
    EmployeeContainer,
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
