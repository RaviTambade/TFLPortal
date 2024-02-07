import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HrmanagerLeftSidebarComponent } from './components/hrmanager-left-sidebar/hrmanager-left-sidebar.component';
import { RouterModule, Routes } from '@angular/router';
import { EventsComponent } from './components/events/events.component';
import { LeavesComponent } from './components/leaves/leaves.component';
import { PayrollComponent } from './components/payroll/payroll.component';
import { PerformenceApprisalComponent } from './components/performence-apprisal/performence-apprisal.component';
import { ProjectComponent } from './components/project/project.component';
import { TimesheetComponent } from './components/timesheet/timesheet.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SalaryprocessingComponent } from './components/payroll/salaryprocessing/salaryprocessing.component';
import { MonthlysalarystructureComponent } from './components/payroll/monthlysalarystructure/monthlysalarystructure.component';
import { EmployeedetailsComponent } from './components/payroll/employeedetails/employeedetails.component';
import { AllEmployeesComponent } from './components/payroll/all-employees/all-employees.component';
import { EmployeeLeavesComponent } from './components/payroll/employee-leaves/employee-leaves.component';
import { PaidEmployeeDetailsComponent } from './components/payroll/paid-employee-details/paid-employee-details.component';
import { LeaveDisplayComponent } from './components/leave-display/leave-display.component';
import { LeaveallocationsComponent } from './LeaveMgmt/components/leaveallocations/leaveallocations.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { AllEmployeeLeavesComponent } from './LeaveMgmt/components/all-employee-leaves/all-employee-leaves.component';
import { HrmanagerComponent } from './components/hrmanager/hrmanager.component';

export const hrRoutes: Routes = [
    // {
    // path: '',
    // component: HrmanagerLeftSidebarComponent,
    // children: [
      {path:'hrmanager1', component:DashboardComponent},
      {path:'hrmanager2', component:DashboardComponent},
      {path:'hrmanager3', component:DashboardComponent},
      // {
      //   path: 'timesheet',
      //   component: TimesheetComponent, children:timeSheetRoutes
      // },
      // { path: 'leave',
      //  component: LeavesComponent ,children: leaveRoutes},
      // {
      //   path: 'projects',
      //   component: ProjectComponent,
      // },
      // { path: 'events', component: EventsComponent },
      // { path: 'payroll', component: PayrollComponent,
      //  children:[{ path: 'salary', component:SalaryprocessingComponent},
      //            { path: 'salarydetails', component:AllEmployeesComponent}
      // ]},
      // { path: 'performance', component: PerformenceApprisalComponent },
  //   ],
  // },
];

@NgModule({
  declarations: [
    HrmanagerLeftSidebarComponent,
    DashboardComponent,
    LeavesComponent,
    ProjectComponent,
    PayrollComponent,
    EventsComponent,
    PerformenceApprisalComponent,
    TimesheetComponent,
    SalaryprocessingComponent,
    MonthlysalarystructureComponent,
    EmployeedetailsComponent,
    AllEmployeesComponent,
    EmployeeLeavesComponent,
    PaidEmployeeDetailsComponent,
    LeaveDisplayComponent,
    AllEmployeeLeavesComponent,
    LeaveallocationsComponent,
    HrmanagerComponent
  ],
  imports: 
    [
       CommonModule,
        RouterModule,
        ReactiveFormsModule,
        SharedModule,
        FormsModule
  ],
  exports: [
    EmployeedetailsComponent,
    AllEmployeeLeavesComponent,
    SalaryprocessingComponent,
    AllEmployeesComponent,
    HrmanagerComponent],
})
export class HrmanagerModule {}
