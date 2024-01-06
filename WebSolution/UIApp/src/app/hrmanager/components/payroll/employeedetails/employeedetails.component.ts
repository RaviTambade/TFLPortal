import { Component, Input, OnInit } from '@angular/core';
import { Employee } from 'src/app/activity/Models/Employee';
import { HrService } from 'src/app/shared/services/hr.service';

@Component({
  selector: 'app-employeedetails',
  templateUrl: './employeedetails.component.html',
  styleUrls: ['./employeedetails.component.css']
})
export class EmployeedetailsComponent implements OnInit{

  constructor(private hrSvc:HrService){

  }
@Input() employeeid:number=10;
  employee:Employee|undefined;
  ngOnInit(): void {
    this.hrSvc.getEmployeeDetails(this.employeeid).subscribe((res)=>{
    this.employee=res;
    })
  }

}
