import { Component } from '@angular/core';
import { Chart } from 'chart.js';
import { WorkmgmtService } from 'src/app/shared/services/workmgmt.service';
import { WorkCategoryDetails } from '../../models/workcategorydetails';
import { LocalStorageKeys } from 'src/app/shared/Enums/local-storage-keys';
import { Project } from 'src/app/projects/Models/project';
import { ProjectService } from 'src/app/shared/services/project.service';


@Component({
  selector: 'timesheet-employee-work-chart',
  templateUrl: './timesheet-employee-work-chart.component.html',
  styleUrls: ['./timesheet-employee-work-chart.component.css'],
})
export class TimesheetEmployeeWorkChartComponent {
  employeeId: number = 0;
  fromDate: string | undefined;
  toDate: string | undefined;
  workCategory: WorkCategoryDetails = {
    userStory: 0,
    task: 0,
    bug: 0,
    issues: 0,
    meeting: 0,
    learning: 0,
    mentoring: 0,
    clientCall: 0,
    other: 0,
    label: '',
  };
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
    }
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

  constructor(private workmgmtSvc: WorkmgmtService,private projectSvc:ProjectService) {}
  ngOnInit(): void {
    this.employeeId = Number(localStorage.getItem(LocalStorageKeys.employeeId));
    this.onIntervalChange();
    this.createChart();
    this.projectSvc.getProjectsOfEmployee(this.employeeId).subscribe((res)=>{
      this.projects=[...this.projects, ...res];
    })
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

      // case 'custom':
      //   break;
    }
    if (this.fromDate && this.toDate) {
      // this.getWorkHours(this.employeeId, this.fromDate, this.toDate);
      this.getChartData();
    }
  }

  getChartData() {
    this.workmgmtSvc
      .getActivityWiseHours(this.employeeId, this.selectedInterval,this.selectedProjectId)
      .subscribe((res) => {
        this.WorkCategoryDetails = res;
        this.chart.data.datasets = [];
        this.workCategory = new WorkCategoryDetails(0,0,0,0,0,0,0,0,0,'');
        this.WorkCategoryDetails.forEach((category, index) => {
          let cl = this.workmgmtSvc.randomColorPicker();
          let obj = {
            label: this.getLabelName(
              category.label,
              index
            ) /* "week"+ (index+1)*/,
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
          this.workCategory.userStory += Number(category.userStory);
          this.workCategory.task += Number(category.task);
          this.workCategory.clientCall += Number(category.clientCall);
          this.workCategory.meeting += Number(category.meeting);
          this.workCategory.issues += Number(category.issues);
          this.workCategory.bug += Number(category.bug);
          this.workCategory.mentoring += Number(category.mentoring);
          this.workCategory.learning += Number(category.learning);
          this.workCategory.other += Number(category.other);
        });
        this.chart.update();
      });
  }

  getLabelName(orignalLabel: string, index: number) {
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
