import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from 'src/app/Services/employee.service';

@Component({
  selector: 'app-employeedetails',
  templateUrl: './employeedetails.component.html',
  styleUrls: ['./employeedetails.component.css']
})
export class EmployeedetailsComponent implements OnInit {
  employee:string=''
  employeeDetail:any
constructor(private route:ActivatedRoute,private employeeService:EmployeeService){}
  ngOnInit(): void {
    this.route.params.subscribe(params=>{
      this.employee=params['employee'];
    })
    this.employeeService.getEmployeeDetails(this.employee).subscribe((res)=>{
      this.employeeDetail=res
      console.log(res)
    })
  }
}
