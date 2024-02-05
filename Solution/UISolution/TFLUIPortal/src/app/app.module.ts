import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AddJwtHeaderIntreceptor } from './shared/services/Authentication/add-jwt-header.interceptor';
import { LayoutModule } from './layout/layout.module';
import {AuthenticationModule} from './authentication/authentication.module'

import { AppComponent } from './app.component';

// import { HrmanagerModule } from './hrmanager/hrmanager.module';
//import { EmployeeModule } from './employee/employee.module';
@NgModule({
  declarations: [AppComponent],

  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    
    //EmployeeModule,
    AuthenticationModule,
    LayoutModule
    // HrmanagerModule,
  ],

  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AddJwtHeaderIntreceptor,  multi: true },
  ],

  bootstrap: [AppComponent],
})
export class AppModule {}