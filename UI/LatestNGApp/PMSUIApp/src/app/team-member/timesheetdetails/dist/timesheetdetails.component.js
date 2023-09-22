"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.TimesheetdetailsComponent = void 0;
var core_1 = require("@angular/core");
var TimesheetdetailsComponent = /** @class */ (function () {
    function TimesheetdetailsComponent(timeSheetService) {
        this.timeSheetService = timeSheetService;
        this.selectedTimeSheet = {
            timeSheetId: 0,
            date: '',
            fromTime: '',
            toTime: '',
            description: '',
            status: '',
            taskTitle: ''
        };
    }
    TimesheetdetailsComponent.prototype.ngOnChanges = function (changes) {
        var _this = this;
        if (changes['selectedTimeSheetId'] && this.selectedTimeSheetId !== undefined) {
            this.timeSheetService.getTimeSheetDetail(this.selectedTimeSheetId).subscribe(function (res) {
                _this.selectedTimeSheet = res;
                console.log(_this.selectedTimeSheet);
                _this.selectTimeSheet(_this.selectedTimeSheetId);
            });
        }
    };
    TimesheetdetailsComponent.prototype.selectTimeSheet = function (id) {
        if (this.selectedTimeSheetId === id) {
            this.selectedTimeSheetId = null;
        }
        else {
            this.selectedTimeSheetId = id;
        }
        this.timeSheetService.setTimeSheetId(id);
    };
    __decorate([
        core_1.Input()
    ], TimesheetdetailsComponent.prototype, "selectedTimeSheetId");
    TimesheetdetailsComponent = __decorate([
        core_1.Component({
            selector: 'app-timesheetdetails',
            templateUrl: './timesheetdetails.component.html',
            styleUrls: ['./timesheetdetails.component.css']
        })
    ], TimesheetdetailsComponent);
    return TimesheetdetailsComponent;
}());
exports.TimesheetdetailsComponent = TimesheetdetailsComponent;
