import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './Components/main/main.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    MainComponent,
    HomeComponent,
  ],
  imports: [CommonModule, RouterModule, SharedModule],
  exports: [MainComponent,HomeComponent],
})
export class LayoutModule {}
