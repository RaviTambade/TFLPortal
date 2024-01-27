export class CalendarDay {
    public date: Date;
    public isPastDate: boolean;
    public isToday: boolean;
  
    public getDateString() {
      return this.date.toISOString().split("T")[0]
    }
  
    constructor(d: Date) {
      this.date = d;
      this.isPastDate = d.setHours(0, 0, 0, 0) < new Date().setHours(0, 0, 0, 0);
      this.isToday = d.setHours(0, 0, 0, 0) == new Date().setHours(0, 0, 0, 0);
    }
  }