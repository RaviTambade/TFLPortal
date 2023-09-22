import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { LoginComponent } from './authentication/login/login.component';
import { AuthenticationModule } from './authentication/authentication.module';
import { JWT_OPTIONS, JwtHelperService } from '@auth0/angular-jwt';
import { directorRoutes } from './director/director.module';
import { hrmanagerRoutes } from './hrmanager/hrmanager.module';
import { teammanagerRoutes } from './team-manager/team-manager.module';
import { TeamMemberModule, teammemberRoutes } from './team-member/team-member.module';
import { MenubarComponent } from './menubar/menubar.component';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    CounterComponent,
    FetchDataComponent,
    MenubarComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    AuthenticationModule,
    ReactiveFormsModule,
    CommonModule,
    TeamMemberModule,
    
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'counter', component: CounterComponent },
      { path: 'login', component: LoginComponent },
      {path:'director',children:directorRoutes},
      {path:'hrmanager',children:hrmanagerRoutes},
      {path:'teammanager',children:teammanagerRoutes},
      {path:'teammember',children:teammemberRoutes},
    ])
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
  bootstrap: [AppComponent]
})
export class AppModule { }
