import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmployeeWork } from 'src/app/activity/Models/EmployeeWork';
import { SprintDetails } from 'src/app/project-manager/Model/SprintDetails';
import { SprintService } from 'src/app/shared/services/sprint.service';
import { Sprint } from 'src/app/time-sheet/models/sprint';

@Component({
  selector: 'app-sprintactivities',
  templateUrl: './sprintactivities.component.html',
  styleUrls: ['./sprintactivities.component.css']
})
export class SprintactivitiesComponent implements OnInit{
  constructor(private router:ActivatedRoute,private sprintSvc:SprintService){}
  sprintId:number=0;
  empployeeWorks:SprintDetails[]=[];
  ngOnInit(): void {
    this.router.paramMap.subscribe((res)=>{
      this.sprintId=Number(res.get('id'));
      console.log(this.sprintId);
      this.sprintSvc.getSprintsWork(this.sprintId).subscribe((res)=>{
        this.empployeeWorks=res;
      })
    })
  }

}
