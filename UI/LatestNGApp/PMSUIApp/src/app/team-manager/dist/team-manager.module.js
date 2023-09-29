"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.TeamManagerModule = exports.teammanagerRoutes = void 0;
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var dashboard_component_1 = require("./dashboard/dashboard.component");
var managerprojects_component_1 = require("./managerprojects/managerprojects.component");
var managerprojectfilters_component_1 = require("./managerprojectfilters/managerprojectfilters.component");
var forms_1 = require("@angular/forms");
var filteredtasks_component_1 = require("./filteredtasks/filteredtasks.component");
var addproject_component_1 = require("./addproject/addproject.component");
var updateproject_component_1 = require("./updateproject/updateproject.component");
var addtask_component_1 = require("./addtask/addtask.component");
var updatetask_component_1 = require("./updatetask/updatetask.component");
var employeelist_component_1 = require("./employeelist/employeelist.component");
var addemployee_component_1 = require("./addemployee/addemployee.component");
var team_member_module_1 = require("../team-member/team-member.module");
var tasksofprojects_component_1 = require("../team-member/tasksofprojects/tasksofprojects.component");
var unassignedtasks_component_1 = require("../team-member/unassignedtasks/unassignedtasks.component");
var timesheetlist_component_1 = require("./timesheetlist/timesheetlist.component");
var assignedtasksbymanager_component_1 = require("./assignedtasksbymanager/assignedtasksbymanager.component");
var tasksbymanager_component_1 = require("./tasksbymanager/tasksbymanager.component");
var unassignedtasksbymanager_component_1 = require("./unassignedtasksbymanager/unassignedtasksbymanager.component");
var assigntheunassignedtask_component_1 = require("./assigntheunassignedtask/assigntheunassignedtask.component");
var updatetaskstatus_component_1 = require("./updatetaskstatus/updatetaskstatus.component");
exports.teammanagerRoutes = [
    { path: 'dashboard', component: dashboard_component_1.DashboardComponent },
    { path: 'projects', component: managerprojects_component_1.ManagerprojectsComponent },
    { path: 'projecttasks/:projectId', component: tasksofprojects_component_1.TasksofprojectsComponent },
    { path: 'addproject', component: addproject_component_1.AddprojectComponent },
    { path: 'updateproject/:projectId', component: updateproject_component_1.UpdateprojectComponent },
    { path: 'addtask/:projectId', component: addtask_component_1.AddtaskComponent },
    { path: 'updateproject/:projectId', component: updateproject_component_1.UpdateprojectComponent },
    { path: 'updatetask', component: updatetask_component_1.UpdatetaskComponent },
    { path: 'employeelist', component: employeelist_component_1.EmployeelistComponent },
    { path: 'addemployee', component: addemployee_component_1.AddemployeeComponent },
    { path: 'tasksbymanager', component: tasksbymanager_component_1.TasksbymanagerComponent },
    { path: 'unassignedtasks/:projectId', component: unassignedtasks_component_1.UnassignedtasksComponent },
    { path: 'timesheetlist', component: timesheetlist_component_1.TimesheetlistComponent },
    { path: 'updatestatus/:taskId', component: updatetaskstatus_component_1.UpdatetaskstatusComponent },
    { path: 'assigntask/:taskId', component: assigntheunassignedtask_component_1.AssigntheunassignedtaskComponent }
];
var TeamManagerModule = /** @class */ (function () {
    function TeamManagerModule() {
    }
    TeamManagerModule = __decorate([
        core_1.NgModule({
            declarations: [
                dashboard_component_1.DashboardComponent,
                managerprojects_component_1.ManagerprojectsComponent,
                managerprojectfilters_component_1.ManagerprojectfiltersComponent,
                filteredtasks_component_1.FilteredtasksComponent,
                addproject_component_1.AddprojectComponent,
                updateproject_component_1.UpdateprojectComponent,
                addtask_component_1.AddtaskComponent,
                updatetask_component_1.UpdatetaskComponent,
                employeelist_component_1.EmployeelistComponent,
                addemployee_component_1.AddemployeeComponent,
                timesheetlist_component_1.TimesheetlistComponent,
                assignedtasksbymanager_component_1.AssignedtasksbymanagerComponent,
                tasksbymanager_component_1.TasksbymanagerComponent,
                unassignedtasksbymanager_component_1.UnassignedtasksbymanagerComponent,
                assigntheunassignedtask_component_1.AssigntheunassignedtaskComponent,
                updatetaskstatus_component_1.UpdatetaskstatusComponent
            ],
            imports: [
                common_1.CommonModule,
                forms_1.FormsModule,
                team_member_module_1.TeamMemberModule,
                forms_1.ReactiveFormsModule
            ],
            exports: [
                assigntheunassignedtask_component_1.AssigntheunassignedtaskComponent
            ]
        })
    ], TeamManagerModule);
    return TeamManagerModule;
}());
exports.TeamManagerModule = TeamManagerModule;
