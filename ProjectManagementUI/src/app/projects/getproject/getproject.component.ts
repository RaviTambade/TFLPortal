import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ProjectsService } from '../projects.service';
import { Projects } from '../Projects';

@Component({
  selector: 'app-getproject',
  templateUrl: './getproject.component.html',
  styleUrls: ['./getproject.component.scss']
})
export class GetprojectComponent implements OnInit {

  constructor(private svc : ProjectsService) { }

  
  @Input() projectId : number | undefined;
  project : Projects | undefined;
  @Output() sendProject = new EventEmitter();

  

  ngOnInit(): void {
  }

  getProject(projectId:any){
    this.svc.getProjectById(projectId).subscribe((response) =>{
      this.project = response;
      this.sendProject.emit({project:this.project});
      console.log(this.project);
    })
  }

}
