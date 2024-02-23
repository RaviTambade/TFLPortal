import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { SprintService } from '../../Services/sprint.service';
import { Sprint } from '../../Models/sprint';
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
     })
  }

}
