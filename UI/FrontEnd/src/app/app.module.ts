import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MembersComponent } from './members/members.component';
import { ManagerviewModule } from './managerview/managerview.module';
import { ProjectstatusModule } from './managerview/chart/projectstatus/projectstatus.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    MembersComponent
  ],
  imports: [
    AppRoutingModule,
    ManagerviewModule,
    ProjectstatusModule,
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
     HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
