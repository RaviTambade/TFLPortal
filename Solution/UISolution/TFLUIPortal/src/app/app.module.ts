import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import {  HttpClientModule } from '@angular/common/http';
import { JwtModule } from '@auth0/angular-jwt';
import { LocalStorageKeys } from './shared/enums/local-storage-keys';
import { AppComponent } from './app.component';

import { HrmanagerModule, hrRoutes } from './UserRoles/Manager/HRManager/hrmanager.module';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './layout/Components/home/home.component';

import { Login } from './authentication/Components/login/login';
import { AuthenticationModule } from './authentication/authentication.module';

import { UserModule } from './UserRoles/SharedModule/user.module';
 import { DirectorModule } from './UserRoles/Director/director.module';
import { ProjectManagerModule, projectManagerRoutes } from './UserRoles/Manager/ProjectManager/project-manager.module';
import { EmployeeModule } from './UserRoles/Employee/employee.module';
import { DirectorComponent } from './UserRoles/Director/components/director/director.component';
import { LayoutModule } from './layout/layout.module';
import { Hrmanager } from './UserRoles/Manager/HRManager/components/hrmanager/hrmanager';
import { UserProfileModule } from './UserProfile/user-profile.module';


@NgModule({
  declarations: [AppComponent],

  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: () => localStorage.getItem(LocalStorageKeys.jwt),
        allowedDomains: ['localhost:5142', 'localhost:5263'],
      },
    }),

    AuthenticationModule,

    HrmanagerModule,

    ProjectManagerModule,
    //UserProfileModule,
    // RouterModule.forRoot(routes),
  ],

  providers: [
  ],

  bootstrap: [AppComponent],
})
export class AppModule {}
