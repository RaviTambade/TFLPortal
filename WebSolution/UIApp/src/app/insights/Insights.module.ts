import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';
import { HomeComponent } from './home/home.component';

import { RouterModule, Routes } from '@angular/router';
import { TimesheetComponent } from './timesheet/timesheet.component';
import { ProjectsComponent } from './projects/projects.component';
import { ActivitiesComponent } from './activities/activities.component';
import { AnalyticasComponent } from './timesheet/analyticas/analyticas.component';
import { ViewComponent } from './timesheet/view/view.component';
import { CalenderComponent } from './timesheet/calender/calender.component';
import { ChunkPipe } from './timesheet/calender/chunk.pipe';
import { TooltipDirective } from './timesheet/calender/tooltip.directive';
import { ListComponent } from './timesheet/view/list/list.component';
import { DetailsComponent } from './timesheet/view/details/details.component';
import { UpdateTimesheetComponent } from './timesheet/view/update-timesheet/update-timesheet.component';
import { ChartComponent } from './timesheet/view/chart/chart.component';
import { BarchartComponent } from './timesheet/view/barchart/barchart.component';
import { WorkDurationComponent } from './timesheet/view/work-duration/work-duration.component';
import { FormsModule } from '@angular/forms';
import { HrComponent } from './hr/hr.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent },

  {
    path: 'timesheet',
    component: TimesheetComponent,
    children: [
      {
        path: 'view',
        component: ViewComponent,
        children: [
          { path: 'update', component: UpdateTimesheetComponent },
          { path: 'chart', component: ChartComponent },
        ],
      },

      { path: 'analytics', component: AnalyticasComponent },
    ],
  },
  { path: 'projects', component: ProjectsComponent },
  { path: 'activities', component: ActivitiesComponent },
  { path: 'hr', component: HrComponent },
];

@NgModule({
  declarations: [
    MainComponent,
    HomeComponent,
    TimesheetComponent,
    ProjectsComponent,
    ActivitiesComponent,
    AnalyticasComponent,
    ViewComponent,
    CalenderComponent,
    ChunkPipe,
    TooltipDirective,
    ListComponent,
    DetailsComponent,
    UpdateTimesheetComponent,
    BarchartComponent,
    WorkDurationComponent,
    HrComponent
  ],
  imports: [CommonModule,
    FormsModule,
    
     RouterModule.forRoot(routes)],
  exports: [MainComponent],
})
export class InsightsModule {}
