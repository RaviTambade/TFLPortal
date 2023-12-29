import { Component } from '@angular/core';
import { LeavesService } from '../../Services/leaves.service';
import { LeaveApplication } from '../../Models/LeaveApplication';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-leave-list',
  templateUrl: './employee-leave-list.component.html',
  styleUrls: ['./employee-leave-list.component.css']
})
export class EmployeeLeaveListComponent {

  employees:LeaveApplication[]=[];
  employeeId:number=12;

  constructor(private service:LeavesService,private router:Router){
    // this.employeeId=localStorage.getItem(LocalStorageKeys.employeeId);
  }
  ngOnInit(): void {
    this.service.getEmployeeLeaves(this.employeeId).subscribe((res)=>{
    this.employees=res;
    console.log(res);
    })
  }
}
