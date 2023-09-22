"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.TasksofprojectsComponent = void 0;
var core_1 = require("@angular/core");
var TasksofprojectsComponent = /** @class */ (function () {
    function TasksofprojectsComponent(userService, route, projectService, router) {
        this.userService = userService;
        this.route = route;
        this.projectService = projectService;
        this.router = router;
        this.projectNames = [];
        this.projectName = '';
        this.tasks = [];
        this.selectedTimePeriod = "today";
    }
    TasksofprojectsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.projectId = +params['projectId'];
        });
        this.route.queryParams.subscribe(function (queryParams) {
            _this.projectName = queryParams['projectName'] || '';
        });
        this.GetfilteredTasksOfProjects(this.selectedTimePeriod);
    };
    TasksofprojectsComponent.prototype.GetfilteredTasksOfProjects = function (timePeriod) {
        var _this = this;
        this.selectedTimePeriod = timePeriod;
        this.projectService.getTasksOfProject(this.projectId, timePeriod).subscribe(function (res) {
            _this.tasks = res;
            console.log(_this.tasks);
            var distinctTeamMemberUserIds = _this.tasks.map(function (item) { return item.teamMemberUserId; })
                .filter(function (number, index, array) { return array.indexOf(number) === index; });
            console.log(distinctTeamMemberUserIds);
            var teamMemberIdsString = distinctTeamMemberUserIds.join(",");
            _this.userService.getUserNamesWithId(teamMemberIdsString).subscribe(function (res) {
                var teamMemberName = res;
                _this.tasks.forEach(function (item) {
                    var matchingItem = teamMemberName.find(function (element) { return element.id === item.teamMemberUserId; });
                    if (matchingItem != undefined)
                        item.employeeName = matchingItem.name;
                    console.log(matchingItem);
                });
            });
        });
    };
    TasksofprojectsComponent.prototype.viewDetails = function (taskId) {
        if (this.selectedTaskId === taskId) {
            this.selectedTaskId = null;
        }
        else {
            this.selectedTaskId = taskId;
        }
    };
    TasksofprojectsComponent.prototype.onTeamMemberClick = function (employeeId) {
        this.router.navigate(['teammember/employeedetails', employeeId]);
    };
    TasksofprojectsComponent = __decorate([
        core_1.Component({
            selector: 'app-tasksofprojects',
            templateUrl: './tasksofprojects.component.html',
            styleUrls: ['./tasksofprojects.component.css']
        })
    ], TasksofprojectsComponent);
    return TasksofprojectsComponent;
}());
exports.TasksofprojectsComponent = TasksofprojectsComponent;
