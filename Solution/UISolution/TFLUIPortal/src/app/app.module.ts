import { LocalStorageKeys } from './shared/enums/local-storage-keys';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
 
import { HttpClientModule } from '@angular/common/http';
import { JwtModule } from '@auth0/angular-jwt';
import { AuthenticationModule } from './authentication/authentication.module';
// import { EmployeeModule} from './Employee/employee.module';

import { AppComponent } from './app.component';
import { SPAModule } from './spa/spa.module';
import { HRManagerModule } from './hrmanager/hrmanager.module';
import { ProjectManagerModule } from './projectmanager/project-manager.module';

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
    // EmployeeModule
  ],

  providers: [ ],
  bootstrap: [AppComponent],
})
export class AppModule {
}
