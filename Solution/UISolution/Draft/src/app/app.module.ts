import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { JWT_OPTIONS, JwtHelperService, JwtModule } from '@auth0/angular-jwt';
import { SharedModule } from './shared/shared.module';
import { LocalStorageKeys } from './shared/enums/local-storage-keys';
import { HrmanagerModule } from './hrmanager/hrmanager.module';
import { EmployeeModule } from './employee/employee.module';
import { UserModule } from './user/user.module';



@NgModule({
  declarations: [AppComponent],
  imports: [
    HrmanagerModule,
  ],

  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
