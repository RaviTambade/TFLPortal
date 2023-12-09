import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LinechartComponent } from './linechart/linechart.component';
import { BarchartComponent } from './barchart/barchart.component';
import { PiechartComponent } from './piechart/piechart.component';
import { WeeklyprogreessreviewComponent } from './weeklyprogreessreview/weeklyprogreessreview.component';
import { MonthlyprogressreviewComponent } from './monthlyprogressreview/monthlyprogressreview.component';
import { DailyreviewprogressComponent } from './dailyreviewprogress/dailyreviewprogress.component';
import { ProjectactivitiesPiechartComponent } from './projectactivities-piechart/projectactivities-piechart.component';


@NgModule({
  declarations: [
    LinechartComponent,
    BarchartComponent,
    PiechartComponent,
    WeeklyprogreessreviewComponent,
    MonthlyprogressreviewComponent,
    DailyreviewprogressComponent,
    ProjectactivitiesPiechartComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    LinechartComponent,
    DailyreviewprogressComponent,
    WeeklyprogreessreviewComponent,
    MonthlyprogressreviewComponent,
    ProjectactivitiesPiechartComponent
  ]
})
export class BiModule { }
