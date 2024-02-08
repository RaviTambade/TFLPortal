import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProjectallocationService } from 'src/app/shared/services/projectallocation.service';
import { MemberDetails } from '../../Model/MemberDetails';
import { ProjectService } from 'src/app/shared/services/ProjectMgmt/project.service';

@Component({
  selector: 'app-membersdetails',
  templateUrl: './membersdetails.component.html',
})
export class MembersdetailsComponent  implements OnInit{

  constructor(private router:ActivatedRoute,private projectMembership:ProjectService){}
  projectId:number=0;
  employeeId:number=0;
  employee:MemberDetails|undefined;
  ngOnInit(): void {
    this.router.paramMap.subscribe((param)=>{
    this.projectId=Number(param.get('projectId'));
    //this.employeeId=Number(param.get('employeeId'));

    this.projectMembership.getMemberDetails(this.projectId,this.employeeId).subscribe((res)=>{
    this.employee=res;
    console.log(res);
    })
    })
  }

}