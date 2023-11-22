"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.TotalprojectworkhoursComponent = void 0;
var core_1 = require("@angular/core");
var TotalprojectworkhoursComponent = /** @class */ (function () {
    function TotalprojectworkhoursComponent(biService, projectService, employeeService) {
        this.biService = biService;
        this.projectService = projectService;
        this.employeeService = employeeService;
        this.totalProjectWork = [];
        this.teamManagerId = 0;
        this.dateFilter = {
            "startDate": "2020-08-01T17:34:03",
            "endDate": "2024-10-08T17:34:03"
        };
        this.selectedProjectId = null;
    }
    TotalprojectworkhoursComponent.prototype.ngOnInit = function () {
        var _this = this;
        var userId = this.authservice.getClaimFromToken(TokenClaims.userId);
        this.employeeService.getEmployeeId(userId).subscribe(function (res) {
            _this.teamManagerId = res;
            _this.biService.getTotalProjectWorkHours(_this.teamManagerId, _this.dateFilter).subscribe(function (res) {
                console.log(_this.dateFilter);
                _this.totalProjectWork = res;
                console.log(res);
            });
        });
    };
    TotalprojectworkhoursComponent.prototype.selectProject = function (id) {
        if (this.selectedProjectId === id) {
            this.selectedProjectId = null;
        }
        else {
            this.selectedProjectId = id;
        }
        this.projectService.setSelectedProjectId(id);
    };
    TotalprojectworkhoursComponent = __decorate([
        core_1.Component({
            selector: 'app-totalprojectworkhours',
            templateUrl: './totalprojectworkhours.component.html',
            styleUrls: ['./totalprojectworkhours.component.css']
        })
    ], TotalprojectworkhoursComponent);
    return TotalprojectworkhoursComponent;
}());
exports.TotalprojectworkhoursComponent = TotalprojectworkhoursComponent;
