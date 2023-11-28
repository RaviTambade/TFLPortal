import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { TimeSheetEntry } from '../models/TimeSheetEntry';
import { TimeSheet } from '../models/timesheet';



@Injectable({
  providedIn: 'root'
})
export class TimeSheetService {

  constructor(private http : HttpClient) { }

  private timeSheetUrl:string ="http://localhost:5263/api/";

  timeSheetEntries:TimeSheetEntry[]=[];
  private subject = new Subject<TimeSheetEntry[]>();
  
  AddTimeSheetEntries(timeSheetEntry:TimeSheetEntry){
    // timeSheetEntry.fromTime=timeSheetEntry.fromTime+":00"
    // timeSheetEntry.toTime=timeSheetEntry.toTime+":00"
    this.timeSheetEntries.push(timeSheetEntry);
    this.subject.next(this.timeSheetEntries);
  }

  ReceiveTimeSheetEntries():Observable<TimeSheetEntry[]>{
    return this.subject.asObservable();
  }

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


  addTimeSheet(obj:TimeSheet): Observable<any>{
    let url = this.timeSheetUrl+"timesheets"; 
    return this.http.post(url,obj);
  } 



}
