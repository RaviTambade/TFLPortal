import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AccountService } from '../account.service';
import { Account } from '../Account';

@Component({
  selector: 'app-getaccount',
  templateUrl: './getaccount.component.html',
  styleUrls: ['./getaccount.component.scss']
})
export class GetaccountComponent implements OnInit {

   constructor(private svc : AccountService) { }

  
  @Input() accountId : number | undefined;
  account : Account | undefined;
  @Output() sendAccount = new EventEmitter();

  

  ngOnInit(): void {
  }

  getAccount(accountId:any){
    this.svc.getById(accountId).subscribe((response) =>{
      this.account = response;
      this.sendAccount.emit({account:this.account});
      console.log(this.account);
    })
  }


}
