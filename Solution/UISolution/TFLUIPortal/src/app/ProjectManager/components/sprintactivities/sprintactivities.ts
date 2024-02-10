import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProjectService } from 'src/app/shared/services/ProjectMgmt/project.service';
import { SprintDetails } from '../sprint-details/sprint-details';
import { SprintModel } from '../../Model/SprintModel';

@Component({
  selector: 'app-sprintactivities',
  templateUrl: './sprintactivities.html',
})
export class Sprintactivities implements OnInit{
  constructor(private router:ActivatedRoute,private sprintSvc:ProjectService){}
  sprintId:number=10;
  empployeeWorks:SprintModel[]=[];
  ngOnInit(): void {
    
      // this.sprintSvc.getSprintsTasks(this.sprintId).subscribe((res)=>{
      //   this.empployeeWorks=res;
      // })
  }

}
