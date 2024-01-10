import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProjectallocationService } from 'src/app/shared/services/projectallocation.service';
import { MemberDetails } from '../../Model/MemberDetails';

@Component({
  selector: 'app-membersdetails',
  templateUrl: './membersdetails.component.html',
  styleUrls: ['./membersdetails.component.css']
})
export class MembersdetailsComponent  implements OnInit{

  constructor(private router:ActivatedRoute,private projectMembership:ProjectallocationService){}
  projectId:number=0;
  employeeId:number=0;
  employee:MemberDetails|undefined;
  ngOnInit(): void {
    this.router.paramMap.subscribe((param)=>{
    this.projectId=Number(param.get('projectId'));
    this.employeeId=Number(param.get('employeeId'));

    this.projectMembership.getMemberDetails(this.projectId,this.employeeId).subscribe((res)=>{
    this.employee=res;
    })
    })
  }

}
