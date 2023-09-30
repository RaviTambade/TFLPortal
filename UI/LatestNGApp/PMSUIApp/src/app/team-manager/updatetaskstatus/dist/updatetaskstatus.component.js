"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.UpdatetaskstatusComponent = void 0;
var core_1 = require("@angular/core");
var UpdatetaskstatusComponent = /** @class */ (function () {
    function UpdatetaskstatusComponent(router, route, taskService, projectService, userService) {
        this.router = router;
        this.route = route;
        this.taskService = taskService;
        this.projectService = projectService;
        this.userService = userService;
        this.taskId = 0;
        this.projectId = 0;
        this.employeeIdWithUserIds = [];
        this.projectTitle = '';
        this.status = '';
    }
    UpdatetaskstatusComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.taskId = params['taskId'];
        });
        console.log(this.taskId);
        this.taskService.getTaskDetail(this.taskId).subscribe(function (res) {
            console.log(res);
            _this.task = res;
            _this.projectId = res.projectId;
            console.log(_this.projectId);
            _this.projectService.getProjectTitle(_this.projectId).subscribe(function (res) {
                _this.projectTitle = res;
                console.log(res);
                console.log(_this.projectId);
                _this.projectService
                    .getEmployeeIdWithUserId(_this.projectId)
                    .subscribe(function (res) {
                    _this.employeeIdWithUserIds = res;
                    console.log(_this.employeeIdWithUserIds);
                    var userIds = _this.employeeIdWithUserIds.map(function (e) { return e.userId; });
                    var employeeIdWithUserIdsString = userIds.join(',');
                    console.log(employeeIdWithUserIdsString);
                    _this.userService
                        .getUserNamesWithId(employeeIdWithUserIdsString)
                        .subscribe(function (res) {
                        var teamMemberName = res;
                        console.log(teamMemberName);
                        _this.employeeIdWithUserIds.forEach(function (item) {
                            var matchingItem = teamMemberName.find(function (element) { return element.id === item.userId; });
                            if (matchingItem != undefined)
                                item.employeeName = matchingItem.name;
                            console.log(matchingItem);
                        });
                    });
                });
            });
        });
    };
    UpdatetaskstatusComponent.prototype.showConfirmDialog = function () {
        var result = window.confirm('Are you sure you want to update the status?');
        if (result) {
            this.onSubmit();
        }
    };
    UpdatetaskstatusComponent.prototype.onSubmit = function () {
        this.taskService
            .updateTaskStatus(this.taskId, this.task.status)
            .subscribe(function (res) {
            window.alert("status updated successfully");
        });
    };
    UpdatetaskstatusComponent = __decorate([
        core_1.Component({
            selector: 'app-updatetaskstatus',
            templateUrl: './updatetaskstatus.component.html',
            styleUrls: ['./updatetaskstatus.component.css']
        })
    ], UpdatetaskstatusComponent);
    return UpdatetaskstatusComponent;
}());
exports.UpdatetaskstatusComponent = UpdatetaskstatusComponent;
