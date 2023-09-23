"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.EmployeeprojectdetailsComponent = void 0;
var core_1 = require("@angular/core");
var EmployeeprojectdetailsComponent = /** @class */ (function () {
    function EmployeeprojectdetailsComponent(projectService, router, route, userService) {
        this.projectService = projectService;
        this.router = router;
        this.route = route;
        this.userService = userService;
        this.projectId = null;
        this.projectDetails = {
            id: 0,
            title: '',
            startDate: '',
            endDate: 0,
            description: '',
            status: '',
            teamManagerUserId: 0
        };
    }
    EmployeeprojectdetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.projectService.selectedProjectId$.subscribe(function (res) {
            console.log(res);
            _this.projectId = res;
            if (_this.projectId != null) {
                _this.projectService
                    .getProjectDetails(_this.projectId)
                    .subscribe(function (details) {
                    console.log(details);
                    console.log(_this.projectId);
                    _this.projectDetails = details;
                    // this.selectProject(this.projectDetails.id);
                });
            }
        });
    };
    EmployeeprojectdetailsComponent.prototype.getAllTasksOfProject = function (projectId) {
        var isTeamManager = this.userService.isUserHaveRequiredRole("Team Manager");
        if (isTeamManager) {
            this.router.navigate(['teammanager/projecttasks', projectId], { queryParams: { projectName: this.projectDetails.title } });
        }
        else {
            this.router.navigate(['teammember/projecttasks', projectId], { queryParams: { projectName: this.projectDetails.title } });
        }
    };
    EmployeeprojectdetailsComponent.prototype.updateProject = function (projectId) {
        if (projectId) {
            this.router.navigate(['teammanager/updateproject', projectId]);
        }
    };
    EmployeeprojectdetailsComponent.prototype.unAssignedTask = function (projectId) {
        this.router.navigate(['teammanager/unassignedtasks', projectId], { queryParams: { projectName: this.projectDetails.title } });
    };
    EmployeeprojectdetailsComponent.prototype.canShowButton = function () {
        return this.userService.isUserHaveRequiredRole("Team Manager");
    };
    EmployeeprojectdetailsComponent.prototype.onRemoveButton = function (id) {
        var confirmation = window.confirm('Are you sure you want to delete this project?');
        if (confirmation) {
            this.projectService.deleteProject(id).subscribe(function (res) {
                console.log(res);
                window.location.reload();
            });
        }
        else {
            console.log('Deletion canceled');
        }
    };
    __decorate([
        core_1.Input()
    ], EmployeeprojectdetailsComponent.prototype, "projectId");
    EmployeeprojectdetailsComponent = __decorate([
        core_1.Component({
            selector: 'app-employeeprojectdetails',
            templateUrl: './employeeprojectdetails.component.html',
            styleUrls: ['./employeeprojectdetails.component.css']
        })
    ], EmployeeprojectdetailsComponent);
    return EmployeeprojectdetailsComponent;
}());
exports.EmployeeprojectdetailsComponent = EmployeeprojectdetailsComponent;
