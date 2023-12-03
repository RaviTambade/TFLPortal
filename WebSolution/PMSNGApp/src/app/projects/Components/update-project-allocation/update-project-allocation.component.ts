import { Component } from '@angular/core';
import { ProjectAllocation } from '../../Models/projectallocation';
import { ProjectsService } from '../../Services/projects.service';

@Component({
  selector: 'app-update-project-allocation',
  templateUrl: './update-project-allocation.component.html',
  styleUrls: ['./update-project-allocation.component.css']
})
export class UpdateProjectAllocationComponent {

  constructor(private service:ProjectsService){}

  updateProject:any={
    
    employeeId: 0,
    projectId: 0,
    // membership: '',
    // assignDate: '',
    releaseDate: '',
    status: ''
  };

  ngOnInit(): void {
    
  }

  onSubmit(){
    this.updateProject.employeeId=2;
    this.updateProject.projectId=3;
    console.log(this.updateProject);
    this.service.releaseEmployeeToProject(this.updateProject.employeeId,this.updateProject.projectId,this.updateProject).subscribe((res)=>{
      console.log(res);
    })
  }


}
