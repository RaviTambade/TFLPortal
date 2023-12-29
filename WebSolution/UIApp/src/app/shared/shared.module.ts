import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TooltipDirective } from './directives/tooltip.directive';
import { ChunkPipe } from './pipes/chunk.pipe';
import { HourConvertorPipe } from './pipes/hour-convertor.pipe';



@NgModule({
  declarations: [TooltipDirective,ChunkPipe, HourConvertorPipe],
  imports: [
    CommonModule
  ],
  exports:[TooltipDirective,ChunkPipe,HourConvertorPipe]
})
export class SharedModule { }
