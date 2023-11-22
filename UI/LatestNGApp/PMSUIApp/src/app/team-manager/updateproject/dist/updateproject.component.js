"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.UpdateprojectComponent = void 0;
var core_1 = require("@angular/core");
var UpdateprojectComponent = /** @class */ (function () {
    function UpdateprojectComponent(projectService, route, employeeService) {
        this.projectService = projectService;
        this.route = route;
        this.employeeService = employeeService;
        this.projectId = 0;
        this.teamManagerId = 0;
        // project:Addproject={
        //   id:0,
        //   title: '',
        //   startDate: '',
        //   endDate: '',
        //   description: '',
        //   status: '',
        //   teamManagerId: 0
        // }
        this.projectdetail = {
            id: 0,
            title: '',
            startDate: '',
            endDate: 0,
            description: '',
            status: '',
            teamManagerUserId: 0
        };
    }
    UpdateprojectComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.projectId = params['projectId'];
            var userId = this.authservice.getClaimFromToken(TokenClaims.userId);
            _this.employeeService.getEmployeeId(userId).subscribe(function (res) {
                _this.teamManagerId = res;
                _this.projectService.getProjectDetails(_this.projectId).subscribe(function (res) {
                    _this.projectdetail = res;
                });
            });
        });
    };
    UpdateprojectComponent.prototype.OnSubmit = function () {
        this.projectService.updateProject(this.projectdetail).subscribe(function (res) {
            console.log(res);
        });
    };
    UpdateprojectComponent = __decorate([
        core_1.Component({
            selector: 'app-updateproject',
            templateUrl: './updateproject.component.html',
            styleUrls: ['./updateproject.component.css']
        })
    ], UpdateprojectComponent);
    return UpdateprojectComponent;
}());
exports.UpdateprojectComponent = UpdateprojectComponent;
