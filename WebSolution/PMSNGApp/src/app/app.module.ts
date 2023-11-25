import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProjectsModule } from './projects/projects.module';
import { HttpClientModule } from '@angular/common/http';
import { TaskModule } from './task/task.module';
import { ResourceManagementModule } from './resource-management/resource-management.module';
import { CalenderComponent } from './calender/calender.component';
import { ChunkPipe } from './calender/chunk.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CalenderComponent,
    ChunkPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ProjectsModule,
    HttpClientModule,
    TaskModule,ResourceManagementModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
