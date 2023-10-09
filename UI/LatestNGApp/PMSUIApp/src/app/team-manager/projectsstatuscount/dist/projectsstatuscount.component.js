"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ProjectsstatuscountComponent = void 0;
var core_1 = require("@angular/core");
var ng2_charts_1 = require("ng2-charts");
var ProjectsstatuscountComponent = /** @class */ (function () {
    function ProjectsstatuscountComponent(employeeService, biService) {
        this.employeeService = employeeService;
        this.biService = biService;
        this.teamManagerId = 0;
        this.projectStatusCount = [];
        this.barChartOptions = {
            responsive: true,
            // We use these empty structures as placeholders for dynamic theming.
            scales: {
                x: {},
                y: {
                    min: 10
                }
            },
            plugins: {
                legend: {
                    display: true
                },
                datalabels: {
                    anchor: 'end',
                    align: 'end'
                }
            }
        };
        this.barChartType = 'bar';
        this.barChartPlugins = [];
        this.barChartData = {
            labels: [],
            datasets: [
                { data: [], label: 'Completed', backgroundColor: 'rgba(0, 153, 0, 0.5)' },
                { data: [], label: 'In-Progress', backgroundColor: 'rgba(255, 165, 0, 0.5)' },
                { data: [], label: 'Pending', backgroundColor: 'rgba(255, 0, 0, 0.5)' },
            ]
        };
    }
    ProjectsstatuscountComponent.prototype.ngOnInit = function () {
        var _this = this;
        var userId = localStorage.getItem('userId');
        this.employeeService.getEmployeeId(Number(userId)).subscribe(function (res) {
            _this.teamManagerId = res;
            _this.getProjectStatusCount(_this.teamManagerId);
        });
    };
    ProjectsstatuscountComponent.prototype.getProjectStatusCount = function (teamManagerId) {
        var _this = this;
        this.biService.getProjectsStatusCount(teamManagerId).subscribe(function (res) {
            _this.projectStatusCount = res;
            _this.barChartData.labels = _this.projectStatusCount.map(function (project) { return project.projectTitle; }).filter(function (number, index, array) { return array.indexOf(number) === index; });
            _this.barChartData.datasets[0].data = _this.projectStatusCount.filter(function (p) { return p.status == "Completed"; }).map(function (project) { return project.taskStatusCount; });
            _this.barChartData.datasets[1].data = _this.projectStatusCount.filter(function (p) { return p.status == "In-Progress"; }).map(function (project) { return project.taskStatusCount; });
            _this.barChartData.datasets[2].data = _this.projectStatusCount.filter(function (p) { return p.status == "Pending"; }).map(function (project) { return project.taskStatusCount; });
        });
    };
    __decorate([
        core_1.ViewChild(ng2_charts_1.BaseChartDirective)
    ], ProjectsstatuscountComponent.prototype, "chart");
    ProjectsstatuscountComponent = __decorate([
        core_1.Component({
            selector: 'app-projectsstatuscount',
            templateUrl: './projectsstatuscount.component.html',
            styleUrls: ['./projectsstatuscount.component.css']
        })
    ], ProjectsstatuscountComponent);
    return ProjectsstatuscountComponent;
}());
exports.ProjectsstatuscountComponent = ProjectsstatuscountComponent;
