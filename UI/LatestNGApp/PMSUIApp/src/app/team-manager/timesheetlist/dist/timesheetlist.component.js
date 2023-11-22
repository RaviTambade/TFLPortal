"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.TimesheetlistComponent = void 0;
var core_1 = require("@angular/core");
var TimesheetlistComponent = /** @class */ (function () {
    function TimesheetlistComponent(router, timeSheetService, employeeService, userService) {
        this.router = router;
        this.timeSheetService = timeSheetService;
        this.employeeService = employeeService;
        this.userService = userService;
        this.timeSheetList = [];
        this.selectedTimeSheetId = null;
        this.managerId = 0;
        this.selectedTimePeriod = 'today';
    }
    TimesheetlistComponent.prototype.ngOnInit = function () {
        var _this = this;
        var userId = this.authservice.getClaimFromToken(TokenClaims.userId);
        this.employeeService.getEmployeeId(userId).subscribe(function (res) {
            _this.managerId = res;
            _this.getTimeSheetList(_this.selectedTimePeriod);
        });
    };
    TimesheetlistComponent.prototype.getTimeSheetList = function (timePeriod) {
        var _this = this;
        this.selectedTimePeriod = timePeriod;
        this.timeSheetService.getTimeSheetListByManager(this.managerId, timePeriod).subscribe(function (res) {
            console.log(res);
            _this.timeSheetList = res;
            var distinctEmployeeUserId = _this.timeSheetList.map(function (item) {
                return item.employeeUserId;
            }).filter(function (number, index, array) { return array.indexOf(number) == index; });
            var employeeUserIdString = distinctEmployeeUserId.join(',');
            console.log(employeeUserIdString);
            _this.userService.getUserNamesWithId(employeeUserIdString).subscribe(function (res) {
                var teamMemberName = res;
                console.log(teamMemberName);
                _this.timeSheetList.forEach(function (item) {
                    var matchingItem = teamMemberName.find(function (element) { return element.id === item.employeeUserId; });
                    if (matchingItem != undefined)
                        item.employeeName = matchingItem.name;
                    console.log(matchingItem);
                });
            });
        });
    };
    TimesheetlistComponent.prototype.selectTimeSheet = function (id) {
        if (this.selectedTimeSheetId === id) {
            this.selectedTimeSheetId = null;
        }
        else {
            this.selectedTimeSheetId = id;
        }
        this.timeSheetService.setTimeSheetId(id);
    };
    TimesheetlistComponent.prototype.onClickTask = function (taskId) {
        this.router.navigate(['teammanager/updatestatus', taskId]);
    };
    TimesheetlistComponent = __decorate([
        core_1.Component({
            selector: 'app-timesheetlist',
            templateUrl: './timesheetlist.component.html',
            styleUrls: ['./timesheetlist.component.css']
        })
    ], TimesheetlistComponent);
    return TimesheetlistComponent;
}());
exports.TimesheetlistComponent = TimesheetlistComponent;
