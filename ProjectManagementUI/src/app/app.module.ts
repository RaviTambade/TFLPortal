import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';
import { NavbarModule } from './shared/navbar/navbar.module';
import { FooterModule } from './shared/footer/footer.module';
import { SidebarModule } from './sidebar/sidebar.module';
import { AppComponent } from './app.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HRModuleModule } from './hrmodule/hrmodule.module';
import { DatePipe } from '@angular/common';
import { ProjecttestModule } from './projecttest/projecttest.module';
import { ProjectlistComponent } from './projecttest/projectlist/projectlist.component';
import { takeLast } from 'rxjs';
import { InsertTaskComponent } from './task/insert-task/insert-task.component';
import { TaskModule } from './task/task.module';
import { FormsModule } from '@angular/forms';





@NgModule({
  imports: [
    BrowserAnimationsModule,
    RouterModule,
    HttpClientModule,
    NavbarModule,
    FooterModule,
    SidebarModule,
    AppRoutingModule,
    HRModuleModule,
    ProjecttestModule,
    TaskModule,
    FormsModule
   
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    LoginComponent,
    RegisterComponent,
   
 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
