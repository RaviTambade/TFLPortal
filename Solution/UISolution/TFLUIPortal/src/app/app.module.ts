import { LocalStorageKeys } from './shared/enums/local-storage-keys';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
 
import { HttpClientModule } from '@angular/common/http';
import { JwtModule } from '@auth0/angular-jwt';
import { AuthenticationModule } from './authentication/authentication.module';
import { EmployeeModule, employeeRoutes } from './Employee/employee.module';
import { HRManagerModule } from './HRManager/hrmanager.module';
import { ProjectManagerModule } from './ProjectManager/project-manager.module';

import { AppComponent } from './app.component';
import { SPAModule } from './SPA/spa.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    SPAModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: () => localStorage.getItem(LocalStorageKeys.jwt),
        allowedDomains: ['localhost:5142', 'localhost:5263'],
      },
    }),
    AuthenticationModule,
    HRManagerModule,
    ProjectManagerModule,
    EmployeeModule
  ],

  providers: [ ],
  bootstrap: [AppComponent],
})
export class AppModule {
}
