import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
 
import { PayrollComponent } from './components/payroll/payroll';
import { PerformenceApprisal } from './components/performence-apprisal/performence-apprisal';
import { Project } from './components/project/project';
import { Salaryprocessing } from './components/payroll/salaryprocessing/salaryprocessing';
import { Monthlysalarystructure } from './components/payroll/monthlysalarystructure/monthlysalarystructure';
import { AllEmployees} from './components/payroll/all-employees/all-employees';
import { EmployeeLeaves} from './components/payroll/employee-leaves/employee-leaves';
import { PaidEmployeeDetails } from './components/payroll/paid-employee-details/paid-employee-details';
import { LeaveDisplay } from './components/leave-display/leave-display';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HRManagerContainer } from './components/container/hrmanager-container';
import { Dashboard } from './components/dashboard/dashboard';
import { LeaveApplicationsList } from './components/LeaveMgmt/components/leave-applications-List/LeaveApplicationsList';
import { LeaveDetails} from './components/LeaveMgmt/components/leave-details/leave-details';
import { Leaveallocations } from './components/LeaveMgmt/components/leaveallocations/leaveallocations';
import { SharedModule } from 'src/app/shared/shared.module';
import { EmployeeAvailableLeaves } from './components/LeaveMgmt/components/employee-available-leaves/employee-available-leaves';
import { TotalLeave } from './components/LeaveMgmt/components/total-leave/total-leave';

 const hrRoutes: Routes = [
      {path:'leaveapplications', component:LeaveApplicationsList},
      {path:'hrmanager2', component:Dashboard},
      {path:'hrmanager3', component:Dashboard}
     
];

@NgModule({
  declarations: [
    HRManagerContainer,
    Dashboard,
    AllEmployees,
    Project,
    PerformenceApprisal,
    PayrollComponent,
    Salaryprocessing,
    Monthlysalarystructure,
    EmployeeLeaves,
    PaidEmployeeDetails,
    LeaveDetails,
    LeaveDisplay,
    LeaveApplicationsList,
    Leaveallocations,
    EmployeeAvailableLeaves,
    TotalLeave
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
    AllEmployees,
    EmployeeAvailableLeaves,
    LeaveApplicationsList,  
    TotalLeave 
  ],
})
export class HRManagerModule {}
