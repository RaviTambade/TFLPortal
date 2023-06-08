import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../project.service';
import { Project } from '../project';

@Component({
  selector: 'app-projectgrid',
  templateUrl: './projectgrid.component.html',
  styleUrls: ['./projectgrid.component.css']
})
export class ProjectgridComponent implements OnInit{


  constructor ( private svc : ProjectService){ }

  projects : Project[] | undefined; 

  ngOnInit(): void {
    this.svc.getAllProjects().subscribe(
      (response)=>{
        this.projects=response;
        console.log(this.projects);
    })
  }



}
