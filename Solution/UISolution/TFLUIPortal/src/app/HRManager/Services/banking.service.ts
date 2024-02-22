import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { BankDetails } from '../Models/Payroll/BankDetails';
import { PaymentGateway } from '../Models/Payroll/PaymentGateway';

@Injectable({
  providedIn: 'root'
})
export class BankingService {
  
  bankAPI:string=environment.bankAPI;
  paymentGatewayAPI:string=environment.paymentGatewayAPI;

  constructor(private http:HttpClient) { }

  getAccountDetails(employeeId:number,userType:string):Observable<BankDetails>{
    let url=`${this.bankAPI}/accounts/customers/${employeeId}/mode/${userType}` ;
    return this.http.get<BankDetails>(url);
  }

  fundTransfer(fundTransfer:PaymentGateway):Observable<any>{
    let url=`${this.paymentGatewayAPI}/fundstransfer`;
    return this.http.post<any>(url,fundTransfer); 
  }
}
