import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MemberDetails } from 'src/app/ProjectManager/Model/MemberDetails';
import { ProjectService } from 'src/app/shared/services/ProjectMgmt/project.service';

@Component({
  selector: 'app-membersdetails',
  templateUrl: './membersdetails.component.html',
  styleUrls: ['./membersdetails.component.css']
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

    this.projectMembership.getAllProjectMembers(this.projectId).subscribe((res)=>{
    this.employee=res;
    console.log(res);
    })
    })
  }

}
