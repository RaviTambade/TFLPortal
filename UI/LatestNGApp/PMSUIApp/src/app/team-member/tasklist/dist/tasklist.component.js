"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.TasklistComponent = void 0;
var core_1 = require("@angular/core");
var TasklistComponent = /** @class */ (function () {
    function TasklistComponent(taskService, projectService, employeeService, router) {
        this.taskService = taskService;
        this.projectService = projectService;
        this.employeeService = employeeService;
        this.router = router;
        this.selectedProjectId = null;
        this.taskId = null;
        this.selectedTaskId = null;
        this.selectedDate = '';
        this.tasks = [];
        this.filteredTasks = [];
        this.teamMemberId = 0;
        this.selectedTimePeriod = "today";
    }
    TasklistComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.taskService.selectedTaskId$.subscribe(function (taskId) {
            _this.taskId = taskId;
            var userId = this.authservice.getClaimFromToken(TokenClaims.userId);
            _this.employeeService.getEmployeeId(userId).subscribe(function (res) {
                _this.teamMemberId = res;
                _this.filterMyTasks(_this.selectedTimePeriod);
            });
        });
    };
    TasklistComponent.prototype.filterMyTasks = function (timePeriod) {
        var _this = this;
        this.selectedTimePeriod = timePeriod;
        this.taskService.GetMyTaskList(this.teamMemberId, timePeriod).subscribe(function (res) {
            _this.tasks = res;
            _this.filteredTasks = res;
        });
    };
    TasklistComponent.prototype.selectTask = function (id) {
        {
            if (this.selectedTaskId === id) {
                this.selectedTaskId = null;
            }
            else {
                this.selectedTaskId = id;
            }
            this.taskService.setSelectedTaskId(id);
            console.log(id);
        }
    };
    TasklistComponent.prototype.filterTasksByStatus = function (status) {
        console.log(status);
        if (status === 'All') {
            this.filteredTasks = this.tasks;
        }
        else {
            this.filteredTasks = this.tasks.filter(function (task) { return task.status === status; });
        }
        this.selectedTaskId = null;
        this.taskService.setSelectedTaskId(this.selectedTaskId);
    };
    TasklistComponent.prototype.selectProject = function (id) {
        if (this.selectedProjectId === id) {
            this.selectedProjectId = null;
        }
        else {
            this.selectedProjectId = id;
        }
        this.router.navigate(["teammember/projectdetails"]);
        this.projectService.setSelectedProjectId(id);
    };
    TasklistComponent = __decorate([
        core_1.Component({
            selector: 'app-tasklist',
            templateUrl: './tasklist.component.html',
            styleUrls: ['./tasklist.component.css']
        })
    ], TasklistComponent);
    return TasklistComponent;
}());
exports.TasklistComponent = TasklistComponent;
