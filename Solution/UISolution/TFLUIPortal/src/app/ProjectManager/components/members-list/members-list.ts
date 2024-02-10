import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProjectService } from 'src/app/shared/services/ProjectMgmt/project.service';
import { ProjectEmployees } from '../../Model/ProjectEmployes';


@Component({
  selector: 'app-members-list',
  templateUrl: './members-list.html',
})
export class MembersList implements OnInit{

  constructor(private projectAllocSvc:ProjectService){}
 
  projectId:number=4;
   status:string='yes';
   num:any[]=[];
  employees:ProjectEmployees[]=[];
  ngOnInit(): void {

    this.projectAllocSvc.getAllProjectMembers(this.projectId).subscribe((res)=>{
        this.employees=res;
        console.log(this.employees);
        let employeeIds:number[] = this.employees.map(o => o.employeeId);
        let employeeIdString= employeeIds.join(",");
        console.log(employeeIdString);

        

       }) 
  }

  
}
