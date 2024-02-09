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
import { UserModule } from './UserRoles/SharedModule/user.module';
 import { DirectorModule } from './UserRoles/Director/director.module';
import { ProjectManagerModule, projectManagerRoutes } from './UserRoles/Manager/ProjectManager/project-manager.module';
import { LoginComponent } from './authentication/Components/login/login.component';
import { AuthenticationModule } from './authentication/authentication.module';
import { ProjectmanagerComponent } from './UserRoles/Manager/ProjectManager/components/projectmanager/projectmanager.component';
import { EmployeeModule } from './UserRoles/Employee/employee.module';
import { DirectorComponent } from './UserRoles/Director/components/director/director.component';
import { LayoutModule } from './layout/layout.module';
import { HrmanagerComponent } from './UserRoles/Manager/HRManager/components/hrmanager/hrmanager.component';
import { UserProfileModule } from './UserProfile/user-profile.module';

// const routes: Routes = [
//   { path: '', redirectTo: 'home',pathMatch:'full' },
//   { path: 'home', component: HomeComponent },
//   { path: 'employee', component: EmployeeComponent, children:employeeRoutes},
//    { path: 'projectmanager', component: ProjectmanagerComponent, children:projectManagerRoutes},
//   { path: 'hrmanager', component: HrmanagerComponent,children:hrRoutes},
//   { path: 'director', component: DirectorComponent },
//   { path: 'login', component: LoginComponent },
// ];

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
    UserProfileModule,
    // RouterModule.forRoot(routes),
  ],

  providers: [
  ],

  bootstrap: [AppComponent],
})
export class AppModule {}
