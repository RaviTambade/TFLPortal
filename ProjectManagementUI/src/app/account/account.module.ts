import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountlistComponent } from './accountlist/accountlist.component';
import { AddaccountComponent } from './addaccount/addaccount.component';
import { FormsModule } from '@angular/forms';
import { GetaccountComponent } from './getaccount/getaccount.component';
import { AccountdetailsComponent } from './accountdetails/accountdetails.component';
import { UpdateaccountComponent } from './updateaccount/updateaccount.component';



@NgModule({
  declarations: [
    AccountlistComponent,
    AddaccountComponent,
    GetaccountComponent,
    AccountdetailsComponent,
    UpdateaccountComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class AccountModule { }
