import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeContainer } from './Components/container/employee-container';
import { MemberList } from './Components/member-list/member-list';
import { HorizontalBar } from './Components/bars/horizontalbar/horizontalbar';
import { VerticalBar } from './Components/bars/verticalbar/verticalbar';
import { EmployeeNavBar } from './Components/bars/employeenavbar/employeenavbar';
import { Dashboard } from './Components/bi/Dashboard/dashboard';
 
import { TaskWorkUtilization } from './Components/bi/task-work-utilization/task-work-utilization';
 
import { InOutTimeRecorder } from './Components/inout/in-out-time-recorder/in-out-time-recorder';
import { WorkRecord } from './Components/inout/work-record/work-record';
import { TimesheetDetails } from './Components/Timesheet/employee-timesheet/timesheet-details';
import { TimesheetList } from './Components/Timesheet/timesheet-list/timesheet-list';
import { TimesheetEntryDetail } from './Components/Timesheet/timesheet-entry-detail/timesheet-entry-detail';
import { CreateTimesheet } from './Components/Timesheet/create-timesheet/create-timesheet';
import { TaskUtiization } from './Components/Timesheet/task-utiization-chart/TaskUtiization';
import { NewDayTimesheet } from './Components/Timesheet/new-day-timesheet/new-day-timesheet';
import { UpdateTimesheetEntry } from './Components/Timesheet/update-timesheet-entry/update-timesheet-entry';
import { WeekTimesheetList } from './Components/Timesheet/week-Ttmeshee-list/weektimesheetlist';
import { MyTimesheet } from './Components/Timesheet/day-timesheet/day-timesheet';
import { ProjectContainer } from './Components/projects/projectcontainer/projectcontainer';
import { ProjectList } from './Components/projects/project-list/projectlist';
import { ProjectItem } from './Components/projects/project-item/projectitem';
import { WorkList } from './Components/Timesheet/work-list/workList';
import { WorkItem } from './Components/Timesheet/work-item/WorkItem';
import { ConsumedLeaves } from './Components/leavemgmt/consumed-leaves/consumed-leaves';
import { AvailableLeaves } from './Components/leavemgmt/available-leaves/available-leaves';
import { BarChart } from './Components/bi/charts/bar-chart/bar-chart';
import { PieChart } from './Components/bi/charts/pie-chart/pie-chart';
import { LineChart } from './Components/bi/charts/line-chart/line-chart';
import { AddLeave } from './Components/leavemgmt/add-leave/add-leave';
import { LeaveApplicationList } from './Components/leavemgmt/leave-applications-List/LeaveApplicationsList';
import { LeaveApplicationDetails } from './Components/leavemgmt/leave-details/leave-details';
import { LeaveUpdate } from './Components/leavemgmt/leave-update/leave-update';
 
const employeeRoutes: Routes = [
  { path: '', component:EmployeeContainer },
  { path: 'members', component: MemberList },
];


@NgModule({
  declarations: [

    EmployeeContainer,

    HorizontalBar,
    VerticalBar,
    EmployeeNavBar,

    Dashboard,
    BarChart,
    PieChart,
    LineChart,
    
 
    TaskWorkUtilization,
 
    
     
    InOutTimeRecorder,
    WorkRecord,

    TimesheetDetails,
    TimesheetList,
    TimesheetEntryDetail,
    CreateTimesheet,
    TaskUtiization, 
    NewDayTimesheet,
    UpdateTimesheetEntry,
    WeekTimesheetList,
    MyTimesheet,
    
    ProjectContainer,
    ProjectList,
    ProjectItem,
    MemberList,
    WorkList,
    WorkItem,
    ConsumedLeaves,
    AvailableLeaves,
    AddLeave,
    LeaveApplicationList,
    LeaveApplicationDetails,
    LeaveUpdate,

    //Leave management 
    //New Leave application
    //Update existing leave application
    //my leave applications list
    //my leave balance
 
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
    TaskUtiization,
    UpdateTimesheetEntry,
    EmployeeContainer,
    TaskWorkUtilization,
    MyTimesheet,
    WeekTimesheetList,
    NewDayTimesheet,
 
    ProjectContainer,
    TimesheetEntryDetail,
    InOutTimeRecorder,
    WorkRecord,

    HorizontalBar,
    VerticalBar,
    EmployeeNavBar,
    AvailableLeaves,
    LeaveApplicationList,
    LeaveApplicationDetails,
    LeaveUpdate,

  ],
})

export class EmployeeModule {}
