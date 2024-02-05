import { Component, OnInit } from '@angular/core';
import { LeavesService } from '../../Services/leaves.service';
import { RoleBasedLeaveDetails } from '../../Models/RoleBasedLeaveDetails';

@Component({
  selector: 'app-all-role-based-leaves',
  templateUrl: './all-role-based-leaves.component.html',
  styleUrls: ['./all-role-based-leaves.component.css']
})
export class AllRoleBasedLeavesComponent implements OnInit{

  roleBasedLeaves:RoleBasedLeaveDetails[]=[];

  constructor(private service:LeavesService){}

  ngOnInit(): void {
    this.service.getAllRoleBasedLeaves().subscribe((res)=>{
      this.roleBasedLeaves=res;
    })
  }
}
