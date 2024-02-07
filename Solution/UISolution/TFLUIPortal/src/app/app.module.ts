import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AddJwtHeaderIntreceptor } from './shared/services/Authentication/add-jwt-header.interceptor';
import { LayoutModule } from './layout/layout.module';
import { AuthenticationModule } from './authentication/authentication.module';
import { UserModule } from './user/user.module';
import { JwtModule } from '@auth0/angular-jwt';
import { LocalStorageKeys } from './shared/enums/local-storage-keys';
import { AppComponent } from './app.component';
import { HrmanagerModule, hrRoutes } from './HRManager/hrmanager.module';
import { EmployeeModule, employeeRoutes } from './Employee/employee.module';
import { DirectorModule } from './Director/director.module';
import { ProjectManagerModule, hrManagerRoutes } from './ProjectManager/project-manager.module';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeComponent } from './Employee/components/employee/employee.component';
import { ProjectmanagerComponent } from './ProjectManager/components/projectmanager/projectmanager.component';
import { HrmanagerComponent } from './HRManager/components/hrmanager/hrmanager.component';
import { DirectorComponent } from './Director/components/director/director.component';
import { LoginComponent } from './authentication/Components/login/login.component';
import { HomeComponent } from './layout/Components/home/home.component';

const routes: Routes = [
  { path: '', redirectTo: 'home',pathMatch:'full' },
  { path: 'home', component: HomeComponent },
  { path: 'employee', component: EmployeeComponent },
  { path: 'projectmanager', children:hrManagerRoutes },
  { path: 'employee', component: EmployeeComponent, children:employeeRoutes},
  { path: 'projectmanager', component: ProjectmanagerComponent },
  { path: 'hrmanager', component: HrmanagerComponent,children:hrRoutes},
  { path: 'director', component: DirectorComponent },
  { path: 'login', component: LoginComponent },
];

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
    EmployeeModule,
    AuthenticationModule,
    LayoutModule,
    UserModule,
    HrmanagerModule,
    DirectorModule,
    ProjectManagerModule,
    RouterModule.forRoot(routes),
  ],

  providers: [
    // { provide: HTTP_INTERCEPTORS, useClass: AddJwtHeaderIntreceptor,  multi: true },
  ],

  bootstrap: [AppComponent],
})
export class AppModule {}
