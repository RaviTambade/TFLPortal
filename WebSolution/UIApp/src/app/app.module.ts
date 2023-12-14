import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProjectsModule } from './projects/projects.module';
import { HttpClientModule } from '@angular/common/http';
import { TaskModule } from './task/task.module';
import { ResourceManagementModule } from './resource-management/resource-management.module';
import { CalenderComponent } from './calender/calender.component';
import { TimeSheetModule, timeSheetRoutes } from './time-sheet/time-sheet.module';
import { ProjectplanningModule } from './ProjectPlanning/projectplanning/projectplanning.module';
import { ActivityModule } from './activity/activity.module';
import { BiModule } from './bi/bi.module';
import { LeavesModule } from './leaves/leaves.module';
import { JWT_OPTIONS, JwtHelperService } from '@auth0/angular-jwt';
import { LayoutModule } from './layout/layout.module';
import { SharedModule } from './shared/shared.module';



@NgModule({
  declarations: [AppComponent, CalenderComponent],
  imports: [
    BiModule,
    BrowserModule,
    AppRoutingModule,
    // AuthenticationModule,
    ProjectsModule,
    HttpClientModule,
    TaskModule,
    ResourceManagementModule,
    TimeSheetModule,
    ProjectplanningModule,
    LeavesModule,
    LayoutModule,
    SharedModule

  ],

  providers: [
    {
      provide: JWT_OPTIONS,
      useValue: {
        tokenGetter: () => {
          return;
        },
        throwNoTokenError: true,
      },
    },
    JwtHelperService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
