"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.EmployeelistComponent = void 0;
var core_1 = require("@angular/core");
var EmployeelistComponent = /** @class */ (function () {
    function EmployeelistComponent(router, employeeService, userService) {
        this.router = router;
        this.employeeService = employeeService;
        this.userService = userService;
        this.teamManagerId = 0;
        this.teamMembers = [];
        this.teamMember = [];
    }
    EmployeelistComponent.prototype.ngOnInit = function () {
        var _this = this;
        var userId = localStorage.getItem('userId');
        this.employeeService.getEmployeeId(Number(userId)).subscribe(function (res) {
            _this.teamManagerId = res;
            _this.employeeService.getUserIdByManagerId(_this.teamManagerId).subscribe(function (res) {
                var employeeUserIds = res;
                var employeeUserIdsString = employeeUserIds.join(",");
                _this.userService.getUserNamesWithId(employeeUserIdsString).subscribe(function (res) {
                    _this.teamMembers = res;
                    _this.teamMember = _this.teamMembers.map(function (res) { return res.name; });
                });
            });
        });
    };
    EmployeelistComponent.prototype.addEmployee = function () {
        this.router.navigate(['teammanager/addemployee']);
    };
    EmployeelistComponent.prototype.onTeamMemberClick = function (employeeId) {
        this.router.navigate(['teammember/employeedetails', employeeId]);
    };
    EmployeelistComponent = __decorate([
        core_1.Component({
            selector: 'app-employeelist',
            templateUrl: './employeelist.component.html',
            styleUrls: ['./employeelist.component.css']
        })
    ], EmployeelistComponent);
    return EmployeelistComponent;
}());
exports.EmployeelistComponent = EmployeelistComponent;
