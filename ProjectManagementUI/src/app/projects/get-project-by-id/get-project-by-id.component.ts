import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Projects } from '../Projects';
import { ProjectsService } from '../projects.service';

@Component({
  selector: 'app-get-project-by-id',
  templateUrl: './get-project-by-id.component.html',
  styleUrls: ['./get-project-by-id.component.scss']
})
export class GetProjectByIdComponent implements OnInit {

  @Input() projId : number | undefined;
  project : Projects | any;
  status:boolean|undefined;

  @Output() sendProject = new EventEmitter;

  constructor(private svc : ProjectsService) { }

  ngOnInit(): void {
    if(this.projId !=undefined)
    this.svc.getProjectById(this.projId).subscribe((response)=>{
      this.project=response;
      console.log(response);
      this.sendProject.emit({project:this.project});
    })
    
  }

  getProject(id:any){
    this.svc.getProjectById(id).subscribe((response) =>{
      this.project = response;
      console.log(response);
      this.sendProject.emit({project:this.project});
    })
  }

  receiveEmployee($event:any){
    this.project=$event.project;
  }

}
