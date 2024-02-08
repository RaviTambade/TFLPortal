import { Component } from '@angular/core';
import { Chart, registerables } from 'chart.js';
import { Project } from 'src/app/shared/Entities/Projectmgmt/Project';
import { MemberPerformance } from 'src/app/shared/Entities/Timesheetmgmt/performance';
Chart.register(...registerables);

import { HourConvertorPipe } from 'src/app/shared/pipes/hour-convertor.pipe';
import { ProjectService } from 'src/app/shared/services/ProjectMgmt/project.service';
import { TimesheetService } from 'src/app/shared/services/Timesheet/timesheet.service';

@Component({
  selector: 'app-montlyworkutilization',
  templateUrl: './montlyworkutilization.component.html',
})
export class MontlyworkutilizationComponent {

  employeeId: number = 0;
  fromDate: string ='';
  toDate: string ='';
  intervals: string[] = ['week', 'month', 'year'];
  selectedInterval: string = this.intervals[2];

  projects: Project[] = [
    {
      id: 0,
      title: 'All',
      startDate: '',
      status: '',
      endDate: '',
      description: '',
    },
  ];
  selectedProjectId = this.projects[0].id;
  memberUtilizations: MemberPerformance|undefined;
  chart: any;

  createChart() {
    this.chart = new Chart('MyChart', {
      type: 'bar', //this denotes tha type of chart

      data: {
        // values on X-Axis
        labels: [
          // 'A','B','C','D','E'
        ],
        datasets: [{
          label:'',
          data:[
            // 10,10,30,40,50
          ],
          backgroundColor:[
            // 'red','green','yellow','blue','violet'
          ],

        }],
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
    private timesheetService:TimesheetService,
    private projectService: ProjectService
  ) {}
  ngOnInit(): void {
    this.employeeId = 10;
    // Number(localStorage.getItem(LocalStorageKeys.employeeId));
    this.createChart();
    this.onIntervalChange();
    // this.projectService.getProjects(this.employeeId).subscribe((res) => {
    //   console.log(res)
    //   this.projects = [...this.projects, ...res];
    // });
  }

  onIntervalChange() {
    switch (this.selectedInterval) {
      case 'week':
        const week = this.timesheetService.getWeekInfo(new Date());
        this.fromDate = week.startDate;
        this.toDate = week.endDate;
        break;

      case 'month':
        const currentmonth = new Date().getMonth();
        this.fromDate = this.timesheetService.firstDayOfMonth(currentmonth);
        this.toDate = this.timesheetService.lastDayofMonth(currentmonth);
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
    this.timesheetService
      .getEmployeeUtilizationByProject(
        this.employeeId,
        this.selectedProjectId,
        this.fromDate,
        this.toDate
      )
      .subscribe((res) => {
        this.memberUtilizations = res;
        this.chart.data.datasets[0].data=[]
        this.chart.data.datasets[0].backgroundColor=[]
        this.chart.data.labels=[]
        this.memberUtilizations.works.forEach((m) => {
          let cl = this.timesheetService.randomColorPicker();
          this.chart.data.labels.push(m.activity)
          this.chart.data.datasets[0].data.push(m.duration);
          this.chart.data.datasets[0].backgroundColor.push(cl);
        });
        this.chart.update();
      });
  }

 
}
