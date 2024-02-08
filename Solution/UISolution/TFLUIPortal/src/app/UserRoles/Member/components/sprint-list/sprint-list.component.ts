import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { WorkmgmtService } from 'src/app/shared/services/workmgmt.service';
import { Sprint } from 'src/app/time-sheet/models/sprint';

@Component({
  selector: 'app-sprint-list',
  templateUrl: './sprint-list.component.html',
})
export class SprintListComponent {
   todaysDate=new Date().toISOString().slice(0,10);
   @Input() projectId:number=0;
   sprints:Sprint[]=[];
     constructor(private workMgmt:WorkmgmtService){}
  ngOnChanges(changes:SimpleChanges): void {
    console.log("ProjectId"+this.projectId)
    this.workMgmt.getOngoingSprints(changes['projectId'].currentValue,this.todaysDate).subscribe((res)=>{
     this.sprints=res;
    })
  }

}
