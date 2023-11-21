import { Component, OnInit } from '@angular/core';
import { Project } from '../../Models/project';
import { ProjectsService } from '../../Services/projects.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit{
  projectDetails: Project = {
    id: 0,
    title: '',
    startDate: '',
    endDate: 0,
    description: '',
    status: '',
    teamManagerUserId: 0,
    teamManagerId: 0
  };

  constructor(private service:ProjectsService){
    }
projetctId:number=1;
  ngOnInit(): void {
    this.service.getProjectDetailsById(this.projetctId).subscribe((res)=>{
     this.projectDetails=res;
    })
  }
  


}
