import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectManagerLeftSidebarComponent } from './components/project-manager-left-sidebar/project-manager-left-sidebar.component';
import { Routes, RouterModule } from '@angular/router';
import { EventsComponent } from './components/events/events.component';
import { LeavesComponent } from './components/leaves/leaves.component';
import { PayrollComponent } from './components/payroll/payroll.component';
import { PerformenceApprisalComponent } from './components/performence-apprisal/performence-apprisal.component';
import { ProjectComponent } from './components/project/project.component';
import { TimesheetComponent } from './components/timesheet/timesheet.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AddActivityComponent } from '../activity/Components/Forms/add-activity/add-activity.component';
import { AddsprintComponent } from './components/addsprint/addsprint.component';
import { CreateemployeeworkComponent } from '../activity/Components/Forms/createemployeework/createemployeework.component';
import { ProjectListComponent } from './components/project-list/project-list.component';
import { ProjectdetailsComponent } from './components/project-list/projectdetails/projectdetails.component';
import { EmployeeProjectWorksComponent } from './components/employee-project-works/employee-project-works.component';
import { EmployeeprojectworkdetailsComponent } from './components/employee-project-works/employeeprojectworkdetails/employeeprojectworkdetails.component';
import { ProjectWorkChartComponent } from './components/project-work-chart/project-work-chart.component';
import { TimeSheetModule } from '../time-sheet/time-sheet.module';
import { MembersdetailsComponent } from './components/membersdetails/membersdetails.component';
import { SprintListComponent } from './components/sprint-list/sprint-list.component';
import { SprintDetailsComponent } from './components/sprint-details/sprint-details.component';
import { MembersListComponent } from './components/members-list/members-list.component';

export const projectManagerRoutes: Routes = [
  {
    path: '',
    component: ProjectManagerLeftSidebarComponent,
    children: [
      {path:'dashboard', component:DashboardComponent},

      {
        path: 'timesheet',
        component: TimesheetComponent,
      },
      { path: 'leave', component: LeavesComponent },
      {
        path: 'projects',
        component: ProjectComponent,children:[{path:'',pathMatch:'full',redirectTo:'Projects'},
                                              {path:'Projects',component:ProjectListComponent},
                                              {path:'memberdetails/:employeeId/:projectId',component:MembersdetailsComponent},
                                              {path:'projectdetails/:id',component:ProjectdetailsComponent,children:[{path:'showdetails/:id',component:EmployeeProjectWorksComponent,children:[{path:'details/:id' ,component:EmployeeprojectworkdetailsComponent}]}]}
      ],
      },
      { path: 'events', component: EventsComponent },
      { path: 'payroll', component: PayrollComponent },
      { path: 'performance', component: PerformenceApprisalComponent },
    ],
  },
];

@NgModule({
  declarations: [
    DashboardComponent,
    ProjectManagerLeftSidebarComponent,
    LeavesComponent,
    ProjectComponent,
    PayrollComponent,
    EventsComponent,
    PerformenceApprisalComponent,
    TimesheetComponent,
    AddsprintComponent,
    ProjectListComponent,
    ProjectdetailsComponent,
    EmployeeProjectWorksComponent,
    EmployeeprojectworkdetailsComponent,
    ProjectWorkChartComponent,
    MembersdetailsComponent,
    SprintListComponent,
    SprintDetailsComponent,
    MembersListComponent
  ],
  imports: [CommonModule, RouterModule,TimeSheetModule],
})
export class ProjectManagerModule {}
