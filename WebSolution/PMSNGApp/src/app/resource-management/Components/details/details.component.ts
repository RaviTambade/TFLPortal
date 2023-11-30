import { Component, OnInit } from '@angular/core';
import { MembersService } from '../../Services/members.service';


@Component({
  selector: 'employee-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit{

  constructor(private svc:MembersService){}

  employee:any | undefined;
  employeeId:number=1;
  status:boolean= false;
  
  ngOnInit(): void {
    this.svc.getEmployeeDetails(this.employeeId).subscribe((res)=>{
    this.employee =res;
    console.log(res);
    })
  }

  paySalary(employeeId: number){
    this.svc.paySalary(this.employeeId).subscribe((res)=>{
      this.status =res;
      console.log(res);
    })
  }

  



}
