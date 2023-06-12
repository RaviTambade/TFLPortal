import { Component, OnInit } from '@angular/core';
import { ManagerviewService } from '../../managerview.service';
import { Project } from '../../project';

@Component({
  selector: 'projectlist',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})
export class ProjectListComponent implements OnInit {
 projects:Project[] |undefined;
 
  constructor(private svc: ManagerviewService) {

  }
  ngOnInit(): void {
    this.svc.getAllProjects().subscribe(
      (response) => {
        this.projects = response;
        console.log(this.projects);
      })

   
  }

}
