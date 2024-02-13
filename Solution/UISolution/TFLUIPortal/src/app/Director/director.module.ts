import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
 import { DirectorContainer } from './components/container/director-container';
  
 const directorRoutes:Routes=[
  {path:'',component:DirectorContainer}
 ]

@NgModule({
  declarations: [ DirectorContainer ],
  imports: [ CommonModule,RouterModule.forChild(directorRoutes)],
  exports:[DirectorContainer]
})
export class DirectorModule { }