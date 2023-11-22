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
    ManagerprojectsComponent.prototype.parseDate = function (dateString) {
        var dateParts = dateString.split(' ')[0].split('-');
        var year = parseInt(dateParts[2], 10);
        var month = parseInt(dateParts[1], 10) - 1;
        var day = parseInt(dateParts[0], 10);
        return new Date(year, month, day);
    };
    ManagerprojectsComponent.prototype.ngOnInit = function () {
        var _this = this;
        var userId = this.authservice.getClaimFromToken(TokenClaims.userId);
        this.employeeService.getEmployeeId(userId).subscribe(function (res) {
            _this.teamManagerId = res;
            _this.projectService
                .getManagerProjects(_this.teamManagerId)
                .subscribe(function (res) {
                _this.projectList = res;
                console.log(_this.projectList);
                _this.filteredProjects = res;
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
