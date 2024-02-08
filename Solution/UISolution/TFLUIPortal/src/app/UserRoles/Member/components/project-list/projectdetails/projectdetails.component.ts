import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProjectEmployees } from 'src/app/project-manager/Model/ProjectEmployes';
import { Project } from 'src/app/projects/Models/project';
import { ProjectService } from 'src/app/shared/services/project.service';
import { ProjectallocationService } from 'src/app/shared/services/projectallocation.service';

@Component({
  selector: 'app-projectdetails',
  templateUrl: './projectdetails.component.html',
})
export class ProjectdetailsComponent implements OnInit{
  constructor(private projectSvc:ProjectService,private router:ActivatedRoute,private projectAllocSvc:ProjectallocationService){}
  projectId:number|any;
  project:Project|undefined;
  status:string='yes';
  employees:ProjectEmployees[]=[];
  ngOnInit(): void {
    this.router.paramMap.subscribe((param)=>{
      this.projectId=param.get("id");
   
    this.projectSvc.getProjectDetails(this.projectId).subscribe((res)=>{
      this.project=res;
    })
    this.projectAllocSvc.getEmployeesOfProject(this.projectId,this.status).subscribe((res)=>{
      this.employees=res;
      console.log(res);
      })
    })
    }


}
