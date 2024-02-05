import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AddJwtHeaderIntreceptor } from './shared/services/Authentication/add-jwt-header.interceptor';
import { LayoutModule } from './layout/layout.module';
import {AuthenticationModule} from './authentication/authentication.module'
import { UserModule } from './user/user.module';
import { JwtModule } from '@auth0/angular-jwt';
import { LocalStorageKeys } from './shared/enums/local-storage-keys';
import { AppComponent } from './app.component';
import { EmployeeModule } from './Employee/employee.module';


// import { HrmanagerModule } from './hrmanager/hrmanager.module';
@NgModule({
  declarations: [AppComponent],

  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    JwtModule.forRoot({
      config:{
        tokenGetter:()=>localStorage.getItem(LocalStorageKeys.jwt),
        allowedDomains:["localhost:5142","localhost:5263"]
      }
    }),
    EmployeeModule,
    AuthenticationModule,
    LayoutModule,
    UserModule
    // HrmanagerModule,
  ],

  providers: [
    // { provide: HTTP_INTERCEPTORS, useClass: AddJwtHeaderIntreceptor,  multi: true },
  ],

  bootstrap: [AppComponent],
})
export class AppModule {}