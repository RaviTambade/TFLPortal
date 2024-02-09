import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import {  HttpClientModule } from '@angular/common/http';
import { JwtModule } from '@auth0/angular-jwt';
import { LocalStorageKeys } from './shared/enums/local-storage-keys';
import { AppComponent } from './app.component';

import { RouterModule, Routes } from '@angular/router';


import { Login } from './authentication/Components/login/login';
import { AuthenticationModule } from './authentication/authentication.module';
import { Director } from './Director/components/director/director';
import { EmployeeModule } from './Employee/employee.module';
import { Hrmanager } from './HRManager/components/hrmanager/hrmanager';
import { hrRoutes, HrmanagerModule } from './HRManager/hrmanager.module';
import { Projectmanager } from './ProjectManager/components/projectmanager/projectmanager';
import { projectManagerRoutes, ProjectManagerModule } from './ProjectManager/project-manager.module';



 
const routes: Routes = [
  { path: 'projectmanager', component: Projectmanager, children:projectManagerRoutes},
  { path: 'hrmanager', component: Hrmanager,children:hrRoutes},
   { path: 'director', component: Director },
  { path: 'login', component: Login },
 ];



@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    JwtModule.forRoot({
      config: {
        tokenGetter: () => localStorage.getItem(LocalStorageKeys.jwt),
        allowedDomains: ['localhost:5142', 'localhost:5263'],
      },
    }),

    AuthenticationModule,
    HrmanagerModule,
    ProjectManagerModule,
    EmployeeModule
  ],

  providers: [
  ],

  bootstrap: [AppComponent],
})
export class AppModule {


  




}
