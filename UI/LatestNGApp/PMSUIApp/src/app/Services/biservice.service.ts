import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Totalprojectwork } from '../Models/totalprojectwork';

@Injectable({
  providedIn: 'root'
})
export class BIserviceService {

  constructor(private httpClient: HttpClient) { }
getTotalProjectWorkHours(teamManagerId:number):Observable<Totalprojectwork[]>{
  let url="http://localhost:5242/api/TeamManagersBI/projectwork/" + teamManagerId
  return this.httpClient.get<Totalprojectwork[]>(url)
}
}
