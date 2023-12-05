import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { TimeSheetEntry } from '../models/timesheetentry';
import { TimeSheet } from '../models/timesheet';

@Injectable({
  providedIn: 'root',
})
export class TimeSheetService {
  constructor(private http: HttpClient) {}

  private timeSheetUrl: string =
    'http://localhost:5263/api/workmgmt/timesheets';

  getTimeSheetsOfEmployee(employeeId: number): Observable<TimeSheet[]> {
    let url = `${this.timeSheetUrl}/${employeeId}`;
    return this.http.get<TimeSheet[]>(url);
  }

  getTimeSheetDetails(timeSheetId: number): Observable<TimeSheetEntry[]> {
    let url = `${this.timeSheetUrl}/timesheetentries/${timeSheetId}`;
    return this.http.get<TimeSheetEntry[]>(url);
  }

  addTimeSheetEntry(timesheetEntry: TimeSheetEntry): Observable<any> {
    let url = this.timeSheetUrl;
    return this.http.post(url, timesheetEntry);
  }

  getTimeSheetId(employeeId: number, date: string): Observable<number> {
    let url = `${this.timeSheetUrl}/timesheet/id/${employeeId}/${date}`;
    return this.http.get<number>(url);
  }

  changeTimeSheetStatus(
    timeSheetId: number,
    timesheet: TimeSheet
  ): Observable<boolean> {
    let url = `${this.timeSheetUrl}/${timeSheetId}`;
    return this.http.put<boolean>(url, timesheet);
  }
}
