"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.TimeSheetService = void 0;
var core_1 = require("@angular/core");
var rxjs_1 = require("rxjs");
var TimeSheetService = /** @class */ (function () {
    function TimeSheetService(projectsService, httpClient) {
        this.projectsService = projectsService;
        this.httpClient = httpClient;
        this.selectedtimeSheetIdSubject = new rxjs_1.BehaviorSubject(null);
        this.selectedTaskId$ = this.selectedtimeSheetIdSubject.asObservable();
    }
    TimeSheetService.prototype.setTimeSheetId = function (id) {
        this.selectedtimeSheetIdSubject.next(id);
    };
    TimeSheetService.prototype.getTimeSheetList = function (employeeId, timePeriod) {
        var url = "http://localhost:5221/api/timesheets/list/" + employeeId + "/" + timePeriod;
        return this.httpClient.get(url);
    };
    TimeSheetService.prototype.getTimeSheetDetail = function (timeSheetId) {
        var url = "http://localhost:5221/api/timesheets/details/" + timeSheetId;
        return this.httpClient.get(url);
    };
    TimeSheetService.prototype.addTimeSheet = function (timeSheet) {
        var url = "http://localhost:5221/api/timesheets/add";
        return this.httpClient.post(url, timeSheet);
    };
    TimeSheetService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], TimeSheetService);
    return TimeSheetService;
}());
exports.TimeSheetService = TimeSheetService;
