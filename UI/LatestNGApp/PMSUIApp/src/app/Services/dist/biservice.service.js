"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.BIserviceService = void 0;
var core_1 = require("@angular/core");
var BIserviceService = /** @class */ (function () {
    function BIserviceService(httpClient) {
        this.httpClient = httpClient;
    }
    BIserviceService.prototype.getTotalProjectWorkHours = function (teamManagerId, dateFilter) {
        var url = "http://localhost:5242/api/TeamManagersBI/projectwork/" + teamManagerId;
        return this.httpClient.post(url, dateFilter);
    };
    BIserviceService.prototype.getProjectsStatusCount = function (teamManagerId) {
        var url = "http://localhost:5242/api/TeamManagersBI/projectstatuscount/" + teamManagerId;
        return this.httpClient.get(url);
    };
    BIserviceService.prototype.getProjectCompletionPercentage = function (projectId) {
        var url = "http://localhost:5242/api/TeamManagersBI/projectpercentage/" + projectId;
        return this.httpClient.get(url);
    };
    BIserviceService.prototype.getTotalHoursOfMembers = function (projectId, givenDate, dateRange) {
        var url = "http://localhost:5242/api/TeamManagersBI/memberworkhours/" + projectId + "/" + givenDate + "/" + dateRange;
        return this.httpClient.get(url);
    };
    BIserviceService.prototype.getAllocatedTaskOverview = function (teamMemberId) {
        var url = "http://localhost:5242/api/TeamManagersBI/allocatedtasks/" + teamMemberId;
        return this.httpClient.get(url);
    };
    BIserviceService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], BIserviceService);
    return BIserviceService;
}());
exports.BIserviceService = BIserviceService;
