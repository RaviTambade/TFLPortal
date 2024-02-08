import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { ProjectallocationService } from 'src/app/shared/services/projectallocation.service';
import { WorkmgmtService } from 'src/app/shared/services/workmgmt.service';
import { ProjectEmployees } from '../../Model/ProjectEmployes';

@Component({
  selector: 'app-members-list',
  templateUrl: './members-list.component.html',
})
export class MembersListComponent{

  constructor(private projectAllocSvc:ProjectallocationService){}
  @Input()projectId:number=0;
   status:string='yes';
  employees:ProjectEmployees[]=[];
ngOnChanges(change:SimpleChanges): void {
   this.projectAllocSvc.getEmployeesOfProject(change['projectId'].currentValue,this.status).subscribe((res)=>{
    this.employees=res;
   }) 
  }

}
