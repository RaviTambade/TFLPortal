"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.GetallocatedtaskoverviewComponent = void 0;
var core_1 = require("@angular/core");
var GetallocatedtaskoverviewComponent = /** @class */ (function () {
    function GetallocatedtaskoverviewComponent(biService, employeeService, projectService, userService) {
        this.biService = biService;
        this.employeeService = employeeService;
        this.projectService = projectService;
        this.userService = userService;
        this.allocatedTaskOverview = [];
        this.teamManagerId = 0;
        this.teamMemberIds = [];
        this.currentIndex = 0;
    }
    GetallocatedtaskoverviewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.startCarousel();
        var userId = this.authservice.getClaimFromToken(TokenClaims.userId);
        this.employeeService.getEmployeeId(userId).subscribe(function (res) {
            _this.teamManagerId = res;
            _this.projectService.getTeamMemberIds(_this.teamManagerId).subscribe(function (res) {
                _this.teamMemberIds = res;
                var teamMemberStringIds = _this.teamMemberIds.join(",");
                _this.biService.getAllocatedTaskOverview(teamMemberStringIds).subscribe(function (res) {
                    _this.allocatedTaskOverview = res;
                    var distinctTeamMemberUserIds = _this.allocatedTaskOverview
                        .map(function (item) { return item.userId; })
                        .filter(function (number, index, array) { return array.indexOf(number) === index; });
                    console.log(distinctTeamMemberUserIds);
                    var teamMemberrUserIdString = distinctTeamMemberUserIds.join(',');
                    console.log(res);
                    console.log(teamMemberrUserIdString);
                    _this.userService
                        .getUserNamesWithId(teamMemberrUserIdString)
                        .subscribe(function (res) {
                        console.log(res);
                        var teamMemberName = res;
                        _this.allocatedTaskOverview.forEach(function (item) {
                            var matchingItem = teamMemberName.find(function (element) { return element.id === item.userId; });
                            if (matchingItem != undefined)
                                item.employeeName = matchingItem.name;
                            console.log(item.employeeName);
                        });
                    });
                });
            });
        });
    };
    GetallocatedtaskoverviewComponent.prototype.startCarousel = function () {
        var _this = this;
        setInterval(function () {
            _this.nextSlide();
        }, 3000);
    };
    GetallocatedtaskoverviewComponent.prototype.prevSlide = function () {
        this.currentIndex = (this.currentIndex - 1 + this.allocatedTaskOverview.length) % this.allocatedTaskOverview.length;
    };
    GetallocatedtaskoverviewComponent.prototype.nextSlide = function () {
        this.currentIndex = (this.currentIndex + 1) % this.allocatedTaskOverview.length;
    };
    GetallocatedtaskoverviewComponent.prototype.goToSlide = function (index) {
        this.currentIndex = index;
    };
    GetallocatedtaskoverviewComponent = __decorate([
        core_1.Component({
            selector: 'app-getallocatedtaskoverview',
            templateUrl: './getallocatedtaskoverview.component.html',
            styleUrls: ['./getallocatedtaskoverview.component.css']
        })
    ], GetallocatedtaskoverviewComponent);
    return GetallocatedtaskoverviewComponent;
}());
exports.GetallocatedtaskoverviewComponent = GetallocatedtaskoverviewComponent;
