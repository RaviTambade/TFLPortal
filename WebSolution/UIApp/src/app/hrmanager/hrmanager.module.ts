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
import { timeSheetRoutes } from '../time-sheet/time-sheet.module';
import { HRRouteGaurd } from './Gaurds/gaurd';
import { leaveRoutes } from '../leaves/leaves.module';
import { SalaryprocessingComponent } from './components/payroll/salaryprocessing/salaryprocessing.component';
import { MonthlysalarystructureComponent } from './components/payroll/monthlysalarystructure/monthlysalarystructure.component';
import { EmployeedetailsComponent } from './components/payroll/employeedetails/employeedetails.component';
import { FormsModule } from '@angular/forms';
import { AllEmployeesComponent } from './components/payroll/all-employees/all-employees.component';

export const hrRoutes: Routes = [
  {
    path: '',
    component: HrmanagerLeftSidebarComponent,
    children: [
      {path:'dashboard', component:DashboardComponent},
      {
        path: 'timesheet',
        component: TimesheetComponent, children:timeSheetRoutes
      },
      { path: 'leave',
       component: LeavesComponent ,children: leaveRoutes},
      {
        path: 'projects',
        component: ProjectComponent,
      },
      { path: 'events', component: EventsComponent },
      { path: 'payroll', component: PayrollComponent,
       children:[{ path: 'salary', component:SalaryprocessingComponent},
                 { path: 'salarydetails', component:AllEmployeesComponent}
      ]},
      { path: 'performance', component: PerformenceApprisalComponent },
    ],
  },
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
  ],
  imports: [CommonModule, RouterModule,FormsModule],
  exports: [EmployeedetailsComponent,SalaryprocessingComponent,AllEmployeesComponent],
})
export class HrmanagerModule {}
