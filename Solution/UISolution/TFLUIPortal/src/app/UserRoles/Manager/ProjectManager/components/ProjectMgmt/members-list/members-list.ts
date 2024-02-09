import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProjectService } from 'src/app/shared/services/ProjectMgmt/project.service';
import { ProjectEmployees } from '../../../Model/ProjectEmployes';

@Component({
  selector: 'app-members-list',
  templateUrl: './members-list.html',
})
export class MembersList implements OnInit{

  constructor(private projectAllocSvc:ProjectService,private route:Router,private router:ActivatedRoute){}
 
  projectId:number=0;
   status:string='yes';
  employees:ProjectEmployees[]=[];
  //  ngOnChanges(change:SimpleChanges): void {
  //   console.log(change['projectId'].currentValue);
  //  this.projectAllocSvc.getAllProjectMembers(change['projectId'].currentValue).subscribe((res)=>{
  //   this.employees=res;
  //   console.log(this.employees);
  //  }) 
  // }

  ngOnInit(): void {
    this.router.paramMap.subscribe((res)=>{
     this.projectId=Number(res.get('id'));
     this.projectAllocSvc.getAllProjectMembers(this.projectId).subscribe((res)=>{
        this.employees=res;
        console.log(this.employees);
       }) 
    })
  }

  
}
