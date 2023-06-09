import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProjectListComponent } from './project-list/project-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { MembersComponent } from './members/members.component';
import { ProjectgridComponent } from './projectgrid/projectgrid.component';
import { PaginationComponent } from './pagination/pagination.component';
import { SortedListComponent } from './sorted-list/sorted-list.component';

@NgModule({
  declarations: [
    AppComponent,
    ProjectListComponent,
    MembersComponent,
    ProjectgridComponent,
    PaginationComponent,
    SortedListComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
