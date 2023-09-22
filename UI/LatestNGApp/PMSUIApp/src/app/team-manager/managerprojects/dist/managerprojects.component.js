"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ManagerprojectsComponent = void 0;
var core_1 = require("@angular/core");
var ManagerprojectsComponent = /** @class */ (function () {
    function ManagerprojectsComponent(projectService, router, employeeService, userService, taskService) {
        this.projectService = projectService;
        this.router = router;
        this.employeeService = employeeService;
        this.userService = userService;
        this.taskService = taskService;
        this.projectList = [];
        this.selectedProjectId = null;
        this.filteredProjects = [];
        this.teamManagerId = 0;
        this.teamManagerUserId = '';
        this.projectTaskCount = {
            completedTaskCount: 0,
            totalTaskCount: 0
        };
    }
    ManagerprojectsComponent.prototype.ngOnInit = function () {
        var _this = this;
        var userId = localStorage.getItem('userId');
        this.employeeService.getEmployeeId(Number(userId)).subscribe(function (res) {
            _this.teamManagerId = res;
            _this.projectService
                .getManagerProjects(_this.teamManagerId)
                .subscribe(function (res) {
                _this.projectList = res;
                console.log(_this.projectList);
                _this.filteredProjects = res;
                _this.projectList.forEach(function (project) {
                    _this.taskService
                        .GetProjectTaskCount(project.id)
                        .subscribe(function (res) {
                        _this.projectTaskCount = res;
                        if (_this.projectTaskCount == null) {
                            project.completion = 0;
                        }
                        else {
                            var completedTask = _this.projectTaskCount.completedTaskCount;
                            console.log(completedTask);
                            var totalTask = _this.projectTaskCount.totalTaskCount;
                            console.log(totalTask);
                            project.completion = totalTask === 0 ? 0 : (completedTask / totalTask) * 100;
                        }
                    });
                });
            });
        });
    };
    ManagerprojectsComponent.prototype.filterProjectsByStatus = function (status) {
        if (status === 'All') {
            this.filteredProjects = this.projectList;
        }
        else {
            this.filteredProjects = this.projectList.filter(function (project) { return project.status === status; });
            console.log(this.filteredProjects);
        }
        this.selectedProjectId = null;
        this.projectService.setSelectedProjectId(this.selectedProjectId);
    };
    ManagerprojectsComponent.prototype.selectProject = function (id) {
        if (this.selectedProjectId === id) {
            this.selectedProjectId = null;
        }
        else {
            this.selectedProjectId = id;
        }
        this.projectService.setSelectedProjectId(id);
    };
    ManagerprojectsComponent.prototype.addProject = function () {
        this.router.navigate(['teammanager/addproject']);
    };
    ManagerprojectsComponent.prototype.addTask = function (projectId) {
        this.router.navigate(['teammanager/addtask', projectId]);
    };
    ManagerprojectsComponent = __decorate([
        core_1.Component({
            selector: 'app-managerprojects',
            templateUrl: './managerprojects.component.html',
            styleUrls: ['./managerprojects.component.css']
        })
    ], ManagerprojectsComponent);
    return ManagerprojectsComponent;
}());
exports.ManagerprojectsComponent = ManagerprojectsComponent;
