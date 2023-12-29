import { Component, OnInit } from '@angular/core';
import { LeavesService } from '../../Services/leaves.service';
import { LeaveApplication } from '../../Models/LeaveApplication';

@Component({
  selector: 'app-all-employee-leaves',
  templateUrl: './all-employee-leaves.component.html',
  styleUrls: ['./all-employee-leaves.component.css']
})
export class AllEmployeeLeavesComponent implements OnInit{

  leaves:LeaveApplication[]=[];

  constructor(private leaveService:LeavesService){}
  ngOnInit(): void {
   this.leaveService.getAllEmployeeLeaves().subscribe((res)=>{
    this.leaves=res;
   })
  }
}
