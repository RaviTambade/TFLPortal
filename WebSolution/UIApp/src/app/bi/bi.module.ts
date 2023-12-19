import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LinechartComponent } from './linechart/linechart.component';
import { BarchartComponent } from './barchart/barchart.component';
import { PiechartComponent } from './piechart/piechart.component';
import { WeeklyprogreessreviewComponent } from './weeklyprogreessreview/weeklyprogreessreview.component';
import { MonthlyprogressreviewComponent } from './monthlyprogressreview/monthlyprogressreview.component';
import { DailyreviewprogressComponent } from './dailyreviewprogress/dailyreviewprogress.component';
import { ProjectactivitiesPiechartComponent } from './projectactivities-piechart/projectactivities-piechart.component';
import { VerticalBarchartComponent } from './vertical-barchart/vertical-barchart.component';
import { MonthlyLeaveChartComponent } from './monthly-leave-chart/monthly-leave-chart.component';


@NgModule({
  declarations: [
    LinechartComponent,
    BarchartComponent,
    PiechartComponent,
    WeeklyprogreessreviewComponent,
    MonthlyprogressreviewComponent,
    DailyreviewprogressComponent,
    ProjectactivitiesPiechartComponent,
    VerticalBarchartComponent,
    MonthlyLeaveChartComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    LinechartComponent,
    DailyreviewprogressComponent,
    WeeklyprogreessreviewComponent,
    MonthlyprogressreviewComponent,
    ProjectactivitiesPiechartComponent,
    BarchartComponent,
    VerticalBarchartComponent,
    PiechartComponent,
    MonthlyLeaveChartComponent

  ]
})
export class BiModule { }
