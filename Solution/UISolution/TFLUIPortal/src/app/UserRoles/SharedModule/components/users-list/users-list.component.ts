import { Component, OnInit } from '@angular/core';
import { MembershipService } from 'src/app/shared/services/Membership/membership.service';
import { User } from '../../Models/User';


@Component({
  selector: 'users-list',
  templateUrl: './users-list.component.html',
})
export class UsersListComponent implements OnInit{

  constructor(private service:MembershipService){}

  users:User[]=[];

  ngOnInit(): void {
    this.service.getAllUsers().subscribe((res)=>{
    this.users=res;
    })
  }
}
