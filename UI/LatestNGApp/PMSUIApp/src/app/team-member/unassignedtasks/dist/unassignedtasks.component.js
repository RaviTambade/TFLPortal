"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.UnassignedtasksComponent = void 0;
var core_1 = require("@angular/core");
var UnassignedtasksComponent = /** @class */ (function () {
    function UnassignedtasksComponent(projectService, route) {
        this.projectService = projectService;
        this.route = route;
        this.unAssignedTasks = [];
        this.selectedTimePeriod = "today";
        this.projectId = 0;
        this.projectName = '';
        this.selectedTaskId = null;
    }
    UnassignedtasksComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.projectId = +params['projectId'];
        });
        this.route.queryParams.subscribe(function (queryParams) {
            _this.projectName = queryParams['projectName'] || '';
        });
        this.GetfilteredTasksOfProjects(this.selectedTimePeriod);
    };
    UnassignedtasksComponent.prototype.GetfilteredTasksOfProjects = function (timePeriod) {
        var _this = this;
        this.selectedTimePeriod = timePeriod;
        this.projectService.unAssignedTask(this.projectId, timePeriod).subscribe(function (res) {
            _this.unAssignedTasks = res;
        });
    };
    UnassignedtasksComponent.prototype.viewDetails = function (taskId) {
        if (this.selectedTaskId === taskId) {
            this.selectedTaskId = null;
        }
        else {
            this.selectedTaskId = taskId;
        }
    };
    UnassignedtasksComponent.prototype.clearUnassignedTasks = function () {
        this.unAssignedTasks = [];
    };
    UnassignedtasksComponent = __decorate([
        core_1.Component({
            selector: 'app-unassignedtasks',
            templateUrl: './unassignedtasks.component.html',
            styleUrls: ['./unassignedtasks.component.css']
        })
    ], UnassignedtasksComponent);
    return UnassignedtasksComponent;
}());
exports.UnassignedtasksComponent = UnassignedtasksComponent;
