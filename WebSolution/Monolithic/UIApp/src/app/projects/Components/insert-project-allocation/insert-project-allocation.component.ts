import { Component, OnInit } from '@angular/core';
import { ProjectMembership } from '../../Models/projectmembership';
import { ProjectsService } from '../../Services/projects.service';

@Component({
  selector: 'app-insert-project-allocation',
  templateUrl: './insert-project-allocation.component.html',
  styleUrls: ['./insert-project-allocation.component.css']
})
export class InsertProjectAllocationComponent implements OnInit{

  constructor(private service:ProjectsService){}

  projectAllocation:ProjectMembership={
    Id: 0,
    employeeId: 0,
    projectId: 0,
    projectRole: '',
    projectAssignDate: '',
    // releaseDate: '',
    currentProjectWorkingStatus: ''
  };

  ngOnInit(): void {
    
  }

  onSubmit(){
    this.projectAllocation.employeeId=2;
    // const employeeId=this.projectAllocation.employeeId;
    this.projectAllocation.projectId=3;
    // const projectId=this.projectAllocation.projectId;
    console.log(this.projectAllocation);
    this.service.assignedEmployeeToProject(this.projectAllocation.employeeId,this.projectAllocation.projectId,this.projectAllocation).subscribe((res)=>{
      console.log(res);
    })
  }
}
