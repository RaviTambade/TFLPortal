import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Week } from '../../Entities/Timesheetmgmt/Week';
import { MemberUtilization } from '../../Entities/Timesheetmgmt/work';
import { ProjectWorkHour } from '../../Entities/Timesheetmgmt/projectworkhour';
import { Timesheet } from '../../Entities/Timesheetmgmt/timesheet';
import { TimesheetEntry } from '../../Entities/Timesheetmgmt/timesheetEntry';
import { MemberPerformance } from '../../Entities/Timesheetmgmt/performance';

@Injectable({
  providedIn: 'root',
})
export class TimesheetService {
    constructor(private http: HttpClient) { }
  
    private timesheetAPIUrl: string = environment.timesheetAPI;
    
    getTimeSheetOfEmployee(id: number, date: string): Observable<Timesheet> {
      let url = `${this.timesheetAPIUrl}/employees/${id}/date/${date}`;
      return this.http.get<Timesheet>(url);
    }
    
    getPendingTimesheetsOfEmployee(id:number): Observable<Timesheet[]> {
      let url = `${this.timesheetAPIUrl}/pending/employees/${id}`;
      return this.http.get<Timesheet[]>(url);
    }

    getApprovedTimesheetsOfEmployee(id:number): Observable<Timesheet[]> {
      let url = `${this.timesheetAPIUrl}/approved/employees/${id}`;
      return this.http.get<Timesheet[]>(url);
    }

    getAllTimeSheetsOfEmployee(id: number,fromDate:string,toDate:string): Observable<Timesheet[]> {
      let url = `${this.timesheetAPIUrl}/employees/${id}/from/${fromDate}/to/${toDate}`;
      return this.http.get<Timesheet[]>(url);
    }
  
   
    getPendingTimesheets(id:number,fromDate:string,toDate:string): Observable<Timesheet[]> {
      let url = `${this.timesheetAPIUrl}/pending/manager/${id}/from/${fromDate}/to/${toDate}``;
      return this.http.get<Timesheet[]>(url);
    }

    getApprovedTimesheets(id:number,fromDate:string,toDate:string): Observable<Timesheet[]> {
      let url = `${this.timesheetAPIUrl}/approved/manager/${id}/from/${fromDate}/to/${toDate}`;
      return this.http.get<Timesheet[]>(url);
    }

    getTimeSheetById(id: number): Observable<Timesheet> {
      let url = `${this.timesheetAPIUrl}/${id}`;
      return this.http.get<Timesheet>(url);
    }
    getEntriesOfTimesheet(id:number):Observable<TimesheetEntry[]>{
      let url = `${this.timesheetAPIUrl}/${id}/entries`;
      return this.http.get<TimesheetEntry[]>(url);
    }
    getEntryOfTimesheet(timesheetId:number, entryId:number):Observable<TimesheetEntry>{
      let url = `${this.timesheetAPIUrl}/${timesheetId}/entries/${entryId}`;
      return this.http.get<TimesheetEntry>(url);
    }
  
    
    getEmployeeUtilizationOfAllProjects(employeeId:number,fromDate:string,toDate:string):Observable<ProjectWorkHour[]>{
      let url = `${this.timesheetAPIUrl}/employees/${employeeId}/utilization/from/${fromDate}/to/${toDate}`;
      return this.http.get<ProjectWorkHour[]>(url);
    }
  

    getEmployeeUtilizationByProject(employeeId:number,projectId:number,fromDate: string, toDate:string): Observable<MemberPerformance> {
      let url = `${this.timesheetAPIUrl}/employees/${employeeId}/utilization/from/${fromDate}/to/${toDate}/projects/${projectId}`;
      return this.http.get<any>(url);
    }
     
  
   
  
    addTimeSheet(timesheet: any): Observable<boolean> {
      let url = `${this.timesheetAPIUrl}`;
      return this.http.post<boolean>(url, timesheet);
    }
  
    addTimeSheetEntry(timesheetEntry: TimesheetEntry): Observable<any> {
      let url = `${this.timesheetAPIUrl}/timesheetentries`;
      return this.http.post(url, timesheetEntry);
    }
  
    changeTimeSheetStatus(timesheetId: number, timesheet: Timesheet): Observable<boolean> {
      let url = `${this.timesheetAPIUrl}/${timesheetId}`;
      return this.http.put<boolean>(url, timesheet);
    }
  
    updateTimeSheetEntry(timesheetEntryId: number, timesheetEntry: TimesheetEntry): Observable<boolean> {
      let url = `${this.timesheetAPIUrl}/timesheetentries/${timesheetEntryId}`;
      return this.http.put<boolean>(url, timesheetEntry);
    }
  
    removeTimeSheetEntry(timesheetEntryId: number): Observable<boolean> {
      let url = `${this.timesheetAPIUrl}/timesheetentries/${timesheetEntryId}`;
      return this.http.delete<boolean>(url);
    }
  
    removeAllTimsheetEntries(timesheetId: number): Observable<boolean> {
      let url = `${this.timesheetAPIUrl}/${timesheetId}/timesheetentries/removeall`;
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
