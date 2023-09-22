"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.TeamMemberModule = exports.teammemberRoutes = void 0;
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var dashboard_component_1 = require("./dashboard/dashboard.component");
var employeeprojects_component_1 = require("./employeeprojects/employeeprojects.component");
var employeeprojectdetails_component_1 = require("./employeeprojectdetails/employeeprojectdetails.component");
var employeeprojectfilters_component_1 = require("./employeeprojectfilters/employeeprojectfilters.component");
var timesheetlist_component_1 = require("./timesheetlist/timesheetlist.component");
var timesheetdetails_component_1 = require("./timesheetdetails/timesheetdetails.component");
var projectteammembers_component_1 = require("./projectteammembers/projectteammembers.component");
var tasklist_component_1 = require("./tasklist/tasklist.component");
var taskdetails_component_1 = require("./taskdetails/taskdetails.component");
var tasksofprojects_component_1 = require("./tasksofprojects/tasksofprojects.component");
var filteredtasks_component_1 = require("./filteredtasks/filteredtasks.component");
var addtimesheet_component_1 = require("./addtimesheet/addtimesheet.component");
var taskdetailsinfo_component_1 = require("./taskdetailsinfo/taskdetailsinfo.component");
var alltaskslist_component_1 = require("./alltaskslist/alltaskslist.component");
var forms_1 = require("@angular/forms");
var employeedetails_component_1 = require("./employeedetails/employeedetails.component");
exports.teammemberRoutes = [
    { path: 'dashboard', component: dashboard_component_1.DashboardComponent },
    { path: 'projects', component: employeeprojects_component_1.EmployeeprojectsComponent },
    { path: 'projectdetails', component: employeeprojectdetails_component_1.EmployeeprojectdetailsComponent },
    { path: 'timesheets', component: timesheetlist_component_1.TimesheetlistComponent },
    { path: 'mytasks', component: tasklist_component_1.TasklistComponent },
    { path: 'projecttasks/:projectId', component: tasksofprojects_component_1.TasksofprojectsComponent },
    { path: 'alltasks', component: alltaskslist_component_1.AlltaskslistComponent },
    { path: 'employeedetails/:employeeuserid', component: employeedetails_component_1.EmployeedetailsComponent },
    { path: 'timesheetadd', component: addtimesheet_component_1.AddtimesheetComponent }
];
var TeamMemberModule = /** @class */ (function () {
    function TeamMemberModule() {
    }
    TeamMemberModule = __decorate([
        core_1.NgModule({
            declarations: [
                dashboard_component_1.DashboardComponent,
                employeeprojects_component_1.EmployeeprojectsComponent,
                employeeprojectdetails_component_1.EmployeeprojectdetailsComponent,
                employeeprojectfilters_component_1.EmployeeprojectfiltersComponent,
                timesheetlist_component_1.TimesheetlistComponent,
                timesheetdetails_component_1.TimesheetdetailsComponent,
                projectteammembers_component_1.ProjectteammembersComponent,
                tasklist_component_1.TasklistComponent,
                taskdetails_component_1.TaskdetailsComponent,
                tasksofprojects_component_1.TasksofprojectsComponent,
                filteredtasks_component_1.FilteredtasksComponent,
                addtimesheet_component_1.AddtimesheetComponent,
                taskdetailsinfo_component_1.TaskdetailsinfoComponent,
                alltaskslist_component_1.AlltaskslistComponent,
                employeedetails_component_1.EmployeedetailsComponent,
            ],
            imports: [
                common_1.CommonModule,
                forms_1.FormsModule,
                forms_1.ReactiveFormsModule
            ],
            exports: [
                projectteammembers_component_1.ProjectteammembersComponent,
                employeeprojectdetails_component_1.EmployeeprojectdetailsComponent
            ]
        })
    ], TeamMemberModule);
    return TeamMemberModule;
}());
exports.TeamMemberModule = TeamMemberModule;
