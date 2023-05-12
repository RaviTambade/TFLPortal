import { Component, OnInit } from '@angular/core';
import { Projects } from '../Projects';
import { ProjectsService } from '../projects.service';

@Component({
  selector: 'app-getall-projects',
  templateUrl: './getall-projects.component.html',
  styleUrls: ['./getall-projects.component.scss']
})
export class GetallProjectsComponent implements OnInit {

  projects :Projects[]|undefined;

  constructor(private svc: ProjectsService) { }

  ngOnInit(): void {

    this.svc.getProjects().subscribe((response)=>{
      this.projects=response;
      console.log(response);
    });
  }

}
