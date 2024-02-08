import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TooltipDirective } from './directives/tooltip.directive';
import { HourConvertorPipe } from './pipes/hour-convertor.pipe';
import { HighlightDirective } from './directives/highlight.directive';
import { PaginationComponent } from './components/pagination/pagination.component';

@NgModule({
  declarations: [
    TooltipDirective,
    HourConvertorPipe,
    HighlightDirective,
    PaginationComponent,
  ],
  imports: [CommonModule],
  exports: [TooltipDirective, HourConvertorPipe, HighlightDirective,PaginationComponent],
})
export class SharedModule {}
