import { Component, OnInit } from '@angular/core';
import { LeavesService } from '../../Services/leaves.service';
import { LocalStorageKeys } from 'src/app/shared/Enums/local-storage-keys';
import { Leave } from '../../Models/Leave';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-leaves',
  templateUrl: './employee-leaves.component.html',
  styleUrls: ['./employee-leaves.component.css']
})
export class EmployeeLeavesComponent implements OnInit{

  employeeId:any;
  employees:Leave[]=[];

  constructor(private service:LeavesService,private router:Router){
    this.employeeId=localStorage.getItem(LocalStorageKeys.employeeId);
  }
  ngOnInit(): void {
    this.service.getEmployeeLeaves(this.employeeId).subscribe((res)=>{
    this.employees=res;
    })
  }

  // onClick(){
  //   this.router.navigate(["/leave/pendingleave/loginform"]);
  // }
}
