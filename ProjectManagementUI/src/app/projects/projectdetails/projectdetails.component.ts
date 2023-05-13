import { Component, OnInit } from '@angular/core';
import { ProjectsService } from '../projects.service';
import { Projects } from '../Projects';

@Component({
  selector: 'app-projectdetails',
  templateUrl: './projectdetails.component.html',
  styleUrls: ['./projectdetails.component.scss']
})
export class ProjectdetailsComponent implements OnInit {

  constructor(private svc : ProjectsService) { }

  project : Projects | undefined;
  projectId : number | undefined;
  

  ngOnInit(): void {
  }

  getProject(projectId:number){
    this.svc.getProjectById(projectId).subscribe((response) =>{
      this.project = response;
      console.log(response);
    })
  }

}
