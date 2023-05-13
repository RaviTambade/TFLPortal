import { Component, OnInit } from '@angular/core';
import { ProjectsService } from '../projects.service';
import { Projects } from '../Projects';

@Component({
  selector: 'app-update-project',
  templateUrl: './update-project.component.html',
  styleUrls: ['./update-project.component.scss']
})
export class UpdateProjectComponent implements OnInit {

  project : Projects | any;
  status : boolean|undefined;
  projectId:any;


  constructor(private svc : ProjectsService) { }

  ngOnInit(): void {
  }


  update(){
    this.svc.update(this.project).subscribe(
      (response)=>{
        this.status=response;
        console.log(response);
      }
    )
  };

 

  receiveProject($event: any ){
    this.project=$event.project;
  }

}
