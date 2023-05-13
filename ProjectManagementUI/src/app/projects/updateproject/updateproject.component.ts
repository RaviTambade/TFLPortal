import { Component, OnInit } from '@angular/core';
import { Projects } from '../Projects';
import { ProjectsService } from '../projects.service';

@Component({
  selector: 'app-updateproject',
  templateUrl: './updateproject.component.html',
  styleUrls: ['./updateproject.component.scss']
})
export class UpdateprojectComponent implements OnInit {

  project : Projects | any;
  projectId : any;
  status : boolean | undefined;
  constructor(private svc : ProjectsService) { }

  ngOnInit(): void {
  }

  updateProject(){
    this.svc.update(this.project).subscribe((response) => {
      this.project = response;
      console.log(response);
      if(response){
        alert("project updated successfully");
        window.location.reload();
      }
      else{
        alert("error")
      }
    });
  }

  receiveProject($event:any){
    this.project = $event.project;
  }

}
