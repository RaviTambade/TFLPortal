import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MembersComponent } from './members/members.component';
import { ManagerviewModule } from './managerview/managerview.module';
import { ProjectstatusModule } from './managerview/chart/projectstatus/projectstatus.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { AuthenticationModule } from './authentication/authentication.module';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ApplicationRoutingComponent } from './application-routing/application-routing.component';
import { EmployeeModule } from './employee/employee.module';
import { ManagerModule } from './manager/manager.module';
import { DefaultModule } from './default/default.module';


@NgModule({
  declarations: [
    AppComponent,
    MembersComponent,
    NavbarComponent,
    SidebarComponent,
    ApplicationRoutingComponent,

  ],
  imports: [
    AppRoutingModule,
    ManagerviewModule,
    ProjectstatusModule,
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    AuthenticationModule,
    EmployeeModule,
    ManagerModule,
    DefaultModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
