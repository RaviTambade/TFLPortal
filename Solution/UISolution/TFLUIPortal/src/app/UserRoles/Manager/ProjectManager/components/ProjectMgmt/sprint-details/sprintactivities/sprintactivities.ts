import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SprintDetails } from '../../../../Model/SprintDetails';
import { ProjectService } from 'src/app/shared/services/ProjectMgmt/project.service';

@Component({
  selector: 'app-sprintactivities',
  templateUrl: './sprintactivities.html',
})
export class Sprintactivities implements OnInit{
  constructor(private router:ActivatedRoute,private sprintSvc:ProjectService){}
  sprintId:number=0;
  empployeeWorks:SprintDetails[]=[];
  ngOnInit(): void {
    // this.router.paramMap.subscribe((res)=>{
    //   this.sprintId=Number(res.get('id'));
    //   console.log(this.sprintId);
    //   this.sprintSvc.getSprint(this.sprintId).subscribe((res)=>{
    //     this.empployeeWorks=res;
    //   })
    // })
  }

}
