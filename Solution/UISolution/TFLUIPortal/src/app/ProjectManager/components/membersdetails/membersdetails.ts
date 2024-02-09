import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProjectService } from 'src/app/shared/services/ProjectMgmt/project.service';
import { MemberDetails } from '../../../Model/MemberDetails';
import { MembershipService } from 'src/app/shared/services/Membership/membership.service';

@Component({
  selector: 'app-membersdetails',
  templateUrl: './membersdetails.html',
})
export class Membersdetails{

  constructor(private router:ActivatedRoute,private projectMembership:ProjectService){}
  // projectId:number=0;
  // employeeId:number=0;
  // employee:MemberDetails|undefined;
  // ngOnInit(): void {
  //   // this.router.paramMap.subscribe((param)=>{
    // this.projectId=Number(param.get('projectId'));
    // this.employeeId=Number(param.get('employeeId'));

    // this.projectMembership.getAllProjectMembers(this.projectId).subscribe((res)=>{
    // this.employee=res;
    // console.log(res);
    // })
    // })
  // }

}
