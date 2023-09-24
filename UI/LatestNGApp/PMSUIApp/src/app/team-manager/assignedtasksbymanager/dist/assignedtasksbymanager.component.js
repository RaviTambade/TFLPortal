"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AssignedtasksbymanagerComponent = void 0;
var core_1 = require("@angular/core");
var AssignedtasksbymanagerComponent = /** @class */ (function () {
    function AssignedtasksbymanagerComponent(employeeService, projectService, userService) {
        this.employeeService = employeeService;
        this.projectService = projectService;
        this.userService = userService;
        this.assignedTasks = [];
        this.selectedTimePeriod = "today";
        this.projectId = 0;
        this.teamManagerId = 0;
        this.projectName = '';
        this.selectedTaskId = null;
    }
    AssignedtasksbymanagerComponent.prototype.ngOnInit = function () {
        var _this = this;
        var userId = localStorage.getItem('userId');
        this.employeeService.getEmployeeId(Number(userId)).subscribe(function (res) {
            _this.teamManagerId = res;
            _this.getFilteredAssignedTasks(_this.selectedTimePeriod);
        });
    };
    AssignedtasksbymanagerComponent.prototype.getFilteredAssignedTasks = function (timePeriod) {
        var _this = this;
        this.selectedTimePeriod = timePeriod;
        this.projectService.assignedTasksByManager(this.teamManagerId, timePeriod).subscribe(function (res) {
            _this.assignedTasks = res;
            var distinctTeamMemberUserIds = _this.assignedTasks
                .map(function (item) { return item.teamMemberUserId; })
                .filter(function (number, index, array) { return array.indexOf(number) === index; });
            console.log(distinctTeamMemberUserIds);
            var teamMemberUserIdString = distinctTeamMemberUserIds.join(',');
            _this.userService
                .getUserNamesWithId(teamMemberUserIdString)
                .subscribe(function (res) {
                var teamMemberName = res;
                console.log(teamMemberName);
                _this.assignedTasks.forEach(function (item) {
                    var matchingItem = teamMemberName.find(function (element) { return element.id === item.teamMemberUserId; });
                    if (matchingItem != undefined)
                        item.teamMember = matchingItem.name;
                    console.log(matchingItem);
                });
            });
        });
    };
    AssignedtasksbymanagerComponent.prototype.viewDetails = function (taskId) {
        if (this.selectedTaskId === taskId) {
            this.selectedTaskId = null;
        }
        else {
            this.selectedTaskId = taskId;
        }
    };
    AssignedtasksbymanagerComponent = __decorate([
        core_1.Component({
            selector: 'app-assignedtasksbymanager',
            templateUrl: './assignedtasksbymanager.component.html',
            styleUrls: ['./assignedtasksbymanager.component.css']
        })
    ], AssignedtasksbymanagerComponent);
    return AssignedtasksbymanagerComponent;
}());
exports.AssignedtasksbymanagerComponent = AssignedtasksbymanagerComponent;
