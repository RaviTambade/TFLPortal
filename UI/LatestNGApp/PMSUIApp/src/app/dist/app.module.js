"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppModule = void 0;
var platform_browser_1 = require("@angular/platform-browser");
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/common/http");
var router_1 = require("@angular/router");
var app_component_1 = require("./app.component");
var nav_menu_component_1 = require("./nav-menu/nav-menu.component");
var home_component_1 = require("./home/home.component");
var counter_component_1 = require("./counter/counter.component");
var fetch_data_component_1 = require("./fetch-data/fetch-data.component");
var login_component_1 = require("./authentication/login/login.component");
var authentication_module_1 = require("./authentication/authentication.module");
var angular_jwt_1 = require("@auth0/angular-jwt");
var director_module_1 = require("./director/director.module");
var hrmanager_module_1 = require("./hrmanager/hrmanager.module");
var team_manager_module_1 = require("./team-manager/team-manager.module");
var team_member_module_1 = require("./team-member/team-member.module");
var menubar_component_1 = require("./menubar/menubar.component");
var common_1 = require("@angular/common");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                nav_menu_component_1.NavMenuComponent,
                home_component_1.HomeComponent,
                counter_component_1.CounterComponent,
                fetch_data_component_1.FetchDataComponent,
                menubar_component_1.MenubarComponent
            ],
            imports: [
                platform_browser_1.BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
                http_1.HttpClientModule,
                forms_1.FormsModule,
                authentication_module_1.AuthenticationModule,
                forms_1.ReactiveFormsModule,
                common_1.CommonModule,
                team_member_module_1.TeamMemberModule,
                router_1.RouterModule.forRoot([
                    { path: '', component: home_component_1.HomeComponent, pathMatch: 'full' },
                    { path: 'counter', component: counter_component_1.CounterComponent },
                    { path: 'login', component: login_component_1.LoginComponent },
                    { path: 'director', children: director_module_1.directorRoutes },
                    { path: 'hrmanager', children: hrmanager_module_1.hrmanagerRoutes },
                    { path: 'teammanager', children: team_manager_module_1.teammanagerRoutes },
                    { path: 'teammember', children: team_member_module_1.teammemberRoutes },
                ])
            ],
            providers: [
                {
                    provide: angular_jwt_1.JWT_OPTIONS,
                    useValue: {
                        tokenGetter: function () {
                            return;
                        },
                        throwNoTokenError: true
                    }
                },
                angular_jwt_1.JwtHelperService,
            ],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
