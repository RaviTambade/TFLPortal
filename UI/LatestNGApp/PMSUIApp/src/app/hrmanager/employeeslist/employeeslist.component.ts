import { Component, OnInit } from '@angular/core';
import { HrmanagerService } from 'src/app/Services/hrmanager.service';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-employeeslist',
  templateUrl: './employeeslist.component.html',
  styleUrls: ['./employeeslist.component.css']
})
export class EmployeeslistComponent implements OnInit {
constructor(private svc:HrmanagerService, private userService:UserService){}

Employee:any[]=[];
  ngOnInit(): void {
    this.svc.getEmployeesUserId().subscribe((res)=>{
     
      let userIds=res;
      console.log(userIds);
      let employeeUserIdsString=userIds.join(",")

      this.userService.getUserNamesWithId(employeeUserIdsString).subscribe((res)=>{
        this.Employee =res;
        console.log(this.Employee);
      })

    })
  }



}
