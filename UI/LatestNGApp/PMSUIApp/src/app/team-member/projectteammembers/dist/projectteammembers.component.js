"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ProjectteammembersComponent = void 0;
var core_1 = require("@angular/core");
var ProjectteammembersComponent = /** @class */ (function () {
    function ProjectteammembersComponent(projectService, router, employeeService, userService) {
        this.projectService = projectService;
        this.router = router;
        this.employeeService = employeeService;
        this.userService = userService;
        this.projectId = 0;
        this.teamMembers = [];
        this.teamMember = [];
        this.selectedUserId = 0;
        this.teamMembersUserId = [];
    }
    ProjectteammembersComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.projectSubscription = this.projectService.selectedProjectId$.subscribe(function (response) {
            _this.projectId = response;
            _this.projectService.getProjectMembers(_this.projectId).subscribe(function (res) {
                _this.teamMembersUserId = res;
                console.log(res);
                if (_this.teamMembersUserId.length > 0) {
                    var teamManagerUserIdString = _this.teamMembersUserId.join(",");
                    _this.userService.getUserNamesWithId(teamManagerUserIdString).subscribe(function (res) {
                        console.log(res);
                        _this.teamMembers = res;
                        return _this.teamMember = res.map(function (res) { return res.name; });
                    });
                }
                else {
                    _this.teamMembers = [];
                    _this.teamMember = [];
                }
            });
        });
    };
    ProjectteammembersComponent.prototype.onTeamMemberClick = function (employeeId) {
        this.router.navigate(['teammember/employeedetails', employeeId]);
    };
    ProjectteammembersComponent.prototype.ngOnDestroy = function () {
        var _a;
        (_a = this.projectSubscription) === null || _a === void 0 ? void 0 : _a.unsubscribe();
    };
    ProjectteammembersComponent = __decorate([
        core_1.Component({
            selector: 'app-projectteammembers',
            templateUrl: './projectteammembers.component.html',
            styleUrls: ['./projectteammembers.component.css']
        })
    ], ProjectteammembersComponent);
    return ProjectteammembersComponent;
}());
exports.ProjectteammembersComponent = ProjectteammembersComponent;
