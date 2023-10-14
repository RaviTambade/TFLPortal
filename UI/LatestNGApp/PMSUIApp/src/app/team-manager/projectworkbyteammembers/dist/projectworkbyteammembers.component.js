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
        this.selectedDateRange = "today";
        this.selectedGivenDate = new Date().toISOString().split('T')[0];
        this.dateRangeOptions = ['today', 'yesterday', 'weekly', 'monthly', 'custom'];
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
                    label: 'Employees',
                    backgroundColor: '#a506b4'
                },
            ]
        };
    }
    ProjectworkbyteammembersComponent.prototype.ngOnInit = function () {
        var _this = this;
        var userId = localStorage.getItem('userId');
        this.employeeService.getEmployeeId(Number(userId)).subscribe(function (res) {
            _this.teamManagerId = res;
            _this.fetchProjectWork(_this.selectedProjectId, _this.selectedGivenDate, _this.selectedDateRange);
            console.log(_this.selectedProjectId);
            _this.projectService
                .getManagerProjectNames(_this.teamManagerId)
                .subscribe(function (res) {
                console.log(res);
                _this.managerProjects = res;
            });
        });
    };
    ProjectworkbyteammembersComponent.prototype.fetchProjectWork = function (projectId, givenDate, dateRange) {
        var _this = this;
        this.biService.getTotalHoursOfMembers(projectId, givenDate, dateRange).subscribe(function (res) {
            _this.projectWorkByMember = res;
            var teamMemberIds = _this.projectWorkByMember.map(function (u) { return u.userId; });
            console.log(teamMemberIds);
            if (teamMemberIds !== null) {
                var teamMemberStringIds = teamMemberIds.join(',');
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
                                _this.barChartData.datasets[0].data =
                                    _this.projectWorkByMember.map(function (work) { return work.totalWorkingHour; });
                            }
                        });
                });
            }
        });
    };
    // onProjectChange(newProjectId: number,newGivenDate:string,newDateRange:string): void {
    //   this.selectedProjectId = newProjectId;
    //   this.fetchProjectWork(newProjectId,newGivenDate,newDateRange);
    //   console.log(newProjectId);
    // }
    ProjectworkbyteammembersComponent.prototype.onButtonClick = function () {
        this.fetchProjectWork(this.selectedProjectId, this.selectedGivenDate, this.selectedDateRange);
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
