import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employeeinfo } from 'src/app/Models/employeeinfo';
import { Userinfo } from 'src/app/Models/userinfo';
import { EmployeeService } from 'src/app/Services/employee.service';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-employeedetails',
  templateUrl: './employeedetails.component.html',
  styleUrls: ['./employeedetails.component.css']
})
export class EmployeedetailsComponent implements OnInit {
  employeeUserId:number=0
  employeeId:number=0
  employeeInfo:Employeeinfo={
    department: '',
    position: '',
    hireDate: ''
  }
  employeeDetail:Userinfo={
    contactNumber: '',
    firstName: '',
    lastName: '',
    gender: '',
    email: '',
    imageUrl: ''
  }
  url="http://localhost:5102/" 

constructor(private route:ActivatedRoute,
  private userService:UserService,
  private employeeService:EmployeeService){}
  ngOnInit(): void {
    this.route.params.subscribe(params=>{
      this.employeeUserId=params['employeeuserid'];
    })
    this.userService.getUser(this.employeeUserId).subscribe((res)=>{
      this.employeeDetail=res
      this.employeeService.getEmployeeId(this.employeeUserId).subscribe((res)=>{
        this.employeeId=res
        this.employeeService.getEmployeeInfo(this.employeeId).subscribe((res)=>{
          this.employeeInfo=res
        })

      })
    })
  }
}
