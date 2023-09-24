"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.UnassignedtasksbymanagerComponent = void 0;
var core_1 = require("@angular/core");
var UnassignedtasksbymanagerComponent = /** @class */ (function () {
    function UnassignedtasksbymanagerComponent(employeeService, projectService) {
        this.employeeService = employeeService;
        this.projectService = projectService;
        this.unAssignedTasks = [];
        this.selectedTimePeriod = "today";
        this.projectId = 0;
        this.teamManagerId = 0;
        this.projectName = '';
        this.selectedTaskId = null;
    }
    UnassignedtasksbymanagerComponent.prototype.ngOnInit = function () {
        var _this = this;
        var userId = localStorage.getItem('userId');
        this.employeeService.getEmployeeId(Number(userId)).subscribe(function (res) {
            _this.teamManagerId = res;
            _this.getFilteredUnAssignedTasks(_this.selectedTimePeriod);
        });
    };
    UnassignedtasksbymanagerComponent.prototype.getFilteredUnAssignedTasks = function (timePeriod) {
        var _this = this;
        this.selectedTimePeriod = timePeriod;
        this.projectService.unAssignedTasksByManager(this.teamManagerId, timePeriod).subscribe(function (res) {
            _this.unAssignedTasks = res;
        });
    };
    UnassignedtasksbymanagerComponent.prototype.viewDetails = function (taskId) {
        if (this.selectedTaskId === taskId) {
            this.selectedTaskId = null;
        }
        else {
            this.selectedTaskId = taskId;
        }
    };
    UnassignedtasksbymanagerComponent = __decorate([
        core_1.Component({
            selector: 'app-unassignedtasksbymanager',
            templateUrl: './unassignedtasksbymanager.component.html',
            styleUrls: ['./unassignedtasksbymanager.component.css']
        })
    ], UnassignedtasksbymanagerComponent);
    return UnassignedtasksbymanagerComponent;
}());
exports.UnassignedtasksbymanagerComponent = UnassignedtasksbymanagerComponent;
