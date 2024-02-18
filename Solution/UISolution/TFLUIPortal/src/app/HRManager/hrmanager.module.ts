import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
 
import { PayrollComponent } from './components/payroll/payroll';
import { PerformenceApprisal } from './components/performence-apprisal/performence-apprisal';
import { Project } from './components/project/project';
import { Salaryprocessing } from './components/payroll/salaryprocessing/salaryprocessing';
import { Monthlysalarystructure } from './components/payroll/monthlysalarystructure/monthlysalarystructure';
import { EmployeeLeaves} from './components/payroll/employee-leaves/employee-leaves';
import { LeaveDisplay } from './components/leave-display/leave-display';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HRManagerContainer } from './components/container/hrmanager-container';
import { Dashboard } from './components/dashboard/dashboard';
import { LeaveApplicationsList } from './components/LeaveMgmt/leave-applications-List/LeaveApplicationsList';
import { LeaveDetails} from './components/LeaveMgmt/leave-details/leave-details';
import { Leaveallocations } from './components/LeaveMgmt/leaveallocations/leaveallocations';
import { SharedModule } from 'src/app/shared/shared.module';
import { EmployeeAvailableLeaves } from './components/LeaveMgmt/employee-available-leaves/employee-available-leaves';
import { TotalLeave } from './components/LeaveMgmt/total-leave/total-leave';
import { TodaysLeaveApplications } from './components/LeaveMgmt/todays-leave-applications/todays-leave-applications';
import { PaidEmployees } from './components/payroll/paid-employees/paid-employees';

 const hrRoutes: Routes = [
      {path:'', component:HRManagerContainer},
     
];

@NgModule({
  declarations: [
    HRManagerContainer,
    Dashboard,
    PaidEmployees,
    Project,
    PerformenceApprisal,
    PayrollComponent,
    Salaryprocessing,
    Monthlysalarystructure,
    EmployeeLeaves,
    LeaveDetails,
    LeaveDisplay,
    LeaveApplicationsList,
    Leaveallocations,
    EmployeeAvailableLeaves,
    TotalLeave,
    TodaysLeaveApplications,
  ],
  imports: 
    [
        CommonModule,
        RouterModule.forChild(hrRoutes),
        FormsModule,
        ReactiveFormsModule,
        SharedModule
    ],
  exports: [
    HRManagerContainer,
    Salaryprocessing,
    PaidEmployees,
    EmployeeAvailableLeaves,
    LeaveApplicationsList,  
    TotalLeave,
    TodaysLeaveApplications,
  ],
})
export class HRManagerModule {}
