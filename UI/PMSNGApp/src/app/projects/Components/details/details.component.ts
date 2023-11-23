import { Component, OnInit } from '@angular/core';
import { Project } from '../../Models/project';
import { ProjectsService } from '../../Services/projects.service';

@Component({
  selector: 'project-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit{
  projectDetails: Project = {
    id: 0,
    title: '',
    startDate: '',
    status: '',
    teamManagerUserId: 0,
    teamManagerId: 0
  };

  constructor(private service:ProjectsService){
    }
projetctId:number=10;
  ngOnInit(): void {
    this.service.getProjectDetailsById(this.projetctId).subscribe((res)=>{
     this.projectDetails=res;
    })
  }
  


}
