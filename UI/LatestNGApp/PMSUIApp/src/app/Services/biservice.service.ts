import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Totalprojectwork } from '../Models/totalprojectwork';
import { Datefilter } from '../Models/datefilter';
import { Projectworkbymember } from '../Models/projectworkbymember';
import { Projectstatuscount } from '../Models/projectstatuscount';

@Injectable({
  providedIn: 'root'
})
export class BIserviceService {

  constructor(private httpClient: HttpClient) { }
getTotalProjectWorkHours(teamManagerId:number,dateFilter:Datefilter):Observable<Totalprojectwork[]>{
  let url="http://localhost:5242/api/TeamManagersBI/projectwork/" + teamManagerId
  return this.httpClient.post<Totalprojectwork[]>(url,dateFilter)
}

getTotalProjectWorkByMembers(projectId:number):Observable<Projectworkbymember[]>{
  let url="http://localhost:5242/api/TeamManagersBI/projectworkbymembers/ " + projectId
  return this.httpClient.get<Projectworkbymember[]>(url)
}

getProjectsStatusCount(teamManagerId:number):Observable<Projectstatuscount[]>{
  let url="http://localhost:5242/api/TeamManagersBI/projectstatuscount/" +teamManagerId
  return this.httpClient.get<Projectstatuscount[]>(url)
}

}