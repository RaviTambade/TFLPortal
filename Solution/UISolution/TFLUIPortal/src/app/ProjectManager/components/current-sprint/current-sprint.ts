import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { Sprint } from 'src/app/shared/Entities/Projectmgmt/sprint';
import { SprintService } from 'src/app/shared/services/ProjectMgmt/sprint.service';
@Component({
  selector: 'app-sprint-list',
  templateUrl: './current-sprint.html',
})
export class CurrentSprint implements OnInit{
   todaysDate=new Date().toISOString().slice(0,10);
    projectId:number=1;
   sprint:Sprint|undefined;
     constructor(private sprintMgmt:SprintService){}
  ngOnInit(): void {
    this.sprintMgmt.getCurrentSprint(this.projectId,this.todaysDate).subscribe((res)=>{
      this.sprint=res;
      console.log(res);
     })
  }

}
