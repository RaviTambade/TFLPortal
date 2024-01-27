import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TooltipDirective } from './directives/tooltip.directive';
import { ChunkPipe } from './pipes/chunk.pipe';
import { HourConvertorPipe } from './pipes/hour-convertor.pipe';
import { HighlightDirective } from './directives/highlight.directive';
import { PaginationComponent } from './components/pagination/pagination.component';

@NgModule({
  declarations: [
    TooltipDirective,
    ChunkPipe,
    HourConvertorPipe,
    HighlightDirective,
    PaginationComponent,
  ],
  imports: [CommonModule],
  exports: [TooltipDirective, ChunkPipe, HourConvertorPipe, HighlightDirective,PaginationComponent],
})
export class SharedModule {}
