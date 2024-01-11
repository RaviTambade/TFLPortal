import { Component, Input, OnInit } from '@angular/core';
import { WorkmgmtService } from 'src/app/shared/services/workmgmt.service';
import { Sprint } from 'src/app/time-sheet/models/sprint';

@Component({
  selector: 'app-sprint-list',
  templateUrl: './sprint-list.component.html',
  styleUrls: ['./sprint-list.component.css']
})
export class SprintListComponent implements OnInit{
   todaysDate=new Date().toISOString().slice(0,10);
   @Input() projectId:number=0;
   sprints:Sprint[]=[];
     constructor(private workMgmt:WorkmgmtService){}
  ngOnInit(): void {
    console.log("ProjectId"+this.projectId)
    this.workMgmt.getOngoingSprints(this.projectId,this.todaysDate).subscribe((res)=>{
     this.sprints=res;
    })
  }

}
