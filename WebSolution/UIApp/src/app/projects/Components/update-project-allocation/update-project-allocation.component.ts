import { Component } from '@angular/core';
import { ProjectAllocation } from '../../Models/projectallocation';
import { ProjectsService } from '../../Services/projects.service';
import { ReleaseEmployee } from '../../Models/ReleaseEmployee';

@Component({
  selector: 'app-update-project-allocation',
  templateUrl: './update-project-allocation.component.html',
  styleUrls: ['./update-project-allocation.component.css']
})
export class UpdateProjectAllocationComponent {

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
    this.updateProject.employeeId=8;
    this.updateProject.projectId=8;
    console.log(this.updateProject);
    this.service.releaseEmployeeFromProject(this.updateProject.employeeId,this.updateProject.projectId,this.updateProject).subscribe((res)=>{
      console.log(res);
    })
  }


}
