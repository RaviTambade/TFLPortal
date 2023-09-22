"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AlltaskslistComponent = void 0;
var core_1 = require("@angular/core");
var AlltaskslistComponent = /** @class */ (function () {
    function AlltaskslistComponent(taskService, projectService, router, employeeService, userService) {
        this.taskService = taskService;
        this.projectService = projectService;
        this.router = router;
        this.employeeService = employeeService;
        this.userService = userService;
        this.selectedProjectId = null;
        this.selectedTaskId = null;
        this.tasks = [];
        this.filteredTasks = [];
        this.employeeId = 0;
        this.selectedTimePeriod = "today";
    }
    AlltaskslistComponent.prototype.ngOnInit = function () {
        var _this = this;
        var userId = localStorage.getItem('userId');
        this.employeeService.getEmployeeId(Number(userId)).subscribe(function (res) {
            _this.employeeId = res;
        });
    };
    AlltaskslistComponent.prototype.filterAllTasks = function (timePeriod) {
        var _this = this;
        this.selectedTimePeriod = timePeriod;
        this.taskService.getAllTaskList(this.employeeId, timePeriod).subscribe(function (res) {
            _this.tasks = res;
            console.log(_this.tasks);
            var distinctTeamMemberUserIds = _this.tasks.map(function (item) { return item.teamMemberUserId; })
                .filter(function (number, index, array) { return array.indexOf(number) === index; });
            console.log(distinctTeamMemberUserIds);
            var teamMemberIdsString = distinctTeamMemberUserIds.join(",");
            _this.userService
                .getUserNamesWithId(teamMemberIdsString)
                .subscribe(function (res) {
                var teamMemberName = res;
                console.log(teamMemberName);
                _this.tasks.forEach(function (item) {
                    var matchingItem = teamMemberName.find(function (element) { return element.id === item.teamMemberUserId; });
                    if (matchingItem != undefined) {
                        item.employeeName = matchingItem.name;
                        item.teamMemberUserId = matchingItem.id;
                        console.log(matchingItem);
                    }
                });
            });
        });
    };
    AlltaskslistComponent.prototype.selectTask = function (id) {
        {
            if (this.selectedTaskId === id) {
                this.selectedTaskId = null;
            }
            else {
                this.selectedTaskId = id;
            }
            this.taskService.setSelectedTaskId(id);
        }
    };
    // filterTasksByStatus(status: string) {
    //   console.log(status)
    //   if (status === 'All') {
    //     this.filteredTasks = this.tasks;
    //   } else {
    //     this.filteredTasks = this.tasks.filter((task) => task.status === status)
    //   }
    //   this.selectedTaskId =null;
    //   this.taskService.setSelectedTaskId(this.selectedTaskId)
    // }
    AlltaskslistComponent.prototype.onTeamMemberClick = function (employeeId) {
        this.router.navigate(['teammember/employeedetails', employeeId]);
    };
    AlltaskslistComponent.prototype.selectProject = function (id) {
        if (this.selectedProjectId === id) {
            this.selectedProjectId = null;
        }
        else {
            this.selectedProjectId = id;
        }
        this.router.navigate(["teammember/projectdetails"]);
        this.projectService.setSelectedProjectId(id);
    };
    AlltaskslistComponent = __decorate([
        core_1.Component({
            selector: 'app-alltaskslist',
            templateUrl: './alltaskslist.component.html',
            styleUrls: ['./alltaskslist.component.css']
        })
    ], AlltaskslistComponent);
    return AlltaskslistComponent;
}());
exports.AlltaskslistComponent = AlltaskslistComponent;
