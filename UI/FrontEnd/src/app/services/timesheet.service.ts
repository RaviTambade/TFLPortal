import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { TimesheetInfo } from '../models/timesheet-info';
import { Timesheet } from '../models/timesheet';

@Injectable({
  providedIn: 'root'
})
export class TimesheetService {

  private subject = new Subject<any>();
  constructor(private http: HttpClient) { }

  getAllTimesheets(id: any, date: string): Observable<any> {
    let url = "http://localhost:5161/api/Timesheet/" + id + "/" +date;
    return this.http.get<any>(url, id);
  }

  getTimesheet(timesheetid: any): Observable<any> {
    let url = "http://localhost:5161/api/Timesheet/getdetails/" + timesheetid;
    return this.http.get<any>(url, timesheetid);
  }

  addTimesheet(timesheet: TimesheetInfo): Observable<any> {
    let url = "http://localhost:5161/api/Timesheet/timesheet";
    return this.http.post<TimesheetInfo>(url, timesheet);
  }

  updateTimesheet(id: any): Observable<any> {
    let url = "http://localhost:5161/api/Timesheet/" + id;
    return this.http.put<Timesheet>(url, id);
  }

  deleteTimesheet(id: any): Observable<any> {
    let url = "http://localhost:5161/api/Timesheet/" + id;
    return this.http.delete<Timesheet>(url);
  }
}
