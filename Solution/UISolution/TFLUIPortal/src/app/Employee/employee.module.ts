import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeContainer } from './Components/container/employee-container';
import { ProjectMemberList } from './Components/projects/member-list/member-list';
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
 

import { BarChart } from './Components/bi/charts/bar-chart/bar-chart';
import { PieChart } from './Components/bi/charts/pie-chart/pie-chart';
import { LineChart } from './Components/bi/charts/line-chart/line-chart';


import { AddLeave } from './Components/leavemgmt/add-leave/add-leave';
import { LeaveApplicationList } from './Components/leavemgmt/leave-applications-List/LeaveApplicationsList';
import { LeaveApplicationDetails } from './Components/leavemgmt/leave-details/leave-details';
import { LeaveUpdate } from './Components/leavemgmt/leave-update/leave-update';
import { LeaveAllocation } from './Components/leavemgmt/leave-allocation/leave-allocation';
import { ConsumedLeaves } from './Components/leavemgmt/consumed-leaves/consumed-leaves';
import { AvailableLeaves } from './Components/leavemgmt/available-leaves/available-leaves';
import { TaskList } from './Components/Timesheet/task-list/taskList';
import { TaskItem } from './Components/Timesheet/task-item/taskItem';
import { ProjectBacklog } from './Components/projects/project-backlog/project-backlog';
import { ProjectMember } from './Components/projects/member/member';
import { SprintList } from './components/projects/sprint-list/sprint-list';
import { ActivityList } from './components/projects/sprintactivities/activitylist';
import { ProjectBoardComponent } from './components/projects/project-board/project-board.component';
import { PaginationComponent } from './components/projects/pagination/pagination.component';
import { PaySlipList } from './components/Payroll/pay-slip-list/pay-slip-list';
import { PaySlipDetails } from './components/Payroll/pay-slip-details/pay-slip-details';
import { PayPackage } from './components/Payroll/pay-package/pay-package';
import { LeftSidebarComponent } from './components/container/left-sidebar/left-sidebar.component';
import { HorizontalsidebarComponent } from './components/container/horizontalsidebar/horizontalsidebar.component';
import { ProjectDetails } from './components/projects/project-details/project-details';
import { Details } from './components/leavemgmt/details/details';
import { TotalLeave } from './components/leavemgmt/total-leave/total-leave';
import { OngoingSprint } from './components/projects/ongoing-sprint/ongoing-sprint';

const employeeRoutes: Routes = [
  { path: '', component:EmployeeContainer ,
  children:[
  { path: 'projects', component: ProjectList},
  { path: 'projects/members/:id', component: ProjectMember},
  { path: 'projects/sprint/:id', component:ActivityList},
  { path: 'projects/:id', component: ProjectDetails},
  { path: 'leave', component: LeaveApplicationList},
  { path: 'addleave',component: AddLeave},
  { path: 'payroll', component: PaySlipList },
  { path: 'timesheet', component: TimesheetList }, 
  { path: 'leavedetails/:id', component: Details  }, 
  { path: 'paydetails/:id', component: PaySlipDetails}, 
  { path: 'availableleave', component: AvailableLeaves}, 
  { path: 'projects/sprints/:id', component: SprintList}, 
  ]},
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
    CreateTimesheet,
    
    ProjectContainer,
    ProjectList,
    ProjectItem,
    ProjectBacklog,
    ProjectMemberList,
    ProjectMember,
    SprintList,
    ActivityList,
    TaskList,
    TaskItem,
    ConsumedLeaves,
    TotalLeave,
    AvailableLeaves,
    AddLeave,
    LeaveApplicationList,
    LeaveApplicationDetails,
    LeaveUpdate,
    Details,
    LeaveAllocation,
    ProjectBoardComponent,
    PaginationComponent,

    PaySlipList,
    PaySlipDetails,
    PayPackage,
    LeftSidebarComponent,
    HorizontalsidebarComponent,
    ProjectDetails,
    OngoingSprint,
    

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
    AddLeave,
    TotalLeave,

    ProjectMemberList,
    ProjectMember,
    ProjectBoardComponent,
    ProjectBacklog,
    PaginationComponent,
    PaySlipList,
    PaySlipDetails,
    PayPackage
  ],
})

export class EmployeeModule {}
