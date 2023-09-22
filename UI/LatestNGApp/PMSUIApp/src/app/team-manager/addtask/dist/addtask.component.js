"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AddtaskComponent = void 0;
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var AddtaskComponent = /** @class */ (function () {
    function AddtaskComponent(formBuilder, employeeService, taskService, route) {
        this.formBuilder = formBuilder;
        this.employeeService = employeeService;
        this.taskService = taskService;
        this.route = route;
        this.projectId = 0;
        this.managerId = 0;
        this.addTaskForm = this.formBuilder.group({
            title: ['', forms_1.Validators.required],
            date: ['', forms_1.Validators.required],
            fromTime: ['', forms_1.Validators.required],
            toTime: ['', [forms_1.Validators.required]],
            status: ['', [forms_1.Validators.required]],
            description: ['', [forms_1.Validators.required]],
            projectId: ['', [forms_1.Validators.required]]
        });
    }
    AddtaskComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.projectId = params["projectId"];
        });
    };
    AddtaskComponent.prototype.onSubmit = function () {
        var _this = this;
        var _a, _b, _c, _d, _e, _f, _g;
        if (this.addTaskForm.valid) {
            var task = {
                title: (_a = this.addTaskForm.get('title')) === null || _a === void 0 ? void 0 : _a.value,
                date: (_b = this.addTaskForm.get('date')) === null || _b === void 0 ? void 0 : _b.value,
                fromTime: (_c = this.addTaskForm.get('fromTime')) === null || _c === void 0 ? void 0 : _c.value,
                toTime: (_d = this.addTaskForm.get('toTime')) === null || _d === void 0 ? void 0 : _d.value,
                status: (_e = this.addTaskForm.get('status')) === null || _e === void 0 ? void 0 : _e.value,
                description: (_f = this.addTaskForm.get('description')) === null || _f === void 0 ? void 0 : _f.value,
                projectId: (_g = this.addTaskForm.get('projectId')) === null || _g === void 0 ? void 0 : _g.value
            };
            this.taskService.addTask(task).subscribe(function (res) {
                if (res) {
                    alert('task added Sucessfully');
                    _this.addTaskForm.reset();
                }
            });
        }
    };
    AddtaskComponent = __decorate([
        core_1.Component({
            selector: 'app-addtask',
            templateUrl: './addtask.component.html',
            styleUrls: ['./addtask.component.css']
        })
    ], AddtaskComponent);
    return AddtaskComponent;
}());
exports.AddtaskComponent = AddtaskComponent;
