import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MonthLeave } from 'src/app/leaves/Models/MonthLeave';

@Injectable({
  providedIn: 'root'
})
export class LeavesService {

  constructor(private httpClient:HttpClient) { }

  getEmployeeLeaves(employeeId:number,month:number,year:number): Observable<MonthLeave[]> {
    let url ='http://localhost:5263/api/leaves/employees/'+ employeeId+'/month/'+month+'/year/'+year;
    return this.httpClient.get<MonthLeave[]>(url);
  }
}
