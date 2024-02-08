import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { Sprint } from 'src/app/shared/models/sprint';
import { SprintService } from 'src/app/shared/services/ProjectMgmt/sprint.service';

@Component({
  selector: 'app-sprint-list',
  templateUrl: './sprint-list.component.html',
})
export class SprintListComponent {
   todaysDate=new Date().toISOString().slice(0,10);
   @Input() projectId:number=0;
   sprints:Sprint|undefined;
     constructor(private workMgmt:SprintService){}
  ngOnChanges(changes:SimpleChanges): void {
    console.log("ProjectId"+this.projectId)
    this.workMgmt.getCurrentSprint(changes['projectId'].currentValue,this.todaysDate).subscribe((res)=>{
     this.sprints=res;
    })
  }

}
