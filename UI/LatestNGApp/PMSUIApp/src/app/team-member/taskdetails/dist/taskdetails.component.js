"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.TaskdetailsComponent = void 0;
var core_1 = require("@angular/core");
var TaskdetailsComponent = /** @class */ (function () {
    function TaskdetailsComponent(taskService, router, projectService) {
        this.taskService = taskService;
        this.router = router;
        this.projectService = projectService;
        this.selectedProjectId = null;
        this.selectedTaskId = null;
        this.taskId = null;
        this.taskDetail = {
            taskId: 0,
            task: '',
            status: '',
            projectName: '',
            projectId: 0
        };
    }
    TaskdetailsComponent.prototype.ngOnChanges = function (changes) {
        var _this = this;
        // ngOnInit():void{
        if (changes['taskId'] && this.taskId !== null) {
            if (this.taskId != null) {
                console.log(this.taskId);
                this.taskService.getTaskDetails(this.taskId).subscribe(function (details) {
                    console.log(_this.taskId);
                    _this.taskDetail = details;
                    console.log(_this.taskDetail);
                });
                // }
            }
        }
    };
    TaskdetailsComponent.prototype.selectTask = function (id) {
        {
            if (this.selectedTaskId === id) {
                this.selectedTaskId = null;
            }
            else {
                this.selectedTaskId = id;
            }
            this.taskService.setSelectedTaskId(id);
        }
    };
    TaskdetailsComponent.prototype.selectProject = function (id) {
        if (this.selectedProjectId === id) {
            this.selectedProjectId = null;
        }
        else {
            this.selectedProjectId = id;
        }
        this.router.navigate(["teammember/projectdetails"]);
        this.projectService.setSelectedProjectId(id);
    };
    __decorate([
        core_1.Input()
    ], TaskdetailsComponent.prototype, "taskId");
    TaskdetailsComponent = __decorate([
        core_1.Component({
            selector: 'app-taskdetails',
            templateUrl: './taskdetails.component.html',
            styleUrls: ['./taskdetails.component.css']
        })
    ], TaskdetailsComponent);
    return TaskdetailsComponent;
}());
exports.TaskdetailsComponent = TaskdetailsComponent;
