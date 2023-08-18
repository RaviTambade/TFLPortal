import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { YearlystatusComponent } from './yearlystatus/yearlystatus.component';



@NgModule({
  declarations: [
    YearlystatusComponent
  ],
  imports: [
    CommonModule
  ],
  exports :[
    YearlystatusComponent
  ]
})
export class ProjectstatusModule { }
