import { Component, OnInit } from '@angular/core';
import { LeavesService } from '../../Services/leaves.service';
import { LocalStorageKeys } from 'src/app/shared/Enums/local-storage-keys';
import { LeaveDetails } from '../../Models/LeaveDetails';

@Component({
  selector: 'app-team-member-leave-request',
  templateUrl: './team-member-leave-request.component.html',
  styleUrls: ['./team-member-leave-request.component.css']
})
export class TeamMemberLeaveRequestComponent implements OnInit{

  projectId:number=1;
  status:string="applied";
  appliedLeaves:LeaveDetails[]=[];
  leaveTypes:any[]=[];
  leaves:any[]=[];
  constructor(private leaveService:LeavesService){
  }

  ngOnInit(): void {
    this.leaveService.getEmployeeAppliedLeaves(this.projectId,this.status).subscribe((res)=>{
    this.appliedLeaves=res;
    console.log(this.appliedLeaves);
    this.leaveTypes=this.appliedLeaves.map(item => item.leaveType).filter((value, index, self) => self.indexOf(value) === index);
    console.log(this.leaveTypes);  
    this.onChange(this.leaveTypes);
    })
  }

  onChange(e:any){
    console.log(e.target.value);
    this.leaves =this.appliedLeaves.filter(u=>u.leaveType==e.target.value);
    console.log(this.appliedLeaves);
  }
}
