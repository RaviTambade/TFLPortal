import { Component } from '@angular/core';
import { Chart } from 'chart.js';
import { WorkmgmtService } from 'src/app/shared/services/workmgmt.service';
import { workCategoryDetails } from '../../models/workCategoryDetails';
import { LocalStorageKeys } from 'src/app/shared/Enums/local-storage-keys';
import { Project } from 'src/app/projects/Models/project';
import { ProjectService } from 'src/app/shared/services/project.service';

type Week = {
  startDate: string;
  endDate: string;
};
@Component({
  selector: 'app-timesheet-employee-work-chart',
  templateUrl: './timesheet-employee-work-chart.component.html',
  styleUrls: ['./timesheet-employee-work-chart.component.css'],
})
export class TimesheetEmployeeWorkChartComponent {
  employeeId: number = 0;
  fromDate: string | undefined;
  toDate: string | undefined;
  workCategory: workCategoryDetails = {
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
      teamManagerId: 0,
      status: '',
      endDate: '',
      description: '',
    }
  ];
  selectedProjectId = this.projects[0].id;

  workCategoryDetails: workCategoryDetails[] = [];

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
        const week = this.getWeekInfo(new Date());
        this.fromDate = week.startDate;
        this.toDate = week.endDate;
        break;

      case 'month':
        const currentmonth = new Date().getMonth();
        this.fromDate = this.firstDayOfMonth(currentmonth);
        this.toDate = this.lastDayofMonth(currentmonth);
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
      .getEmployeeActivityWiseHours(this.employeeId, this.selectedInterval,this.selectedProjectId)
      .subscribe((res) => {
        this.workCategoryDetails = res;
        this.chart.data.datasets = [];
        this.workCategory = new workCategoryDetails(0,0,0,0,0,0,0,0,0,'');
        this.workCategoryDetails.forEach((category, index) => {
          let cl = this.randomColorPicker();
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

  firstDayOfMonth(month: number): string {
    const currentYear = new Date().getFullYear();
    const date = new Date(currentYear, month, 1);
    return this.ConvertDateYYYY_MM_DD(date);
  }

  lastDayofMonth(month: number) {
    const currentYear = new Date().getFullYear();
    const nextmonth: number = ++month;
    const date = new Date(currentYear, nextmonth, 0);
    return this.ConvertDateYYYY_MM_DD(date);
  }

  getWeekInfo(date: Date): Week {
    const dayOfWeek = date.getUTCDay();
    const startOfWeek = new Date(date);
    startOfWeek.setUTCDate(date.getUTCDate() - dayOfWeek);
    const endOfWeek = new Date(startOfWeek);
    endOfWeek.setUTCDate(startOfWeek.getUTCDate() + 6);
    return {
      startDate: this.ConvertDateYYYY_MM_DD(startOfWeek),
      endDate: this.ConvertDateYYYY_MM_DD(endOfWeek),
    };
  }

  ConvertDateYYYY_MM_DD(date: Date): string {
    const formattedDate = date
      .toLocaleDateString(undefined, {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
      })
      .split('/')
      .reverse()
      .join('-');
    return formattedDate;
  }

  randomColorPicker(): string {
    let result = '';
    for (let i = 0; i < 6; ++i) {
      const value = Math.floor(16 * Math.random());
      result += value.toString(16);
    }
    return '#' + result;
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
