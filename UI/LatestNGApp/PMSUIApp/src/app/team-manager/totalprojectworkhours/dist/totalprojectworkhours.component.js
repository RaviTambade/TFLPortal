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
    function TotalprojectworkhoursComponent(biService, employeeService) {
        this.biService = biService;
        this.employeeService = employeeService;
        this.totalProjectWork = [];
        this.teamManagerId = 0;
    }
    TotalprojectworkhoursComponent.prototype.ngOnInit = function () {
        var _this = this;
        var userId = localStorage.getItem('userId');
        this.employeeService.getEmployeeId(Number(userId)).subscribe(function (res) {
            _this.teamManagerId = res;
            _this.biService.getTotalProjectWorkHours(_this.teamManagerId).subscribe(function (res) {
                _this.totalProjectWork = res;
                console.log(res);
            });
        });
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
