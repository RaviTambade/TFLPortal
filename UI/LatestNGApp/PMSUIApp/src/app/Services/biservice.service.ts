import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { NumberValueAccessor } from '@angular/forms';
import { Datefilter } from '../Models/datefilter';
import { Projectworkbymember } from '../Models/projectworkbymember';
import { Totalprojectwork } from '../Models/totalprojectwork';
import { Projectstatuscount } from '../Models/projectstatuscount';
import { Projectpercentage } from '../Models/projectpercentage';
import { DateRange } from '../Models/Enums/date-range';

@Injectable({
  providedIn: 'root'
})
export class BIserviceService {

  constructor(private httpClient: HttpClient) { }
getTotalProjectWorkHours(teamManagerId:number,dateFilter:Datefilter):Observable<Totalprojectwork[]>{
  let url="http://localhost:5242/api/TeamManagersBI/projectwork/" + teamManagerId
  return this.httpClient.post<Totalprojectwork[]>(url,dateFilter)
}

getProjectsStatusCount(teamManagerId:number):Observable<Projectstatuscount[]>{
  let url="http://localhost:5242/api/TeamManagersBI/projectstatuscount/" +teamManagerId
  return this.httpClient.get<Projectstatuscount[]>(url)
}
getProjectCompletionPercentage(projectId:string):Observable<Projectpercentage[]>{
  let url="http://localhost:5242/api/TeamManagersBI/projectpercentage/" +projectId
  return this.httpClient.get<Projectpercentage[]>(url)
}

getTotalHoursOfMembers(projectId:number,givenDate:string,dateRange:string):Observable<Projectworkbymember[]>{
  let url="http://localhost:5242/api/TeamManagersBI/memberworkhours/" + projectId + "/" + givenDate + "/" + dateRange
  return this.httpClient.get<Projectworkbymember[]>(url)
}
getAllocatedTaskOverview(teamMemberId :string):Observable<any[]>{
  let url="http://localhost:5242/api/TeamManagersBI/allocatedtasks/" +teamMemberId
  return this.httpClient.get<any[]>(url)
}
}