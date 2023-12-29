import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BiService {

  constructor(private httpClient: HttpClient) { }

  private serviceurl: string = environment.apiUrl;

  getMonthlyLeaves(employeeId:number,year:number):Observable<any>{
    let url = this.serviceurl + '/leaves/leavescount/'+employeeId+'/year/'+year;
    return this.httpClient.get<any>(url);
  }
}
