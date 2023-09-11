import { Component, Input, OnInit } from '@angular/core';
import { ProjectService } from 'src/app/Services/project.service';

@Component({
  selector: 'app-projectteammembers',
  templateUrl: './projectteammembers.component.html',
  styleUrls: ['./projectteammembers.component.css']
})
export class ProjectteammembersComponent implements OnInit {
  @Input() projectId:any
  teamMembers:string[]
  constructor(private projectService:ProjectService){
    this.teamMembers=[]
  }
  ngOnInit(): void {
this.projectService.getProjectTeamMembers(this.projectId).subscribe((res)=>{
  this.teamMembers=res.teammembers
  console.log(res)
})
}
}
