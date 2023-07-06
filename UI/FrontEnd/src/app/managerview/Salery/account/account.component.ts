import { Component } from '@angular/core';
import { ManagerviewService } from '../../managerview.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent {

  transactionId:any;
  successful:boolean=false;
  failed:boolean=false;
  credential:any={
    "fromAcct":'',
    "amount":0,
    "fromIfsc":'',
    "toAcct":'46556565566',
     "toIfsc":'AXIS0000296',
  }

  constructor (private svc:ManagerviewService){}

  onProceed(form:NgForm){
    this.credential.fromAcct=form.value.acctno;
    this.credential.amount=parseFloat(form.value.amount);
    this.credential.fromIfsc=form.value.ifsc;
    console.log(this.credential)
    this.svc.fundTransfer(this.credential).subscribe((res)=>{
      console.log(res)
      this.transactionId=res;
    })
 
  }

}
