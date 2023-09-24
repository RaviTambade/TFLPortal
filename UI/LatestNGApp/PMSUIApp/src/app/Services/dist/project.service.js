"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ProjectService = void 0;
var core_1 = require("@angular/core");
var rxjs_1 = require("rxjs");
var ProjectService = /** @class */ (function () {
    function ProjectService(httpClient) {
        this.httpClient = httpClient;
        this.selectedProjectIdSubject = new rxjs_1.BehaviorSubject(null);
        this.selectedProjectId$ = this.selectedProjectIdSubject.asObservable();
    }
    ProjectService.prototype.setSelectedProjectId = function (id) {
        this.selectedProjectIdSubject.next(id);
    };
    ProjectService.prototype.getProjectsList = function (teamMemberId) {
        var url = "http://localhost:5248/api/projects/list/" + teamMemberId;
        return this.httpClient.get(url);
    };
    ProjectService.prototype.getProjectDetails = function (projectId) {
        var url = "http://localhost:5248/api/projects/" + projectId;
        return this.httpClient.get(url);
    };
    ProjectService.prototype.getProjectMembers = function (projectId) {
        var url = "http://localhost:5248/api/projects/teammembers/" + projectId;
        return this.httpClient.get(url);
    };
    ProjectService.prototype.getTasksOfProject = function (projectId, timePeriod) {
        var url = "http://localhost:5248/api/projects/tasks/" + projectId + "/" + timePeriod;
        return this.httpClient.get(url);
    };
    ProjectService.prototype.getProjectNames = function (employeeId) {
        var url = "http://localhost:5248/api/projects/employee/" + employeeId;
        return this.httpClient.get(url);
    };
    ProjectService.prototype.getManagerProjects = function (managerId) {
        var url = "http://localhost:5248/api/projects/manager/" + managerId;
        return this.httpClient.get(url);
    };
    ProjectService.prototype.addProject = function (project) {
        var url = "http://localhost:5248/api/projects/addproject";
        return this.httpClient.post(url, project);
    };
    ProjectService.prototype.updateProject = function (project) {
        var url = "http://localhost:5248/api/projects";
        return this.httpClient.put(url, project);
    };
    ProjectService.prototype.deleteProject = function (projectId) {
        var url = "http://localhost:5248/api/projects/" + projectId;
        return this.httpClient["delete"](url);
    };
    ProjectService.prototype.unAssignedTask = function (projectId, timePeriod) {
        var url = "http://localhost:5248/api/projects/unassignedtask/" + projectId + "/" + timePeriod;
        return this.httpClient.get(url);
    };
    ProjectService.prototype.assignedTasksByManager = function (managerId, timePeriod) {
        var url = "http://localhost:5248/api/projects/assignedtasksbymanager/" + managerId + "/" + timePeriod;
        return this.httpClient.get(url);
    };
    ProjectService.prototype.unAssignedTasksByManager = function (managerId, timePeriod) {
        var url = "http://localhost:5248/api/projects/unassignedtasksbymanager/" + managerId + "/" + timePeriod;
        return this.httpClient.get(url);
    };
    ProjectService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], ProjectService);
    return ProjectService;
}());
exports.ProjectService = ProjectService;
