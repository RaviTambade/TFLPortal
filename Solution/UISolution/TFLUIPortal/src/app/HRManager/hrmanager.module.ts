import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { Events } from './components/events/events';
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
import { Hrmanager } from './components/hrmanager/hrmanager';
import { Dashboard } from './components/dashboard/dashboard';
import { LeaveApplicationsList } from './components/LeaveMgmt/components/leave-applications-List/LeaveApplicationsList';
import { LeaveDetails} from './components/LeaveMgmt/components/leave-details/leave-details';
import { Leaveallocations } from './components/LeaveMgmt/components/leaveallocations/leaveallocations';
import { SharedModule } from 'src/app/shared/shared.module';
import { EmployeeAvailableLeaves } from './components/LeaveMgmt/components/employee-available-leaves/employee-available-leaves';

export const hrRoutes: Routes = [
      {path:'leaveapplications', component:LeaveApplicationsList},
      {path:'hrmanager2', component:Dashboard},
      {path:'hrmanager3', component:Dashboard}
     
];

@NgModule({
  declarations: [
    LeaveDetails,
    Dashboard,
    Project,
    PayrollComponent,
    Events,
    PerformenceApprisal,
    Salaryprocessing,
    Monthlysalarystructure,
    AllEmployees,
    EmployeeLeaves,
    PaidEmployeeDetails,
    LeaveDisplay,
    LeaveApplicationsList,
    Leaveallocations,
    Hrmanager,
    EmployeeAvailableLeaves
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
    LeaveApplicationsList,
    Salaryprocessing,
    AllEmployees,
    Hrmanager,
    EmployeeAvailableLeaves
  ],
})
export class HrmanagerModule {}
