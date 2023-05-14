import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Account } from './Account';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private http: HttpClient) { }

  public getall():Observable<Account[]>{
    let url= "http://localhost:5224/api/accounts/getallaccounts";
    return this.http.get<Account[]>(url);
  }
}
