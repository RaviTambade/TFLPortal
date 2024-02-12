import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
 import { DirectorContainer } from './components/container/director-container';
  
@NgModule({
  declarations: [ DirectorContainer ],
  imports: [ CommonModule,RouterModule],
  exports:[DirectorContainer]
})
export class DirectorModule { }