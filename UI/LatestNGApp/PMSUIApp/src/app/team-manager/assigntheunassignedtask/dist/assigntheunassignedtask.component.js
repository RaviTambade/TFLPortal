"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AssigntheunassignedtaskComponent = void 0;
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var AssigntheunassignedtaskComponent = /** @class */ (function () {
    function AssigntheunassignedtaskComponent(route, taskService, projectService, userService, formBuilder) {
        this.route = route;
        this.taskService = taskService;
        this.projectService = projectService;
        this.userService = userService;
        this.formBuilder = formBuilder;
        this.taskId = 0;
        this.projectId = 0;
        this.employeeIdWithUserIds = [];
        this.projectTitle = '';
        this.assignedTask = {
            taskId: 0,
            teamMemberId: 0
        };
        this.assignTaskForm = this.formBuilder.group({
            taskId: ['', forms_1.Validators.required],
            teamMemberId: ['', forms_1.Validators.required]
        });
    }
    AssigntheunassignedtaskComponent.prototype.ngOnInit = function () {
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
    AssigntheunassignedtaskComponent.prototype.onSubmit = function () {
        var _this = this;
        var _a, _b;
        if (this.assignTaskForm.valid) {
            var assignedTask = {
                taskId: (_a = this.assignTaskForm.get('taskId')) === null || _a === void 0 ? void 0 : _a.value,
                teamMemberId: (_b = this.assignTaskForm.get('teamMemberId')) === null || _b === void 0 ? void 0 : _b.value
            };
            this.taskService.addAssignedTask(assignedTask).subscribe(function (res) {
                if (res) {
                    alert('task assigned Sucessfully');
                    _this.assignTaskForm.reset();
                }
                else {
                    alert('data is inconsistent');
                }
            });
        }
    };
    AssigntheunassignedtaskComponent = __decorate([
        core_1.Component({
            selector: 'app-assigntheunassignedtask',
            templateUrl: './assigntheunassignedtask.component.html',
            styleUrls: ['./assigntheunassignedtask.component.css']
        })
    ], AssigntheunassignedtaskComponent);
    return AssigntheunassignedtaskComponent;
}());
exports.AssigntheunassignedtaskComponent = AssigntheunassignedtaskComponent;
