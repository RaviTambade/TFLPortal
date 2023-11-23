import { Component, OnInit } from '@angular/core';
import { ProjectsService } from '../../Services/projects.service';
import { Project } from '../../Models/project';

@Component({
  selector: 'project-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor(private service:ProjectsService){

  }

  projects:Project[]=[];
  teammemberId:number=10;
  ngOnInit(): void {
    this.service.getProjectsList(this.teammemberId).subscribe((res)=>{
      this.projects=res;
      console.log(res);
    })
  }

}
