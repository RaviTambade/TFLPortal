import { Component, OnInit } from '@angular/core';
import { Sprint } from 'src/app/employee/Models/ProjectMgmt/sprint';
import { SprintService } from 'src/app/employee/Services/sprint.service';

@Component({
  selector: 'ongoing-sprint',
  templateUrl: './ongoing-sprint.html',

})
export class OngoingSprint implements OnInit{

  sprint:Sprint |undefined;
  projectId:number=4;
  date:string="2024-01-25";

  constructor(private sprintSvc:SprintService){}

  ngOnInit(): void {
    this.sprintSvc.getCurrentSprint(this.projectId,this.date).subscribe((res)=>{
    this.sprint=res;
    console.log(res);
    })
  }
}
