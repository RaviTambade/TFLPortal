import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  private subject = new Subject <any>();

  constructor(private http : HttpClient) { }

  sendData(data:any){
    let role = data.roleName;
    switch(role){
      case "Developer":{
        let url ="http://localhost:5230/api/employees/role/"+ role;
        this.http.get(url).subscribe((data) =>{
          console.log(data);
          this.subject.next({data});
        });
        break;
      }
      case "Consultant":{
        let url ="http://localhost:5230/api/employees/role/"+ role;
        this.http.get(url).subscribe((data) =>{
          console.log(data);
          this.subject.next({data});
        });
        break;
      }
      case "Tester":{
        let url ="http://localhost:5230/api/employees/role/"+ role;
        this.http.get(url).subscribe((data) =>{
          console.log(data);
          this.subject.next({data});
        });
        break;  
      }
      case "Manager":{
        let url ="http://localhost:5230/api/employees/role/"+ role;
        this.http.get(url).subscribe((data) =>{
          console.log(data);
          this.subject.next({data});
        });
        break;  
      }

    }

  }

  getData(): Observable<any> {
    return this.subject.asObservable();
  }

}

