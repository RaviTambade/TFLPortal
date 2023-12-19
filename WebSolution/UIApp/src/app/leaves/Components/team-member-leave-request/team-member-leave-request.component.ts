import { Component, OnInit } from '@angular/core';
import { LeavesService } from '../../Services/leaves.service';
import { LocalStorageKeys } from 'src/app/shared/Enums/local-storage-keys';
import { Leave } from '../../Models/Leave';
import { LeaveDetails } from '../../Models/LeaveDetails';

@Component({
  selector: 'app-team-member-leave-request',
  templateUrl: './team-member-leave-request.component.html',
  styleUrls: ['./team-member-leave-request.component.css']
})
export class TeamMemberLeaveRequestComponent implements OnInit{

  // employeeId:any;
  projectId:number=1;
  status:string="notstarted";
  appliedLeaves:LeaveDetails[]=[];
  constructor(private leaveService:LeavesService){
  }

  ngOnInit(): void {
    this.leaveService.getEmployeeAppliedLeaves(this.projectId,this.status).subscribe((res)=>{
    this.appliedLeaves=res;
    console.log(res);
    })
    
  }
}
