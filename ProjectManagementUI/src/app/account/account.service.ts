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

  public getById(accountId:number):Observable<Account>{
    let url="http://localhost:5224/api/accounts/getaccountdetails/"+accountId;
    return this.http.get<Account>(url);
  }

  public insertAccount(account:Account):Observable<any>{
    let url = "http://localhost:5224/api/accounts/addaccount";
    return this.http.post<Account>(url,account);
  }

  update(account:Account):Observable<any>{
    let url = "http://localhost:5224/api/accounts/update";
    return this.http.put<any>(url,account);
  }


  public delete(accountId:number):Observable<Account>{
    let url = "http://localhost:5224/api/accounts/delete/"+ accountId;
    return this.http.delete<Account>(url);
  }
  



}
