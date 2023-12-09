import { Component, Input } from '@angular/core';
import { ProjectsService } from '../../Services/projects.service';
import { ReleaseEmployee } from '../../Models/ReleaseEmployee';

@Component({
  selector: 'app-update-project-allocation',
  templateUrl: './update-project-allocation.component.html',
  styleUrls: ['./update-project-allocation.component.css']
})
export class UpdateProjectAllocationComponent {

  @Input() selectedEmployeeId :number=0;
  @Input() selectedProjectId :number=0;

  constructor(private service:ProjectsService){}


  updateProject:ReleaseEmployee={
    employeeId: 0,
    projectId: 0,
    releaseDate: new Date().toISOString(),
    status: 'no'
  };

  ngOnInit(): void {
    
  }

  onSubmit(){
    this.updateProject.employeeId=this.selectedEmployeeId ;
    this.updateProject.projectId=this.selectedProjectId;
    console.log(this.updateProject);
    console.log(this.updateProject.employeeId);
    console.log(this.updateProject.projectId);
    this.service.releaseEmployeeFromProject(this.updateProject.projectId,this.updateProject.employeeId,this.updateProject).subscribe((res)=>{
    console.log(res);
    })
  }
}
