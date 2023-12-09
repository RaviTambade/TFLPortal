import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LinechartComponent } from './linechart/linechart.component';
import { BarchartComponent } from './barchart/barchart.component';
import { PiechartComponent } from './piechart/piechart.component';


@NgModule({
  declarations: [
    LinechartComponent,
    BarchartComponent,
    PiechartComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    LinechartComponent
  ]
})
export class BiModule { }
