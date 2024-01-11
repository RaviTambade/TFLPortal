import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WorkmgmtService } from 'src/app/shared/services/workmgmt.service';
import { Sprint } from 'src/app/time-sheet/models/sprint';

@Component({
  selector: 'app-sprint-details',
  templateUrl: './sprint-details.component.html',
  styleUrls: ['./sprint-details.component.css']
})
export class SprintDetailsComponent implements OnInit{

  todaysDate=new Date().toISOString().slice(0,10);
  projectId:number=0;
  sprints:Sprint[]=[];
  constructor(private workMgmt:WorkmgmtService,private router:ActivatedRoute){}
ngOnInit(): void {
 this.router.paramMap.subscribe((param)=>{
  this.projectId=Number(param.get('id'));
 this.workMgmt.getOngoingSprints(this.projectId,this.todaysDate).subscribe((res)=>{
  this.sprints=res;
 })
})
}

}
