"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.TaskService = void 0;
var core_1 = require("@angular/core");
var rxjs_1 = require("rxjs");
var TaskService = /** @class */ (function () {
    function TaskService(projectService, httpClient) {
        this.projectService = projectService;
        this.httpClient = httpClient;
        this.selectedTaskIdSubject = new rxjs_1.BehaviorSubject(null);
        this.selectedTaskId$ = this.selectedTaskIdSubject.asObservable();
    }
    TaskService.prototype.setSelectedTaskId = function (id) {
        this.selectedTaskIdSubject.next(id);
    };
    TaskService.prototype.GetProjectTaskCount = function (projectId) {
        var url = "http://localhost:5283/api/tasks/count/" + projectId;
        return this.httpClient.get(url);
    };
    TaskService.prototype.GetMyTaskList = function (teamMemberId, timePeriod) {
        var url = "http://localhost:5283/api/tasks/mytasks/" + teamMemberId + "/" + timePeriod;
        return this.httpClient.get(url);
    };
    TaskService.prototype.getTaskDetails = function (taskId) {
        var url = "http://localhost:5283/api/tasks/taskDetail/" + taskId;
        return this.httpClient.get(url);
    };
    TaskService.prototype.getMoreTaskDetails = function (taskId) {
        var url = "http://localhost:5283/api/tasks/moretaskDetail/" + taskId;
        return this.httpClient.get(url);
    };
    TaskService.prototype.getAllTaskList = function (employeeId, timePeriod) {
        var url = "http://localhost:5283/api/tasks/alltasks/" + employeeId + "/" + timePeriod;
        return this.httpClient.get(url);
    };
    TaskService.prototype.getTaskIdWithTitle = function (employeeId, projectId, status) {
        var url = "http://localhost:5283/api/tasks/tasktitle/ " + employeeId + "/" + projectId + "/" + status;
        return this.httpClient.get(url);
    };
    TaskService.prototype.addTask = function (task) {
        var url = "http://localhost:5283/api/tasks/addtask";
        return this.httpClient.post(url, task);
    };
    TaskService.prototype.getTaskDetail = function (taskId) {
        var url = "http://localhost:5283/api/tasks/details/" + taskId;
        return this.httpClient.get(url);
    };
    TaskService.prototype.addAssignedTask = function (assignedTask) {
        var url = "http://localhost:5283/api/AssignedTasks";
        return this.httpClient.post(url, assignedTask);
    };
    TaskService.prototype.updateTaskStatus = function (taskId, status) {
        var url = "http://localhost:5283/api/tasks/status/" + taskId + "/" + status;
        return this.httpClient.patch(url, null);
    };
    TaskService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], TaskService);
    return TaskService;
}());
exports.TaskService = TaskService;
