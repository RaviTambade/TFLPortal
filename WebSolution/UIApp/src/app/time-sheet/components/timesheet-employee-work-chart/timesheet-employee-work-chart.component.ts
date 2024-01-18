import { Component } from '@angular/core';
import { Chart } from 'chart.js';
import { WorkmgmtService } from 'src/app/shared/services/workmgmt.service';
import { WorkCategoryDetails } from '../../models/workcategorydetails';
import { LocalStorageKeys } from 'src/app/shared/enums/local-storage-keys';
import { Project } from 'src/app/projects/Models/project';
import { ProjectService } from 'src/app/shared/services/project.service';
import { HourConvertorPipe } from 'src/app/shared/pipes/hour-convertor.pipe';

@Component({
  selector: 'timesheet-employee-work-chart',
  templateUrl: './timesheet-employee-work-chart.component.html',
  styleUrls: ['./timesheet-employee-work-chart.component.css'],
})
export class TimesheetEmployeeWorkChartComponent {
  employeeId: number = 0;
  fromDate: string | undefined;
  toDate: string | undefined;
  intervals: string[] = ['week', 'month', 'year'];
  selectedInterval: string = this.intervals[0];

  projects: Project[] = [
    {
      id: 0,
      title: 'All',
      startDate: '',
      managerId: 0,
      status: '',
      endDate: '',
      description: '',
    },
  ];
  selectedProjectId = this.projects[0].id;
  WorkCategoryDetails: WorkCategoryDetails[] = [];
  chart: any;

  createChart() {
    this.chart = new Chart('MyChart', {
      type: 'bar', //this denotes tha type of chart

      data: {
        // values on X-Axis
        labels: [
          'userStory',
          'task',
          'clientCall',
          'meeting',
          'issues',
          'bug',
          'mentoring',
          'learning',
          'other',
        ],
        datasets: [],
      },
      options: {
        aspectRatio: 2.5,

        plugins: {
          title: {
            display: true,
            text: 'ActivityWise Time Utilization In Hours',
          },
          tooltip: {
            enabled: true,
            usePointStyle: true,
            callbacks: {
              label: function (context) {
                return (
                  context.dataset.label +
                  ' : ' +
                  new HourConvertorPipe().transform(
                    context.dataset.data.at(context.dataIndex)!
                  )
                );
              },
            },
          },
        },
        scales: {
          y: {
            title: {
              display: true,
              text: 'Hours',
            },
          },
          x: {
            title: {
              display: true,
              text: 'Activities',
            },
          },
        },
      },
    });
  }

  constructor(
    private workmgmtSvc: WorkmgmtService,
    private projectSvc: ProjectService
  ) {}
  ngOnInit(): void {
    this.employeeId = Number(localStorage.getItem(LocalStorageKeys.employeeId));
    this.onIntervalChange();
    this.createChart();
    this.projectSvc.getProjectsOfEmployee(this.employeeId).subscribe((res) => {
      this.projects = [...this.projects, ...res];
    });
  }

  onIntervalChange() {
    switch (this.selectedInterval) {
      case 'week':
        const week = this.workmgmtSvc.getWeekInfo(new Date());
        this.fromDate = week.startDate;
        this.toDate = week.endDate;
        break;

      case 'month':
        const currentmonth = new Date().getMonth();
        this.fromDate = this.workmgmtSvc.firstDayOfMonth(currentmonth);
        this.toDate = this.workmgmtSvc.lastDayofMonth(currentmonth);
        break;

      case 'year':
        const currentYear = new Date().getFullYear();

        this.fromDate = `${currentYear}-01-01`;
        this.toDate = `${currentYear}-12-31`;
        break;
    }
    if (this.fromDate && this.toDate) {
      this.getChartData();
    }
  }

  getChartData() {
    this.workmgmtSvc
      .getActivityWiseHours(
        this.employeeId,
        this.selectedInterval,
        this.selectedProjectId
      )
      .subscribe((res) => {
        this.WorkCategoryDetails = res;
        this.chart.data.datasets = [];

        this.WorkCategoryDetails.forEach((category) => {
          let cl = this.workmgmtSvc.randomColorPicker();
          let obj = {
            label: this.getLabelName(category.label),
            data: [
              category.userStory,
              category.task,
              category.clientCall,
              category.meeting,
              category.issues,
              category.bug,
              category.mentoring,
              category.learning,
              category.other,
            ],
            backgroundColor: cl,
            borderColor: cl,
          };
          this.chart.data.datasets.push(obj);
        });
        this.chart.update();
      });
  }

  getLabelName(orignalLabel: string) {
    let label: any = '';
    switch (this.selectedInterval) {
      case 'week':
        label = new Date(
          orignalLabel.slice(0, 10).split('-').reverse().join('-')
        )
          .toDateString()
          .slice(0, 10);
        break;

      case 'month':
        label = new Date(
          orignalLabel.slice(0, 10).split('-').reverse().join('-')
        )
          .toDateString()
          .slice(0, 10);
        break;

      case 'year':
        label = orignalLabel;
        break;
    }
    return label;
  }
}
