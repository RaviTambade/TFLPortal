import { Component, OnInit, Type } from '@angular/core';
import { WorkmgmtService } from 'src/app/shared/services/workmgmt.service';

type Week = {
  startDate: string;
  endDate: string;
};

@Component({
  selector: 'app-total-work-duration-of-employee',
  templateUrl: './total-work-duration-of-employee.component.html',
  styleUrls: ['./total-work-duration-of-employee.component.css']
})


export class TotalWorkDurationOfEmployeeComponent implements OnInit {
  employeeId: number = 10;
  fromDate: string | undefined;
  toDate: string | undefined;
  workCategory: any;

  intervals: string[] = ["today", "week", "month", "year", "custom"]
  years = [2021, 2022, 2023]
  monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  weeks: Week[] = []

  selectedInterval: string = this.intervals[0];
  selectedYear: number = this.years[this.years.length - 1];
  selectedMonth: number = new Date().getMonth();
  selectedWeek: number = 0;


  constructor(private workmgmtSvc: WorkmgmtService) {}
  ngOnInit(): void {
    this.onIntervalChange();
  }

  getWorkHours(employeeId: number, fromDate: string, toDate: string) {
    this.workmgmtSvc
      .getWorkDurationOfEmployee(employeeId, fromDate, toDate)
      .subscribe((res) => {
        console.log(res);
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
        this.weeks = this.getWeeksInMonth(this.selectedYear, this.selectedMonth);
        this.fromDate = this.weeks.at(this.selectedWeek)?.startDate;
        this.toDate = this.weeks.at(this.selectedWeek)?.endDate;
        break;

      case "month":
        this.fromDate = this.firstDayOfMonth(this.selectedYear, this.selectedMonth)
        this.toDate = this.lastDayofMonth(this.selectedYear, this.selectedMonth)
        break;

      case "year":
        this.fromDate = `${this.selectedYear}-01-01`;
        this.toDate = `${this.selectedYear}-12-31`;
        break;

      case "custom":
        break;
    }
    if (this.fromDate && this.toDate)
      this.getWorkHours(this.employeeId, this.fromDate, this.toDate);
  }

  firstDayOfMonth(year: number, month: number,): string {
    const date = new Date(year, month, 1)
    return this.ConvertDateYYYY_MM_DD(date);
  }


  lastDayofMonth(year: number, month: number) {
    const nextmonth: number = ++month;
    const date = new Date(year, nextmonth, 0);
    // const lastdate: Date = new Date(new Date().setMonth(firstDate.getMonth() + 1));
    // const newdate = new Date(new Date(new Date(lastdate.setDate(0))).setFullYear(year))
    // console.log("🚀 ~ lastDayofMonth ~ newdate:", newdate);
    return this.ConvertDateYYYY_MM_DD(date);
  }


  getWeeksInMonth(year: number, month: number): Week[] {
    const weeks: Week[] = [];
    const firstDayOfMonth = new Date(year, month, 1);
    const nextmonth: number = ++month;
    const lastDayOfMonth = new Date(year, nextmonth, 0);

    let currentDate = new Date(firstDayOfMonth);
    currentDate.setUTCHours(5, 30, 0, 0);

    while (currentDate <= lastDayOfMonth) {
      const weekInfo = this.getWeekInfo(currentDate);
      weeks.push(weekInfo);

      currentDate.setUTCDate(currentDate.getUTCDate() + 7);
    }
    return weeks;
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
}
