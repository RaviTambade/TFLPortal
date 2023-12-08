import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

import { TimesheetView } from '../models/TimesheetView';
import { TimeSheet } from '../models/timesheet';
import { TimeSheetDetails } from '../models/TimeSheetDetails';

@Injectable({
  providedIn: 'root',
})
export class TimeSheetService {
  constructor(private http: HttpClient) {}

  private timeSheetUrl: string = 'http://localhost:5263/api/workmgmt/timesheets';

  getAllTimeSheets(employeeId: number): Observable<TimeSheet[]> {
    let url = `${this.timeSheetUrl}/${employeeId}`;
    return this.http.get<TimeSheet[]>(url);
  }
  getTimeSheet( employeeId: number, date: string): Observable<TimesheetView> {
    let url = `${this.timeSheetUrl}/${employeeId}/date/${date}`;
    return this.http.get<TimesheetView>(url);
  }

  getTimeSheetDetails(timeSheetId: number): Observable<TimeSheetDetails[]> {
    let url = `${this.timeSheetUrl}/timesheetentries/${timeSheetId}`;
    return this.http.get<TimeSheetDetails[]>(url);
  }

  getWorkDurationOfEmployee(employeeId: number,fromDate:string,toDate:string): Observable<any> {
    let url = `${this.timeSheetUrl}/timesheetentries/duration/workcategory/${employeeId}/${fromDate}/${toDate}`;
    return this.http.get<any>(url);
  }

  addTimeSheet(employeeId: number, date: string): Observable<boolean> {
    let url = `${this.timeSheetUrl}/${employeeId}/${date}`;
    return this.http.post<boolean>(url,{});
  }

  addTimeSheetDetails(TimeSheetDetails: TimeSheetDetails): Observable<any> {
    let url = `${this.timeSheetUrl}/timesheetentries`;
    return this.http.post(url, TimeSheetDetails);
  }

  changeTimeSheetStatus( timeSheetId: number, timesheet: TimeSheet): Observable<boolean> {
    let url = `${this.timeSheetUrl}/${timeSheetId}`;
    return this.http.put<boolean>(url, timesheet);
  }

  updateTimeSheetDetails(TimeSheetDetailsId: number,TimeSheetDetails: TimeSheetDetails): Observable<boolean> {
    let url = `${this.timeSheetUrl}/timesheetentries/${TimeSheetDetailsId}`;
    return this.http.put<boolean>(url, TimeSheetDetails);
  }

  removeTimeSheetDetails(TimeSheetDetailsId: number): Observable<boolean> {
    let url = `${this.timeSheetUrl}/timesheetentries/remove/${TimeSheetDetailsId}`;
    return this.http.delete<boolean>(url);
  }

  removeAllTimeSheetDetails(timeSheetId: number): Observable<boolean> {
    let url = `${this.timeSheetUrl}/timesheetentries/removeall/${timeSheetId}`;
    return this.http.delete<boolean>(url);
  }

  //helper functions

  getDurationOfWork(TimeSheetDetails: TimeSheetDetails): TimeSheetDetails {
    let startTime = TimeSheetDetails.fromTime;
    let endTime = TimeSheetDetails.toTime;
    
    if (startTime != '' && endTime != '') {
      const startDate = new Date(`1970-01-01T${startTime}`);
      const endDate = new Date(`1970-01-01T${endTime}`);
      const durationMilliseconds = endDate.getTime() - startDate.getTime();
      TimeSheetDetails.durationInMinutes = durationMilliseconds / (1000 * 60);
      TimeSheetDetails.durationInHours = this.convertMinutesintoHours(TimeSheetDetails.durationInMinutes);
    }
    return TimeSheetDetails;
  }

  convertMinutesintoHours(minutes: number) {
    let str = `${Math.floor(minutes / 60)}h: ${minutes % 60}m`;
    return str;
  }

}
