"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ProjectcompletionComponent = void 0;
var core_1 = require("@angular/core");
var ProjectcompletionComponent = /** @class */ (function () {
    function ProjectcompletionComponent(employeeService, projectService, biService) {
        this.employeeService = employeeService;
        this.projectService = projectService;
        this.biService = biService;
        this.teamManagerId = 0;
        this.projectNames = [];
        this.percentages = [];
    }
    ProjectcompletionComponent.prototype.ngOnInit = function () {
        var _this = this;
        var userId = localStorage.getItem('userId');
        this.employeeService.getEmployeeId(Number(userId)).subscribe(function (res) {
            _this.teamManagerId = res;
            _this.projectService.getManagerProjectNames(_this.teamManagerId).subscribe(function (res) {
                _this.projectNames = res;
                _this.loadCompletionPercentages();
            });
        });
    };
    ProjectcompletionComponent.prototype.loadCompletionPercentages = function () {
        var _this = this;
        var projectIds = this.projectNames.map(function (p) { return p.projectId; });
        console.log(projectIds);
        var projectIdsString = projectIds.join(',');
        console.log(projectIdsString);
        this.biService.getProjectCompletionPercentage(projectIdsString).subscribe(function (res) {
            _this.percentages = res;
            console.log(_this.percentages);
        });
    };
    ProjectcompletionComponent.prototype.getCompletionPercentage = function (projectId) {
        var projectPercentage = this.percentages.find(function (p) { return p.projectId === projectId; });
        return projectPercentage ? projectPercentage.completionPercentage : 0;
    };
    ProjectcompletionComponent = __decorate([
        core_1.Component({
            selector: 'app-projectcompletion',
            templateUrl: './projectcompletion.component.html',
            styleUrls: ['./projectcompletion.component.css']
        })
    ], ProjectcompletionComponent);
    return ProjectcompletionComponent;
}());
exports.ProjectcompletionComponent = ProjectcompletionComponent;
