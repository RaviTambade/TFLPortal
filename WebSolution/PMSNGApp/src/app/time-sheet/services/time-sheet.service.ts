import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { TimeSheetEntry } from '../models/timesheetentry';
import { TimeSheet } from '../models/timesheet';
import { TimesheetEmployee } from '../models/timesheet-employee';

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

  getTimeSheetEntries(timeSheetId: number): Observable<TimeSheetEntry[]> {
    let url = `${this.timeSheetUrl}/timesheetentries/${timeSheetId}`;
    return this.http.get<TimeSheetEntry[]>(url);
  }

  addTimeSheetEntry(timesheetEntry: TimeSheetEntry): Observable<any> {
    let url = `${this.timeSheetUrl}/timesheetentries`;
    return this.http.post(url, timesheetEntry);
  }

  getTimeSheet(employeeId: number, date: string): Observable<TimesheetEmployee> {
    let url = `${this.timeSheetUrl}/${employeeId}/date/${date}`;
    return this.http.get<TimesheetEmployee>(url);
  }

  insertTimeSheet(employeeId: number, date: string): Observable<boolean> {
    let url = `${this.timeSheetUrl}/${employeeId}/${date}`;
    return this.http.get<boolean>(url);
  }

  changeTimeSheetStatus(
    timeSheetId: number,
    timesheet: TimeSheet
  ): Observable<boolean> {
    let url = `${this.timeSheetUrl}/${timeSheetId}`;
    return this.http.put<boolean>(url, timesheet);
  }

  updateTimeSheetEntry(
    timeSheetEntryId: number,
    timeSheetEntry: TimeSheetEntry
  ): Observable<boolean> {
    let url = `${this.timeSheetUrl}/timesheetentries/${timeSheetEntryId}`;
    return this.http.put<boolean>(url, timeSheetEntry);
  }

  removeTimeSheetEntry(timeSheetEntryId: number): Observable<boolean> {
    let url = `${this.timeSheetUrl}/timesheetentries/remove/${timeSheetEntryId}`;
    return this.http.delete<boolean>(url);
  }


  removeAllTimeSheetEntries(timeSheetId: number): Observable<boolean> {
    let url = `${this.timeSheetUrl}/timesheetentries/removeall/${timeSheetId}`;
    return this.http.delete<boolean>(url);
  }
}
