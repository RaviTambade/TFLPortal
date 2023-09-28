import { Injectable } from '@angular/core';
import { BehaviorSubject,Observable, of } from 'rxjs';
import { ProjectService } from './project.service';
import { Mytimesheetlist } from '../Models/mytimesheetlist';
import { HttpClient } from '@angular/common/http';
import { Timesheet } from '../Models/timesheet';
import { Timesheetdetail } from '../Models/timesheetdetail';
import { Timesheetlist } from '../Models/timesheetlist';
@Injectable({
  providedIn: 'root'
})
export class TimeSheetService {

  constructor(private projectsService:ProjectService,private httpClient:HttpClient) {}
private selectedtimeSheetIdSubject=new BehaviorSubject<any>(null);
selectedTaskId$=this.selectedtimeSheetIdSubject.asObservable();

setTimeSheetId(id:number |null){
  this.selectedtimeSheetIdSubject.next(id);
}

  getTimeSheetList(employeeId:number,timePeriod:string):Observable<Mytimesheetlist[]>{
    let url="http://localhost:5221/api/timesheets/list/" +employeeId + "/" +timePeriod
    return this.httpClient.get<Mytimesheetlist[]>(url)
  }
  getTimeSheetDetail(timeSheetId:number):Observable<Timesheetdetail>{
    let url="http://localhost:5221/api/timesheets/details/" +timeSheetId
    return this.httpClient.get<Timesheetdetail>(url)
  }
  addTimeSheet(timeSheet:Timesheet):Observable<boolean>{
    let url="http://localhost:5221/api/timesheets/add"
    return this.httpClient.post<boolean>(url,timeSheet)
  }
  getTimeSheetListByManager(managerId:number,timePeriod:string):Observable<Timesheetlist[]>{
    let url="http://localhost:5221/api/timesheets/timesheetlist/"+ managerId + "/" +timePeriod
    return this.httpClient.get<Timesheetlist[]>(url)
  }
}
