import { Component, OnInit } from '@angular/core';
import { LeavesService } from '../../Services/leaves.service';
import { LocalStorageKeys } from 'src/app/shared/enums/local-storage-keys';
import { LeaveApplication } from '../../Models/LeaveApplication';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-leaves',
  templateUrl: './employee-leaves.component.html',
  styleUrls: ['./employee-leaves.component.css']
})
export class EmployeeLeavesComponent implements OnInit{

  // employeeId:any;
  employees:LeaveApplication[]=[];
  employeeId:number=12;

  constructor(private service:LeavesService,private router:Router){
    // this.employeeId=localStorage.getItem(LocalStorageKeys.employeeId);
  }
  ngOnInit(): void {
    this.service.getAllEmployeeLeaves().subscribe((res)=>{
    console.log(res);
    
    })
    this.service.getEmployeeLeaves(this.employeeId).subscribe((res)=>{
    this.employees=res;
    })
  }
}
