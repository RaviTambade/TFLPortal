"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ProjectworkbyteammembersComponent = void 0;
var core_1 = require("@angular/core");
require("chartjs-plugin-datalabels");
var ProjectworkbyteammembersComponent = /** @class */ (function () {
    function ProjectworkbyteammembersComponent(biService, userService, projectService, employeeService) {
        this.biService = biService;
        this.userService = userService;
        this.projectService = projectService;
        this.employeeService = employeeService;
        this.projectId = null;
        this.teamManagerId = 0;
        this.managerProjects = [];
        this.selectedProjectId = 1;
        this.barChartOptions = {
            responsive: true,
            // We use these empty structures as placeholders for dynamic theming.
            scales: {
                x: {},
                y: {
                    min: 0.5
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
                {
                    data: [],
                    label: 'WorkingHours'
                },
            ]
        };
    }
    ProjectworkbyteammembersComponent.prototype.ngOnInit = function () {
        var _this = this;
        var userId = localStorage.getItem('userId');
        this.employeeService.getEmployeeId(Number(userId)).subscribe(function (res) {
            _this.teamManagerId = res;
            _this.fetchProjectWork(_this.selectedProjectId);
            console.log(_this.selectedProjectId);
            _this.projectService.getManagerProjectNames(_this.teamManagerId).subscribe(function (res) {
                console.log(res);
                _this.managerProjects = res;
            });
        });
    };
    ProjectworkbyteammembersComponent.prototype.fetchProjectWork = function (projectId) {
        var _this = this;
        this.biService.getTotalProjectWorkByMembers(projectId).subscribe(function (res) {
            _this.projectWorkByMember = res;
            var teamMemberIds = _this.projectWorkByMember.map(function (u) { return u.userId; });
            console.log(teamMemberIds);
            if (teamMemberIds !== null) {
                var teamMemberStringIds = teamMemberIds.join(",");
                _this.userService
                    .getUserNamesWithId(teamMemberStringIds)
                    .subscribe(function (res) {
                    var teamManagerName = res;
                    if (_this.projectWorkByMember != undefined)
                        _this.projectWorkByMember.forEach(function (item) {
                            var matchingItem = teamManagerName.find(function (element) { return element.id === item.userId; });
                            if (matchingItem != undefined)
                                item.employeeName = matchingItem.name;
                            if (_this.projectWorkByMember != undefined) {
                                _this.barChartData.labels = _this.projectWorkByMember.map(function (work) { return work.employeeName; });
                                _this.barChartData.datasets[0].data = _this.projectWorkByMember.map(function (work) { return work.totalWorkingHour; });
                                _this.barChartData.datasets[0].backgroundColor = _this.getBarColors(_this.projectWorkByMember.length);
                            }
                        });
                });
            }
        });
    };
    ProjectworkbyteammembersComponent.prototype.onProjectChange = function (newProjectId) {
        this.selectedProjectId = newProjectId;
        this.fetchProjectWork(newProjectId);
        console.log(newProjectId);
    };
    ProjectworkbyteammembersComponent.prototype.getBarColors = function (dataLength) {
        var colors = [];
        for (var i = 0; i < dataLength; i++) {
            colors.push(this.getRandomColor());
        }
        return colors;
    };
    ProjectworkbyteammembersComponent.prototype.getRandomColor = function () {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    };
    __decorate([
        core_1.Input()
    ], ProjectworkbyteammembersComponent.prototype, "projectId");
    ProjectworkbyteammembersComponent = __decorate([
        core_1.Component({
            selector: 'app-projectworkbyteammembers',
            templateUrl: './projectworkbyteammembers.component.html',
            styleUrls: ['./projectworkbyteammembers.component.css']
        })
    ], ProjectworkbyteammembersComponent);
    return ProjectworkbyteammembersComponent;
}());
exports.ProjectworkbyteammembersComponent = ProjectworkbyteammembersComponent;
