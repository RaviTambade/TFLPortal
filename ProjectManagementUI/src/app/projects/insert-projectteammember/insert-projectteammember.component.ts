import { Component, OnInit } from '@angular/core';
import { ProjectMember } from '../ProjectMember';
import { ProjectService } from 'app/projecttest/project.service';


@Component({
  selector: 'app-insert-projectteammember',
  templateUrl: './insert-projectteammember.component.html',
  styleUrls: ['./insert-projectteammember.component.scss']
})
export class InsertProjectteammemberComponent {
projectMember : ProjectMember ={
  Id: 0,
  projectId: 0,
  empId: 0
};

status : boolean | undefined;


  constructor(private svc : ProjectService) { }

  insertProjectMember(form:any){
    this.svc.insertProjectmember(form).subscribe(
      (response)=>{
        this.status=response;
        console.log(response);
        if(response){
          alert("Project Members Inserted Successfully");
          window.location.reload();
        }
        else{
          alert("error")
        }
      },(error)=>{
        this.status=false;
      }
    )
  }

  

}
