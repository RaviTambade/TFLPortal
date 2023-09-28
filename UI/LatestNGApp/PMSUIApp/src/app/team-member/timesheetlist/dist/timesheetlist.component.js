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
    function TimesheetlistComponent(timeSheetService, router, route, employeeService) {
        this.timeSheetService = timeSheetService;
        this.router = router;
        this.route = route;
        this.employeeService = employeeService;
        this.timeSheetList = [];
        this.selectedTimeSheetId = null;
        this.teamMemberId = 0;
        this.selectedTimePeriod = "today";
    }
    TimesheetlistComponent.prototype.ngOnInit = function () {
        var _this = this;
        var userId = localStorage.getItem('userId');
        this.employeeService.getEmployeeId(Number(userId)).subscribe(function (res) {
            _this.teamMemberId = res;
            _this.getMyTimeSheet(_this.selectedTimePeriod);
        });
    };
    TimesheetlistComponent.prototype.getMyTimeSheet = function (timePeriod) {
        var _this = this;
        this.selectedTimePeriod = timePeriod;
        this.timeSheetService.getTimeSheetList(this.teamMemberId, timePeriod).subscribe(function (res) {
            _this.timeSheetList = res;
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
    TimesheetlistComponent.prototype.add = function () {
        this.router.navigate(['teammember/timesheetadd']);
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
