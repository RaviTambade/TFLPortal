import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/shared/Entities/User';
import { MembershipService } from 'src/app/shared/services/Membership/membership.service';


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
