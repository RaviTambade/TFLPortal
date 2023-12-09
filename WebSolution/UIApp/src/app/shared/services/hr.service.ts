import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Employee } from 'src/app/activity/Models/Employee';

@Injectable({
  providedIn: 'root'
})
export class HrService {

  constructor(private httpClient: HttpClient) {}

  private serviceurl: string = environment.apiUrl;
  private commonUrl:string =environment.imagerServerUrl;


  getEmployeeDetails(employeeId: number): Observable<Employee> {
    let url = this.serviceurl + '/hr/employees/employee' + '/' + employeeId;
    console.log(url);
    return this.httpClient.get<Employee>(url);
  }

  getAllEmployees(projectId:number):Observable<any[]>{
    let url=this.serviceurl+"/projectmgmt/projectallocation/employees/"+projectId;
    return this.httpClient.get<any[]>(url);
  }

  getEmployee(contactNumber:string):Observable<any[]>{
    let url=this.commonUrl+"/users/contact/"+contactNumber;
    return this.httpClient.get<any[]>(url);
  }
}
