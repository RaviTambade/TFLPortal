import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TooltipDirective } from './directives/tooltip.directive';
import { ChunkPipe } from './pipes/chunk.pipe';
import { HourConvertorPipe } from './pipes/hour-convertor.pipe';
import { HighlightDirective } from './directives/highlight.directive';



@NgModule({
  declarations: [TooltipDirective,ChunkPipe, HourConvertorPipe,HighlightDirective],
  imports: [
    CommonModule
  ],
  exports:[TooltipDirective,ChunkPipe,HourConvertorPipe,HighlightDirective]
})
export class SharedModule { }
