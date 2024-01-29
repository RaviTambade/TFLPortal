import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Timesheet } from '../../models/timesheet';
import { TimesheetEntry } from '../../models/timesheetEntry';
import { ProjectWorkHour } from '../../models/projectworkhour';
import { MemberUtilization } from '../../models/memberutilization';
import { Week } from '../../models/Week';

@Injectable({
  providedIn: 'root',
})
export class TimesheetService {
    constructor(private http: HttpClient) { }
  
    private url: string = environment.apiUrl;
    
    getAllTimeSheets(employeeId: number,fromDate:string,toDate:string): Observable<Timesheet[]> {
      let url = `${this.url}/timesheets/employees/${employeeId}/from/${fromDate}/to/${toDate}`;
      return this.http.get<Timesheet[]>(url);
    }
  
  
    getPendingTimesheets(projectManagerId:number,fromDate:string,toDate:string): Observable<Timesheet[]> {
      let url = `${this.url}/timesheets/pendingapproval/from/${fromDate}/to/${toDate}/manager/${projectManagerId}`;
      return this.http.get<Timesheet[]>(url);
    }
    getTimeSheet(employeeId: number, date: string): Observable<Timesheet> {
      let url = `${this.url}/timesheets/employees/${employeeId}/date/${date}`;
      return this.http.get<Timesheet>(url);
    }
  
  
  
    getTimeSheetById(timesheetId: number): Observable<Timesheet> {
      let url = `${this.url}/timesheets/${timesheetId}`;
      return this.http.get<Timesheet>(url);
    }
    getTimesheetEntries(timesheetId:number):Observable<TimesheetEntry[]>{
      let url = `${this.url}/timesheets/${timesheetId}/timesheetentries`;
      return this.http.get<TimesheetEntry[]>(url);
    }
    getTimesheetEntry(timesheetEntryId:number):Observable<TimesheetEntry>{
      let url = `${this.url}/timesheets/timesheetentries/${timesheetEntryId}`;
      return this.http.get<TimesheetEntry>(url);
      
    }
  
  
  
  
    getActivityWiseHours(employeeId:number,intervalType: string,projectId:number): Observable<MemberUtilization[]> {
      let url = `${this.url}/timesheets/memberutilization/employees/${employeeId}/interval/${intervalType}/projects/${projectId}`;
      return this.http.get<any>(url);
    }
     
  
    getProjectwiseTimeSpent(employeeId:number,fromDate:string,toDate:string):Observable<ProjectWorkHour[]>{
      let url = `${this.url}/timesheets/projects/workinghours/employees/${employeeId}/from/${fromDate}/to/${toDate}`;
      return this.http.get<ProjectWorkHour[]>(url);
    }
  
  
    addTimeSheet(timesheet: any): Observable<boolean> {
      let url = `${this.url}/timesheets`;
      return this.http.post<boolean>(url, timesheet);
    }
  
    addTimeSheetEntry(timesheetEntry: TimesheetEntry): Observable<any> {
      let url = `${this.url}/timesheets/timesheetentries`;
      return this.http.post(url, timesheetEntry);
    }
  
    changeTimeSheetStatus(timesheetId: number, timesheet: Timesheet): Observable<boolean> {
      let url = `${this.url}/timesheets/${timesheetId}`;
      return this.http.put<boolean>(url, timesheet);
    }
  
    updateTimeSheetDetails(timesheetEntryId: number, timesheetEntry: TimesheetEntry): Observable<boolean> {
      let url = `${this.url}/timesheets/timesheetentries/${timesheetEntryId}`;
      return this.http.put<boolean>(url, timesheetEntry);
    }
  
    removeTimeSheetEntry(timesheetEntryId: number): Observable<boolean> {
      let url = `${this.url}/timesheets/timesheetentries/${timesheetEntryId}`;
      return this.http.delete<boolean>(url);
    }
  
    removeAllTimsheetEntries(timesheetId: number): Observable<boolean> {
      let url = `${this.url}/timesheets/${timesheetId}/timesheetentries/removeall`;
      return this.http.delete<boolean>(url);
    }
  
  
    //helper functions
  
    getTimeDifference(fromTime:string,toTime:string): number {
      let startTime = fromTime;
      let endTime = toTime;
  
      if (startTime != '' && endTime != '') {
        const startDate = new Date(`1970-01-01T${startTime}`);
        const endDate = new Date(`1970-01-01T${endTime}`);
        const durationMilliseconds = endDate.getTime() - startDate.getTime();
        let durationInHours = durationMilliseconds / (1000 * 60*60);
        return durationInHours;
      }
      return 0;
    }
  
    convertMinutesintoHours(minutes: number) {
      let str = `${Math.floor(minutes / 60)}h: ${minutes % 60}m`;
      return str;
    }
    
    randomColorPicker(): string {
      let result = '';
      for (let i = 0; i < 6; ++i) {
        const value = Math.floor(16 * Math.random());
        result += value.toString(16);
      }
      return '#' + result;
    }
  
    firstDayOfMonth(month: number): string {
      const currentYear = new Date().getFullYear();
      const date = new Date(currentYear, month, 1);
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
        endDate: this.ConvertDateYYYY_MM_DD(endOfWeek),
      };
    }
  
    ConvertDateYYYY_MM_DD(date: Date): string {
      const formattedDate = date
        .toLocaleDateString(undefined, {
          year: 'numeric',
          month: '2-digit',
          day: '2-digit',
        })
        .split('/').reverse().join('-');
      return formattedDate;
    }  
}
