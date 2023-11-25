import { Component } from '@angular/core';
import { CalendarDay } from './CalenderDay';

@Component({
  selector: 'app-calender',
  templateUrl: './calender.component.html',
  styleUrls: ['./calender.component.css']
})
export class CalenderComponent {
  public calendar: CalendarDay[] = [];
  public monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];
  public displayMonth!: string;
  private monthIndex: number = 0;

  ngOnInit(): void {
    this.generateCalendarDays(this.monthIndex);
  }

  private generateCalendarDays(monthIndex: number): void {
    this.calendar = [];

    let day: Date = new Date(new Date().setMonth(new Date().getMonth() + monthIndex));
    console.log("🚀 ~ generateCalendarDays ~ day:", day);

    this.displayMonth = this.monthNames[day.getMonth()] +day.getFullYear();

    let startingDateOfCalendar = this.getStartDateForCalendar(day);

    let dateToAdd = startingDateOfCalendar;

    for (var i = 0; i < 35; i++) {
      this.calendar.push(new CalendarDay(new Date(dateToAdd)));
      dateToAdd = new Date(dateToAdd.setDate(dateToAdd.getDate() + 1));
    }
  }

  private getStartDateForCalendar(selectedDate: Date){  
    let lastDayOfPreviousMonth = new Date(selectedDate.setDate(0));
    console.log("🚀 ~ getStartDateForCalendar ~ lastDayOfPreviousMonth:", lastDayOfPreviousMonth);

    // start by setting the starting date of the calendar same as the last day of previous month
    let startingDateOfCalendar: Date = lastDayOfPreviousMonth;

    // but since we actually want to find the last Monday of previous month
    // we will start going back in days intil we encounter our last Monday of previous month
    if (startingDateOfCalendar.getDay() != 1) {
      console.log("🚀 ~ getStartDateForCalendar ~ startingDateOfCalendar:", startingDateOfCalendar.getDay());
      do {
        startingDateOfCalendar = new Date(startingDateOfCalendar.setDate(startingDateOfCalendar.getDate() - 1));
      } while (startingDateOfCalendar.getDay() != 1);
    }

    return startingDateOfCalendar;
  }

   public increaseMonth() {
    this.monthIndex++;
    this.generateCalendarDays(this.monthIndex);
  }

  public decreaseMonth() {
    this.monthIndex--
    this.generateCalendarDays(this.monthIndex);
  }

  public setCurrentMonth() {
    this.monthIndex = 0;
    this.generateCalendarDays(this.monthIndex);
  }


//   public GoToSpecificDate(date:any){

// console.log(date.value);

//   }

}
