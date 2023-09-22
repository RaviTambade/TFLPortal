"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AddprojectComponent = void 0;
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var AddprojectComponent = /** @class */ (function () {
    function AddprojectComponent(formBuilder, employeeService, projectService) {
        this.formBuilder = formBuilder;
        this.employeeService = employeeService;
        this.projectService = projectService;
        this.managerId = 0;
        this.addProjectForm = this.formBuilder.group({
            title: ['', forms_1.Validators.required],
            startDate: ['', forms_1.Validators.required],
            endDate: ['', forms_1.Validators.required],
            description: ['', [forms_1.Validators.required]],
            status: ['', [forms_1.Validators.required]],
            teamManagerId: ['', [forms_1.Validators.required]]
        });
    }
    AddprojectComponent.prototype.ngOnInit = function () {
        var _this = this;
        var userId = localStorage.getItem('userId');
        this.employeeService.getEmployeeId(Number(userId)).subscribe(function (res) {
            _this.managerId = res;
            console.log(_this.managerId);
        });
    };
    AddprojectComponent.prototype.onSubmit = function () {
        var _this = this;
        var _a, _b, _c, _d, _e, _f;
        if (this.addProjectForm.valid) {
            var project = {
                id: 0,
                title: (_a = this.addProjectForm.get('title')) === null || _a === void 0 ? void 0 : _a.value,
                startDate: (_b = this.addProjectForm.get('startDate')) === null || _b === void 0 ? void 0 : _b.value,
                endDate: (_c = this.addProjectForm.get('endDate')) === null || _c === void 0 ? void 0 : _c.value,
                description: (_d = this.addProjectForm.get('description')) === null || _d === void 0 ? void 0 : _d.value,
                status: (_e = this.addProjectForm.get('status')) === null || _e === void 0 ? void 0 : _e.value,
                teamManagerId: (_f = this.addProjectForm.get('teamManagerId')) === null || _f === void 0 ? void 0 : _f.value
            };
            this.projectService.addProject(project).subscribe(function (res) {
                if (res) {
                    alert('project added Sucessfully');
                    _this.addProjectForm.reset();
                }
            });
        }
    };
    AddprojectComponent = __decorate([
        core_1.Component({
            selector: 'app-addproject',
            templateUrl: './addproject.component.html',
            styleUrls: ['./addproject.component.css']
        })
    ], AddprojectComponent);
    return AddprojectComponent;
}());
exports.AddprojectComponent = AddprojectComponent;
