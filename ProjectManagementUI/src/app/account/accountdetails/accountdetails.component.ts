import { Component, OnInit } from '@angular/core';
import { AccountService } from '../account.service';
import { Account } from '../Account';

@Component({
  selector: 'app-accountdetails',
  templateUrl: './accountdetails.component.html',
  styleUrls: ['./accountdetails.component.scss']
})
export class AccountdetailsComponent implements OnInit {

  constructor(private svc : AccountService) { }

  account : Account | undefined;
  accountId : number | undefined;
  status: boolean |undefined;
  
  

  ngOnInit(): void {
  }

  getAccount(accountId:number){
    this.svc.getById(accountId).subscribe((response) =>{
      this.account = response;
      console.log(response);
    })
  }

 

  deleteAccount(){
    console.log(this.account.accountId);
    this.svc.delete(this.account.accountId).subscribe(
      (data)=>{
        this.account=data;
        if(data){
          alert("Account Deleted Successfully");
        }
        else{
          {alert("Error")}
        }
        console.log(data);
      }
    )

  }
   



}
