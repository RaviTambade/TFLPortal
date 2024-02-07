import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Project } from 'src/app/Entities/Project';
import { ProjectService } from 'src/app/shared/services/ProjectMgmt/project.service';
@Component({
  selector: 'app-projectdetails',
  templateUrl: './projectdetails.component.html',
  styleUrls: ['./projectdetails.component.css']
})
export class ProjectdetailsComponent implements OnInit{
  constructor(private projectSvc:ProjectService,private router:ActivatedRoute){}
  projectId:number|any;
  project:Project|undefined;
  status:string='yes';
  employees:any[]=[];
  ngOnInit(): void {
    this.router.paramMap.subscribe((param)=>{
      this.projectId=param.get("id");
   
    this.projectSvc.getProject(this.projectId).subscribe((res)=>{
      this.project=res;
    })
    })
    }


}
