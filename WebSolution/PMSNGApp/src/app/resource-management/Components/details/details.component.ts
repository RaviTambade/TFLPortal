import { Component, OnInit } from '@angular/core';
import { MembersService } from '../../Services/members.service';
import { User } from '../../Models/User';

@Component({
  selector: 'employee-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit{

  constructor(private svc:MembersService){}

  employee:User | undefined;
  employeeId:number=1;
  
  ngOnInit(): void {
    this.svc.getEmployeeDetails(this.employeeId).subscribe((res)=>{
    this.employee =res;
    console.log(res);
    })
  }

  



}
