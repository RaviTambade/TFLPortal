import { Component, Input, OnInit } from '@angular/core';
import { ProjectallocationService } from 'src/app/shared/services/projectallocation.service';
import { WorkmgmtService } from 'src/app/shared/services/workmgmt.service';
import { ProjectEmployees } from '../../Model/ProjectEmployes';

@Component({
  selector: 'app-members-list',
  templateUrl: './members-list.component.html',
  styleUrls: ['./members-list.component.css']
})
export class MembersListComponent implements OnInit{

  constructor(private projectAllocSvc:ProjectallocationService){}
  @Input()projectId:number=0;
   status:string='yes';
  employees:ProjectEmployees[]=[];
ngOnInit(): void {
   this.projectAllocSvc.getEmployeesOfProject(this.projectId,this.status).subscribe((res)=>{
    this.employees=res;
   }) 
  }

}
