import { Component } from '@angular/core';
import { CalendarDay } from './CalenderDay';

@Component({
  selector: 'app-calender',
  templateUrl: './calender.component.html',
  styleUrls: ['./calender.component.css'],
})
export class CalenderComponent {
  public calendar: CalendarDay[] = [];
  public monthNames = ['January','February','March','April','May','June','July','August','September','October','November','December',];
  public displayMonth!: string;
  private holidayDays: string[] = ['2023-12-02', '2023-12-17', '2023-12-15'];
  private monthIndex: number = 0;
  clickedDate: any;

  projects: any[] = [
    {
      projectName: 'Ekrushi',
      startDate: '2023-12-02',
      endDate: '2023-12-17',
    },
    {
      projectName: 'TFLPortal',
      startDate: '2023-12-02',
      endDate: '2023-12-29',
    },
  ];

  ngOnInit(): void {
    this.projects.forEach((project) => {
      project.color = this.randomColorPicker();
    });
    this.generateCalendarDays(this.monthIndex);
  }

  private generateCalendarDays(monthIndex: number): void {
    this.calendar = [];

    let day: Date = new Date(
      new Date().setMonth(new Date().getMonth() + monthIndex)
    );
  
    this.displayMonth = this.monthNames[day.getMonth()] + day.getFullYear();

    let startingDateOfCalendar = this.getStartDateForCalendar(day);

    let dateToAdd = startingDateOfCalendar;

    for (var i = 0; i < 35; i++) {
      this.calendar.push(new CalendarDay(new Date(dateToAdd)));
      dateToAdd = new Date(dateToAdd.setDate(dateToAdd.getDate() + 1));
    }
  }

  private getStartDateForCalendar(selectedDate: Date) {
    let lastDayOfPreviousMonth = new Date(selectedDate.setDate(0));

    // start by setting the starting date of the calendar same as the last day of previous month
    let startingDateOfCalendar: Date = lastDayOfPreviousMonth;

    // but since we actually want to find the last Monday of previous month
    // we will start going back in days intil we encounter our last Monday of previous month
    if (startingDateOfCalendar.getDay() != 1) {
      do {
        startingDateOfCalendar = new Date(
          startingDateOfCalendar.setDate(startingDateOfCalendar.getDate() - 1)
        );
      } while (startingDateOfCalendar.getDay() != 1);
    }

    return startingDateOfCalendar;
  }

  public increaseMonth() {
    this.monthIndex++;
    this.generateCalendarDays(this.monthIndex);
  }

  public decreaseMonth() {
    this.monthIndex--;
    this.generateCalendarDays(this.monthIndex);
  }

  public setCurrentMonth() {
    this.monthIndex = 0;
    this.generateCalendarDays(this.monthIndex);
  }

  randomColorPicker(): string {
    let result = '';
    for (let i = 0; i < 6; ++i) {
      const value = Math.floor(16 * Math.random());
      result += value.toString(16);
    }
    return '#' + result;
  }

  onClick(date: Date) {
    this.clickedDate = date;
    console.log(this.ConvertDateYYYY_MM_DD(date));
  }

  isholiday(date: Date): boolean {
    let formatedDate = this.ConvertDateYYYY_MM_DD(date);
    return this.holidayDays.includes(formatedDate);
  }

  isDateClicked(date: Date): boolean {
    return this.clickedDate == date;
  }

  isProjectOngoing(date: Date, projectName: string): boolean {
    let formatedDate = this.ConvertDateYYYY_MM_DD(date);
    let project = this.projects.find((p) => p.projectName == projectName);
    return formatedDate >= project.startDate && formatedDate <= project.endDate;
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
}
