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
        this.projects = [
            { id: 1, employeeId: 1, title: "PMSAPP", startDate: new Date("2023-02-02"), status: "In-Progress", completion: "50%", description: "Description for Project 1", teamManager: "Manager 1" },
            { id: 2, employeeId: 1, title: "EKrushi", startDate: new Date("2023-02-02"), status: "Pending", completion: "0%", description: "Description for Project 2", teamManager: "Manager 2" },
            { id: 3, employeeId: 1, title: "HMAPP", startDate: new Date("2023-02-02"), status: "In-Progress", completion: "30%", description: "Description for Project 2", teamManager: "Manager 2" },
            { id: 4, employeeId: 1, title: "EAgro", startDate: new Date("2023-02-02"), status: "Pending", completion: "0%", description: "Description for Project 2", teamManager: "Manager 2" },
            { id: 5, employeeId: 1, title: "Inventory", startDate: new Date("2023-02-02"), status: "Completed", completion: "100%", description: "Description for Project 2", teamManager: "Manager 2" },
            { id: 6, employeeId: 1, title: "OMTBAPP", startDate: new Date("2023-02-02"), status: "Completed", completion: "100%", description: "Description for Project 2", teamManager: "Manager 2" },
            { id: 7, employeeId: 1, title: "OCBAPP", startDate: new Date("2023-02-02"), status: "Canceled", completion: "0%", description: "Description for Project 2", teamManager: "Manager 2" },
            { id: 8, employeeId: 1, title: "EKrushi", startDate: new Date("2023-02-02"), status: "Canceled", completion: "0%", description: "Description for Project 2", teamManager: "Manager 2" },
        ];
        this.projectTeamMembers = [
            { projectId: 1, teammembers: ["Rushikesh Chikane", "Abhay Navale", "Akshay Tanpure"] },
            { projectId: 2, teammembers: ["Sahil Mankar", "Shubham Teli", "Akash Ajab"] },
            { projectId: 3, teammembers: ["Rushikesh Kale", "Abhi Shinde", "Akashdeep Karale"] },
            { projectId: 4, teammembers: ["Rushikesh Chikane", "Abhay Navale", "Akshay Tanpure"] },
            { projectId: 5, teammembers: ["Sahil Mankar", "Shubham Teli", "Akash Ajab"] },
            { projectId: 6, teammembers: ["Rushikesh Chikane", "Abhay Navale", "Akshay Tanpure"] },
            { projectId: 7, teammembers: ["Sahil Mankar", "Shubham Teli", "Akash Ajab"] },
            { projectId: 8, teammembers: ["Rushikesh Kale", "Abhi Shinde", "Akashdeep Karale"] },
        ];
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
    ProjectService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], ProjectService);
    return ProjectService;
}());
exports.ProjectService = ProjectService;
