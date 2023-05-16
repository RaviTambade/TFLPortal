import { Component, OnInit } from '@angular/core';
import { Account } from '../Account';
import { AccountService } from '../account.service';

@Component({
  selector: 'app-updateaccount',
  templateUrl: './updateaccount.component.html',
  styleUrls: ['./updateaccount.component.scss']
})
export class UpdateaccountComponent implements OnInit {

  account : Account | any;
  accountId : any;
  status : boolean | undefined;
  constructor(private svc : AccountService) { }

  ngOnInit(): void {
  }

  updateAccount(){
    this.svc.update(this.account).subscribe((response) => {
      this.account = response;
      console.log(response);
      if(response){
        alert("Account updated successfully");
        window.location.reload();
      }
      else{
        alert("error")
      }
    });
  }

  receiveAccount($event:any){
    this.account = $event.account;
  }

}
