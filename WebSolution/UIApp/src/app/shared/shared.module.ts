import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TooltipDirective } from './directives/tooltip.directive';
import { ChunkPipe } from './pipes/chunk.pipe';



@NgModule({
  declarations: [TooltipDirective,ChunkPipe],
  imports: [
    CommonModule
  ],
  exports:[TooltipDirective,ChunkPipe]
})
export class SharedModule { }
