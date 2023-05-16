import { Component, OnInit } from '@angular/core';
import { Account } from '../Account';
import { AccountService } from '../account.service';

@Component({
  selector: 'app-addaccount',
  templateUrl: './addaccount.component.html',
  styleUrls: ['./addaccount.component.scss']
})
export class AddaccountComponent implements OnInit {

  account : Account ={
    accountId: 0,
    accountNumber: '',
    ifscCode: '',
    registerDate: '',
    balance: 0
  };

  status:boolean|undefined;

  constructor(private svc : AccountService) { }

  ngOnInit(): void {
  }

  insertAccount(form:any){
    this.svc.insertAccount(form).subscribe(
      (response)=>{
      this.status=response;
      console.log(response);
      if(response){

        alert("Account Inserted successfully");
        
        window.location.reload();
        
        }
        
        else{
        
        alert("error")
        
       }
        
        });
      
    
  }

}
