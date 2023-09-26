"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.TaskdetailsinfoComponent = void 0;
var core_1 = require("@angular/core");
var TaskdetailsinfoComponent = /** @class */ (function () {
    function TaskdetailsinfoComponent(taskService) {
        this.taskService = taskService;
        this.taskId = null;
        this.selectedTaskId = null;
        this.taskDetail = {};
    }
    TaskdetailsinfoComponent.prototype.ngOnChanges = function (changes) {
        var _this = this;
        if (changes['taskId'] && this.taskId !== null) {
            console.log(this.taskId);
            this.taskService.getMoreTaskDetails(this.taskId).subscribe(function (details) {
                _this.taskDetail = details;
                console.log(details);
            });
        }
    };
    __decorate([
        core_1.Input()
    ], TaskdetailsinfoComponent.prototype, "taskId");
    TaskdetailsinfoComponent = __decorate([
        core_1.Component({
            selector: 'app-taskdetailsinfo',
            templateUrl: './taskdetailsinfo.component.html',
            styleUrls: ['./taskdetailsinfo.component.css']
        })
    ], TaskdetailsinfoComponent);
    return TaskdetailsinfoComponent;
}());
exports.TaskdetailsinfoComponent = TaskdetailsinfoComponent;
