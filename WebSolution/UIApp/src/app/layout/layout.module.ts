import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './Components/main/main.component';
import { LeftSidebarComponent } from './Components/left-sidebar/left-sidebar.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    MainComponent,
    LeftSidebarComponent,
    HomeComponent,
  ],
  imports: [CommonModule, RouterModule, SharedModule],
  exports: [MainComponent],
})
export class LayoutModule {}
