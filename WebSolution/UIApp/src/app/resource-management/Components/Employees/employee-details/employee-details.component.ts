import { Component, OnInit } from '@angular/core';
import { MembersService } from 'src/app/resource-management/Services/members.service';
import { HrService } from 'src/app/shared/services/hr.service';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit{

  contactNumber:string='8456123654';

  constructor(private svc:HrService){}

  ngOnInit(): void {
    this.svc.getEmployee(this.contactNumber).subscribe((res)=>{
      console.log(res);
    })
  }



}
