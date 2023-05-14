import { Component, OnInit } from '@angular/core';
import { Account } from '../Account';
import { AccountService } from '../account.service';

@Component({
  selector: 'app-accountlist',
  templateUrl: './accountlist.component.html',
  styleUrls: ['./accountlist.component.scss']
})
export class AccountlistComponent implements OnInit {

  constructor(private svc: AccountService) { }

  account :Account[] |undefined;

  ngOnInit(): void {
    this.svc.getall().subscribe((response)=>{
      this.account=response;
      console.log(response);
    });
  }

}
