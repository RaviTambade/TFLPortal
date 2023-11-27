import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TimeSheetEntry } from '../models/TimeSheetEntry';
import { TimeSheet } from '../models/timesheet';


@Injectable({
  providedIn: 'root'
})
export class TimeSheetService {

  constructor(private http : HttpClient) { }

  private timeSheetUrl:string ="http://localhost:5263/api/"

  getTimeSheetsOfEmployee(employeeId:number): Observable<TimeSheet[]> {
    let url = this.timeSheetUrl+"timesheets/" + employeeId 
    return this.http.get<TimeSheet[]>(url)
  } 

  getTimeSheetDetails(timeSheetId:number): Observable<TimeSheetEntry[]> {
  let url = this.timeSheetUrl+"timesheets/timesheetentry/" + timeSheetId 
  return this.http.get<TimeSheetEntry[]>(url)
  } 

  getDatewiseTimeSheetsOfEmployee(date:string,employeeId:number): Observable<TimeSheetEntry>{
    let url = this.timeSheetUrl+"timesheets/" + employeeId 
    return this.http.get<TimeSheetEntry>(url)
  } 
}
