import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { EventsComponent } from './components/events/events.component';
import { PayrollComponent } from './components/payroll/payroll.component';
import { PerformenceApprisalComponent } from './components/performence-apprisal/performence-apprisal.component';
import { ProjectComponent } from './components/project/project.component';
import { SalaryprocessingComponent } from './components/payroll/salaryprocessing/salaryprocessing.component';
import { MonthlysalarystructureComponent } from './components/payroll/monthlysalarystructure/monthlysalarystructure.component';
import { AllEmployeesComponent } from './components/payroll/all-employees/all-employees.component';
import { EmployeeLeavesComponent } from './components/payroll/employee-leaves/employee-leaves.component';
import { PaidEmployeeDetailsComponent } from './components/payroll/paid-employee-details/paid-employee-details.component';
import { LeaveDisplayComponent } from './components/leave-display/leave-display.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HrmanagerComponent } from './components/hrmanager/hrmanager.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AllEmployeeLeavesComponent } from './components/LeaveMgmt/components/all-employee-leaves/all-employee-leaves.component';
import { LeaveDetailsComponent } from './components/LeaveMgmt/components/leave-details/leave-details.component';
import { LeaveallocationsComponent } from './components/LeaveMgmt/components/leaveallocations/leaveallocations.component';
import { SharedModule } from 'src/app/shared/shared.module';

export const hrRoutes: Routes = [
      // {path:'', component:HrmanagerComponent},
      {path:'leaveapplications', component:AllEmployeeLeavesComponent},
      {path:'hrmanager2', component:DashboardComponent},
      {path:'hrmanager3', component:DashboardComponent},
    // {
    // path: '',
    // component: HrmanagerLeftSidebarComponent,
    // children: [
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
    LeaveDetailsComponent,
    DashboardComponent,
    ProjectComponent,
    PayrollComponent,
    EventsComponent,
    PerformenceApprisalComponent,
    SalaryprocessingComponent,
    MonthlysalarystructureComponent,
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
    AllEmployeeLeavesComponent,
    SalaryprocessingComponent,
    AllEmployeesComponent,
    LeaveDetailsComponent,
    HrmanagerComponent],
})
export class HrmanagerModule {}
