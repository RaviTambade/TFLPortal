import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { Sprint } from 'src/app/shared/Entities/Projectmgmt/sprint';
import { ProjectService } from 'src/app/shared/services/ProjectMgmt/project.service';
@Component({
  selector: 'app-sprint-list',
  templateUrl: './sprint-list.html',
})
export class SprintList {
   todaysDate=new Date().toISOString().slice(0,10);
   @Input() projectId:number=0;
   sprints:Sprint|undefined;
     constructor(private workMgmt:ProjectService){}
  ngOnChanges(changes:SimpleChanges): void {
    console.log("ProjectId"+this.projectId)
    this.workMgmt.getCurrentSprint(changes['projectId'].currentValue,this.todaysDate).subscribe((res)=>{
     this.sprints=res;
    })
  }

}
