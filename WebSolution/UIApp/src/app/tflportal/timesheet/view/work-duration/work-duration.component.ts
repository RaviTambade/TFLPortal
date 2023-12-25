import { Component } from '@angular/core';

import Chart from 'chart.js/auto';
import { WorkCategoryDetails } from '../models/WorkCategoryDetails';
import { WorkmgmtService } from '../workmgmt.service';


type Week = {
  startDate: string;
  endDate: string;
};

@Component({
  selector: 'app-work-duration',
  templateUrl: './work-duration.component.html',
  styleUrls: ['./work-duration.component.css']
})
export class WorkDurationComponent {
  employeeId: number = 10;
  fromDate: string | undefined;
  toDate: string | undefined;
  workCategory: any;
  intervals: string[] = ["week", "month", "year"]
  selectedInterval: string = this.intervals[1];

  shwst: boolean = false;


  WorkCategoryDetails: WorkCategoryDetails[] = [];

  chart: any;



  createChart() {

    this.chart = new Chart("MyChart", {
      type: 'line', //this denotes tha type of chart

      data: {// values on X-Axis
        labels: ["userStory", "task", "clientCall", "meeting", "issues", "bug", "mentoring", "learning", "other"],
        datasets: []
      },
      options: {
        aspectRatio: 2.5
      }

    });
  }




  constructor(private workmgmtSvc: WorkmgmtService) { }
  ngOnInit(): void {
    this.onIntervalChange();

    this.createChart();

  }

  getWorkHours(employeeId: number, fromDate: string, toDate: string) {
    this.workmgmtSvc
      .getWorkDurationOfEmployee(employeeId, fromDate, toDate)
      .subscribe((res) => {
        // console.log(res);
        this.workCategory = res;
      });
  }

  onIntervalChange() {
    switch (this.selectedInterval) {
      case "today":
        this.fromDate = new Date().toISOString().slice(0, 10);
        this.toDate = new Date().toISOString().slice(0, 10);
        break;

      case "week":
        const week = this.getWeekInfo(new Date());
        this.fromDate = week.startDate;
        this.toDate = week.endDate;
        break;

      case "month":
        const currentmonth = new Date().getMonth();
        this.fromDate = this.firstDayOfMonth(currentmonth)
        this.toDate = this.lastDayofMonth(currentmonth)
        break;

      case "year":
        const currentYear = new Date().getFullYear();

        this.fromDate = `${currentYear}-01-01`;
        this.toDate = `${currentYear}-12-31`;
        break;

      case "custom":
        break;
    }
    if (this.fromDate && this.toDate) {
      this.getWorkHours(this.employeeId, this.fromDate, this.toDate);
      this.getChartData();
    }

  }

  getChartData() {

    this.workmgmtSvc.getActivityWiseHours(this.selectedInterval).subscribe((res) => {
      this.WorkCategoryDetails = res;
      this.chart.data.datasets = []
      this.WorkCategoryDetails.forEach((category) => {
        let cl=this.randomColorPicker();
        let obj = {
          label: category.label.slice(0,10),
          data: [category.userStory, category.task, category.clientCall, category.meeting, category.issues, category.bug, category.mentoring, category.learning, category.other],
          backgroundColor:cl ,
          borderColor:cl ,
        }
        this.chart.data.datasets.push(obj)
      })
      this.chart.update();
    })
  }

  firstDayOfMonth(month: number,): string {
    const currentYear = new Date().getFullYear();
    const date = new Date(currentYear, month, 1)
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
      endDate: this.ConvertDateYYYY_MM_DD(endOfWeek)
    };
  }

  ConvertDateYYYY_MM_DD(date: Date): string {
    const formattedDate = date
      .toLocaleDateString(undefined, { year: 'numeric', month: '2-digit', day: '2-digit' })
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

}
