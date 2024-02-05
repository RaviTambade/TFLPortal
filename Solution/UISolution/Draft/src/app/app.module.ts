import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { JWT_OPTIONS, JwtHelperService, JwtModule } from '@auth0/angular-jwt';
import { LocalStorageKeys } from './shared/enums/local-storage-keys';
// import { HrmanagerModule } from './hrmanager/hrmanager.module';
//import { EmployeeModule } from './employee/employee.module';
import { AddJwtHeaderIntreceptor } from './shared/services/Authentication/add-jwt-header.interceptor';
import { LayoutModule } from './layout/layout.module';
import {AuthenticationModule} from './authentication/authentication.module'

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: () => localStorage.getItem(LocalStorageKeys.jwt)
      },
    }),
    //EmployeeModule,
    AuthenticationModule,
    LayoutModule
    // HrmanagerModule,
  ],

  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AddJwtHeaderIntreceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
